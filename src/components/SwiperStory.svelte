<script>
	import { onMount, tick, untrack } from "svelte";
	import loadCsv from "../utils/loadCsv";
	import { cubicOut } from "svelte/easing";
	import { fade, fly } from "svelte/transition";
	import Swiper from "swiper";
	import { Zoom, Keyboard } from "swiper/modules";
	import "swiper/css";
	import "swiper/css/zoom";
	import useWindowDimensions from "$runes/useWindowDimensions.svelte.js";
	import curve from "$svg/curve.svg";
	import arrowRight from "$svg/arrow-right.svg";
	import plus from "$svg/plus.svg";
	import minus from "$svg/minus.svg";
	import guide from "$svg/guide-text.svg";


	[]

	let { slides } = $props();

	let containerEl = $state();
	let swiper = $state();

	let aspectRatioMap = $state(new Map());

	let menuData = $state(null);
	let menuDataLoaded = $state(false);

	let imageIdToMenuId = $state(new Map());
	let menuIdToImageIds = $state(new Map());

	// Floating-point slide position (0 = slide 0, 1.5 = halfway between 1 and 2)
	let slidePosition = $state(0);
	let activeIndex = $state(0);
	let swipeDirection = $state(1); // 1 = moving to next slide, -1 = moving to previous
	let isDragging = $state(false);
	let justLeftNoImage = $state(false);

	// ─── Pretext / font sizing ────────────────────────────────────────────────────

	const REF_SIZE = 16; // baseline measurement size in px
	let fontFamily = $state("serif"); // read from DOM after mount — matches whatever CSS sets on .slide-body
	const PARA_MARGIN_EM = 0.75; // margin-bottom between <p> tags (em)

	// Line-height ramps from 1.15 at 21px up to 1.25 at 36px+, with a 1.1 floor.
	function lineHeightFor(fontSize) {
		return Math.max(1, Math.min(1.2, 1.01 + fontSize / 150));
	}

	// Strip HTML tags so pretext measures visible characters only, not tag syntax.
	function stripHtml(html) {
		return html.replace(/<[^>]+>/g, '');
	}

	// prepare() and layout() loaded dynamically — @chenglou/pretext is ESM-only
	// and must not run during SSR
	let zoomIds = $state(null);
	let ptPrepare = $state(null);
	let ptLayout = $state(null);
	let layout = $state('right');
	const BODY_CHAPTER_BG_CLASS = 'story-chapter-active';
	let soupGuideOpen = $state(false);
	let guideOverlayEl = $state(null);
	
	onMount(async () => {
		const mod = await import("@chenglou/pretext");
		ptPrepare = mod.prepare;
		ptLayout = mod.layout;

		try {
			menuData = await loadCsv("assets/data/menu-map.csv");

			const imageToMenu = new Map();
			const menuToImages = new Map();
			
			menuData.forEach(row => {
				const menuId = String(row.menu_id);
				const imageId = String(row.image_id);
				// Try to find page number column (page, page_number, order, etc.)
				const page = parseInt(row.page || row.page_number || row.order || 0);
				
				// Map image_id -> menu_id
				imageToMenu.set(imageId, menuId);
				
				// Map menu_id -> array of objects temporarily
				if (!menuToImages.has(menuId)) {
					menuToImages.set(menuId, []);
				}
				menuToImages.get(menuId).push({ id: imageId, page });
				
			});

			// Sort by page number and extract IDs
			for (const [menuId, images] of menuToImages) {
				images.sort((a, b) => a.page - b.page);
				menuToImages.set(menuId, images.map(img => img.id));
			}


			menuData.forEach(row => {
				const imageId = String(row.image_id);
				const width = Number(row.width);
				const height = Number(row.height);
				const aspectRatio = width / height;
				aspectRatioMap.set(imageId, { width, height, aspectRatio });
			});

			imageIdToMenuId = imageToMenu;
			menuIdToImageIds = menuToImages;
					
			menuDataLoaded = true;
		} catch (e) {
			console.error("Failed to load menu data:", e);
		}		
	});

	function getRelatedImageIds(imageId){

		const menuId = imageIdToMenuId.get(String(imageId));
		const relatedIds = menuIdToImageIds.get(menuId) || [];
		// Return a NEW array so Svelte detects changes
		const result = [...relatedIds];
		zoomIds = result;
	}

	function normalizeImageId(value) {
		const tail = String(value ?? "").split('/').pop() ?? "";
		return tail.replace(/\.[^.]+$/, "");
	}

	function goToGuideSlide(idAttr) {
		const idNum = Number.parseInt(String(idAttr ?? ''), 10);
		if (!Number.isInteger(idNum) || idNum < 1 || idNum > 10) return false;
		const nextIndex = Math.max(0, Math.min(idNum, slides.length - 1));
		soupGuideOpen = false;
		swiper?.slideTo(nextIndex);
		return true;
	}

	function onGuideOverlayClick(event) {
		// Fallback: clicking outside bound guide targets closes the overlay.
		soupGuideOpen = false;
	}

	$effect(() => {
		if (!soupGuideOpen || !guideOverlayEl) return;
		const groups = Array.from(guideOverlayEl.querySelectorAll('svg g[id]'));
		const cleanupFns = [];

		groups.forEach((group) => {
			const idAttr = group.getAttribute('id') ?? '';
			const idNum = Number.parseInt(idAttr, 10);
			if (!Number.isInteger(idNum) || idNum < 1 || idNum > 10) return;

			group.style.cursor = 'pointer';
			const onGroupClick = (event) => {
				event.preventDefault();
				event.stopPropagation();
				goToGuideSlide(idAttr);
			};
			group.addEventListener('click', onGroupClick);
			cleanupFns.push(() => group.removeEventListener('click', onGroupClick));
		});

		return () => {
			cleanupFns.forEach((fn) => fn());
		};
	});


	let dims = new useWindowDimensions();

	// Both measured from the DOM — CSS padding changes are reflected automatically
	let textWidths = $state([]); // per-slide text width, updated via bind:clientWidth
	let wrapperClientHeights = $state([]); // per-slide, updated via bind:clientHeight
	let wrapperPadV = $state(0); // vertical padding of .slide-body-wrapper, stored separately

	// Any wrapper element is sufficient — all share the same CSS, last bind:this write wins
	let wrapperEl = $state(null);

	$effect(() => {
		const body = document?.body;
		if (!body) return;
		const isChapterSlide = slides[activeIndex]?.class === 'chapter';
		body.classList.toggle(BODY_CHAPTER_BG_CLASS, isChapterSlide);
		return () => {
			body.classList.remove(BODY_CHAPTER_BG_CLASS);
		};
	});

	$effect(() => {
		const el = wrapperEl;
		if (!el) return;
		dims.height; dims.width; // re-run on viewport resize or orientation change
		const s = getComputedStyle(el);
		wrapperPadV = parseFloat(s.paddingTop) + parseFloat(s.paddingBottom);
		const bodyEl = el.querySelector(".slide-body");
		if (bodyEl) fontFamily = getComputedStyle(bodyEl).fontFamily;
	});

	$effect(() => {
		if (soupPanZoom || !slides[activeIndex]?.course) {
			soupGuideOpen = false;
		}
	});

	// Per-slide chrome (kicker + title + rule) heights — bound from DOM
	let chromeHeights = $state(Array.from({ length: untrack(() => slides.length) }, () => 0));

	const MIN_FONT = 14;
	const MAX_FIT_FONT = 24;
	const RIGHT_LAYOUT_BODY_MAX_VH = 0.8;
	const AUTO_BODY_FONT_SIZE = 24;

	function isAutoTypeSlide(slide) {
		return slide?.type === 'auto';
	}

	function isTopLabelSmall(slide) {
		if(slide?.topLabelSmall === 'true') return true;
		return false;
	}

	// Binary search for the largest font size ≥ MIN_FONT where all paragraphs fit availH.
	function fitFontSize(paragraphs, availH, textWidth) {
		let lo = MIN_FONT, hi = MAX_FIT_FONT;
		for (let iter = 0; iter < 12; iter++) {
			const mid = (lo + hi) / 2;
			const lh = lineHeightFor(mid);
			let h = 0;
			for (const para of paragraphs) {
				const prepared = ptPrepare(para, `${mid}px ${fontFamily}`);
				h += ptLayout(prepared, textWidth, mid * lh).height;
			}
			// Add inter-paragraph margins (CSS margin-bottom, skipped on last <p>)
			h += (paragraphs.length - 1) * mid * PARA_MARGIN_EM;
			if (h <= availH) lo = mid; else hi = mid;
		}
		return Math.round(lo * 10) / 10;
	}

	// Measure actual text height at a fixed font size (no binary search).
	function textHeightAt(paragraphs, fontSize, textWidth) {
		const lh = lineHeightFor(fontSize);
		let h = 0;
		for (const para of paragraphs) {
			const prepared = ptPrepare(para, `${fontSize}px ${fontFamily}`);
			h += ptLayout(prepared, textWidth, fontSize * lh).height;
		}
		h += (paragraphs.length - 1) * fontSize * PARA_MARGIN_EM;
		return h;
	}

	// Per-slide layout: font size + optional wrapper height override when text hits MIN_FONT.
	let bodyLayouts = $derived(
		slides.map((slide, idx) => {
			if (isAutoTypeSlide(slide)) {
				// type:auto opts out of measured fitting and keeps a fixed body size.
				return { fontSize: AUTO_BODY_FONT_SIZE, wrapperMinH: null };
			}
			const clientH = wrapperClientHeights[idx] ?? 0;
			const textWidth = textWidths[idx] ?? 0;
			const rightLayoutAvailH = dims.height * RIGHT_LAYOUT_BODY_MAX_VH - wrapperPadV;
			const slideAvailH = layout === 'right' ? rightLayoutAvailH : clientH - wrapperPadV;
			if (!ptPrepare || !ptLayout || !slide.body?.length || textWidth <= 0 || slideAvailH <= 0) {
				return { fontSize: REF_SIZE, wrapperMinH: null };
			}
			const paragraphs = slide.body.map((l) => stripHtml(l.value ?? l));
			const fontSize = fitFontSize(paragraphs, slideAvailH - 8, textWidth);
			let wrapperMinH = null;
			if (fontSize <= MIN_FONT) {
				// Text hit the floor — expand the box to fit rather than clip.
				// Use the natural CSS height (not clientH which may already be expanded) as the threshold.
				const naturalH = idx === 0 ? dims.height * 0.30 - 100 : dims.height * 0.30;
				const needed = textHeightAt(paragraphs, MIN_FONT, textWidth) + 8 + wrapperPadV;
				if (needed > naturalH) wrapperMinH = Math.ceil(needed);
			}
			return { fontSize, wrapperMinH };
		})
	);

	let bodyFontSizes = $derived(bodyLayouts.map(l => l.fontSize));
	let bodyLineHeights = $derived(bodyFontSizes.map(lineHeightFor));
	let wrapperMinHeights = $derived(bodyLayouts.map(l => l.wrapperMinH));

	// ─── Helpers ────────────────────────────────────────────────────────────────

	function lerp(a, b, t) {
		return a + (b - a) * t;
	}

	// Smoothstep: ease-in-out with zero derivatives at t=0 and t=1
	function smoothstep(t) {
		return t * t * (3 - 2 * t);
	}

	// ─── Stack cards ─────────────────────────────────────────────────────────────

	// Static resting rotations/offsets for each card in the stack (bottom → top).
	// Wide fan spread — cards fill and overflow the screen at various angles.
	// tx/ty are percentages of card width/height.
	const IMG_BASE = 'https://s3.us-east-1.amazonaws.com/pudding.cool/projects/menu-images/';
	let buttolphPos = {
		rot: 8, tx: -80, ty: -20, widthPct: 50
	}
	if (untrack(() => layout) === "right") {
		buttolphPos = {
			rot: 8, tx: 80, ty: 0, widthPct: 75
		}
	}
	const STACK = [
		{ rot: 8, tx: 65, ty: -50, widthPct: 50, src: `assets/menus/4000000219.png` },  // top-left
		{ rot:  50, tx:  50, ty: 0, widthPct: 50, src: `assets/menus/4000000068.png` },  // bottom — top-right corner
		{ rot: -20, tx: -120, ty:  40, widthPct: 50, src: `assets/menus/4046090.png` },  // bottom-left
		{ rot:  3, tx:  -80, ty:  -20, widthPct: 50, src: `assets/menus/476900.png` },  // bottom-right
		{ rot: 2, tx: 5, ty: -50, widthPct: 50, src: `assets/menus/4000008419.png` },  // top-left
		{ rot: 4, tx: 50, ty:  0, widthPct: 30, fitViewportHeight: true, src: `assets/menus/fish.png` },  // lower-left
		{ rot:  18, tx:  -20, ty:  35, widthPct: 50, src: `assets/menus/470904.png`,  role: 'heroLeft' },   // hero left — animates to side-by-side
		{ rot: 10, tx: 50, ty: -50, widthPct: 50, src: `assets/menus/474586.png`, role: 'heroRight' }, // hero right — animates to side-by-side
		{ rot:  buttolphPos["rot"], tx:   buttolphPos["tx"], ty:   buttolphPos["ty"], widthPct: buttolphPos["widthPct"], src: "assets/menus/buttolph_portrait.png", role: 'second' }, // flies off on slide 2→3
		{ rot:  -3, tx:   20, ty:  -2, widthPct: 100, src: "assets/menus/4000003649.png", role: 'top' },  // flies off on slide 1→2
	];

	const clamp01 = (v) => Math.max(0, Math.min(1, v));
	function phaseProgress(startIdx, endIdx) {
		if (startIdx < 0 || endIdx < 0) return 0;
		const span = Math.max(1, endIdx - startIdx);
		return clamp01((slidePosition - startIdx) / span);
	}

	const coldNarrativeIdx = untrack(() => slides.findIndex((s) => s.id === 'cold'));
	const buttolphIdx = untrack(() => slides.findIndex((s) => s.id === 'buttolph'));
	const sideIdx = untrack(() => slides.findIndex((s) => s.id === 'side'));
	const illustrationIdx = untrack(() => slides.findIndex((s) => s.id === 'illustration'));

	// Top-card fly off stays aligned to cold -> buttolph transition.
	let stackT = $derived(phaseProgress(coldNarrativeIdx, buttolphIdx >= 0 ? buttolphIdx : coldNarrativeIdx + 1));

	// Non-hero fade + hero center move stay aligned to buttolph -> side transition.
	let sideEntryT = $derived(phaseProgress(buttolphIdx, sideIdx >= 0 ? sideIdx : buttolphIdx + 1));
	let stackOpacity = $derived(1 - sideEntryT);

	// Entire stack fades out when entering the first soup slide
	const titleIdx = untrack(() => slides.findIndex(s => s.id === 'soup'));
	let stackTitleOpacity = $derived(titleIdx >= 0 ? 1 - smoothstep(Math.max(0, Math.min(1, slidePosition - (titleIdx - 1)))) : 1);

	// Stack slides in from the right when reaching the 'cold' slide.
	const coldIdx = untrack(() => slides.findIndex(s => s.id === 'cold'));
	let stackSlideX = $derived(coldIdx >= 0 && activeIndex < coldIdx ? 100 : 0);
	const STACK_SLIDE_DURATION = 300;
	const STACK_SLIDE_DELAY = 200;
	let tweenedStackSlideX = $state(100);
	let stackSlideRaf = 0;

	$effect(() => {
		const target = stackSlideX;
		if (isDragging) {
			tweenedStackSlideX = target;
			if (stackSlideRaf) cancelAnimationFrame(stackSlideRaf);
			return;
		}

		const start = untrack(() => tweenedStackSlideX);
		if (Math.abs(start - target) < 0.01) {
			tweenedStackSlideX = target;
			return;
		}

		const startedAt = performance.now();
		if (stackSlideRaf) cancelAnimationFrame(stackSlideRaf);

		function animate(now) {
			const elapsed = now - startedAt - STACK_SLIDE_DELAY;
			if (elapsed < 0) {
				stackSlideRaf = requestAnimationFrame(animate);
				return;
			}
			const t = Math.min(1, elapsed / STACK_SLIDE_DURATION);
			tweenedStackSlideX = lerp(start, target, cubicOut(t));
			if (t < 1) stackSlideRaf = requestAnimationFrame(animate);
		}

		stackSlideRaf = requestAnimationFrame(animate);
		return () => {
			if (stackSlideRaf) cancelAnimationFrame(stackSlideRaf);
		};
	});

	const newSlideIdx = untrack(() => slides.findIndex(s => s.id === 'new-slide'));
	let introBgSlideX = $derived(coldIdx >= 0 && slidePosition < coldIdx ? 0 : -100);
	let introBgOpacity = $derived(
		newSlideIdx >= 0
			? (slidePosition >= newSlideIdx && (coldIdx < 0 || slidePosition < coldIdx + 0.35) ? 1 : 0)
			: 0
	);


	// Widths of animated cards — set by onload, included in stackStyles so reactive updates don't wipe them
	let heroRightWidth = $state(0);
	let secondWidth = $state(0);

	// Hero pair: cards 7 & 8 animate to center side-by-side entering "side".
	let heroT = $derived(smoothstep(sideEntryT));

	// Hero pair exits off-screen when swiping away from "side" toward "illustration".
	let heroExitT = $derived(smoothstep(phaseProgress(sideIdx, illustrationIdx >= 0 ? illustrationIdx : sideIdx + 1)));
	let isDesktop = $derived(dims.width > 600);

	// Per-card transform strings, driven by stackT
	const STACK_SPEED = 300; // ms — stack card fly-off speed (independent of Swiper slide speed)
	// transition is only applied during snap (not during drag) — same pattern as story-image —
	// so a fast flick still plays the full animation rather than jumping to the end state
	const SNAP_TRANSITION = `transform ${STACK_SPEED}ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity ${STACK_SPEED}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;

	let stackStyles = $derived(STACK.map((card) => {
		const isTop = card.role === 'top';
		const isSecond = card.role === 'second';
		const isHeroLeft = card.role === 'heroLeft';
		const isHeroRight = card.role === 'heroRight';
		const isHero = isHeroLeft || isHeroRight;
		const transition = isDragging ? 'none' : SNAP_TRANSITION;
		// Heroes stay fully visible; background cards dim but remain visible
		const opacity = isHero ? 1 : Math.max(1, stackOpacity);

		if (isTop) {
			const tx = lerp(card.tx, 200, stackT);
			const rot = lerp(card.rot, card.rot + 15, stackT);
			return `transform: rotate(${rot}deg) translate(${tx}%, ${card.ty}%); transition: ${transition}; opacity: ${opacity}`;
		} else if (isSecond) {
			const tx = lerp(card.tx, -270, heroT);
			const rot = lerp(card.rot, card.rot + 0, heroT);
			const widthStr = secondWidth ? `width: ${secondWidth}px; max-width: none; ` : '';
			return `${widthStr}transform: rotate(${rot}deg) translate(${tx}%, ${card.ty}%); transition: ${transition}; opacity: ${opacity}`;
		} else if (isHero) {
			const sign = isHeroLeft ? -1 : 1;
			// Desktop: side by side; mobile: stacked vertically
			const targetTx = isDesktop ? sign * 50 : 0;
			const targetTy = isDesktop ? 0 : sign * 60;
			const exitTx = isDesktop ? sign * 150 : 0;
			const exitTy = isDesktop ? 0 : sign * 150;
			const tx = lerp(lerp(card.tx, targetTx, heroT), exitTx, heroExitT);
			const ty = lerp(lerp(card.ty, targetTy, heroT), exitTy, heroExitT);
			const rot = lerp(card.rot, 0, heroT);
			const widthStr = isHeroRight && heroRightWidth ? `width: ${heroRightWidth}px; max-width: none; ` : '';
			return `${widthStr}transform: rotate(${rot}deg) translate(${tx}%, ${ty}%); transition: ${transition}; opacity: ${opacity}`;
		} else {
			return `transform: rotate(${card.rot}deg) translate(${card.tx}%, ${card.ty}%); opacity: ${opacity}`;
		}
	}));

	// ─── Derived state ────────────────────────────────────────────────────────────

	// from/to indices and blend factor
	let dragMultiplier = .2;
	let fromIdx = $derived(Math.floor(Math.max(0, Math.min(slidePosition, slides.length - 1))));
	let toIdx = $derived(Math.min(fromIdx + 1, slides.length - 1));
	let blendT = $derived(Math.max(0, Math.min(slidePosition - fromIdx, 1)));
	function hasSoupBg(slide) {
		return slide?.id === 'soup' && slide?.layout !== 'no-image' && !!slide?.bgSrc;
	}
	let isNoImageSlideActive = $derived(slides[activeIndex]?.layout === 'no-image');
	// While dragging on a soup slide, keep soup references pinned to the snapped active slide
	// so bg/label/annotation don't switch to the next soup slide mid-drag.
	let soupDragLocked = $derived(isDragging && hasSoupBg(slides[activeIndex]));
	let soupRefFromIdx = $derived(soupDragLocked ? activeIndex : fromIdx);
	let soupRefToIdx = $derived(soupDragLocked ? activeIndex : toIdx);
	let soupRefBlendT = $derived(soupDragLocked ? 0 : blendT);
	// While soup references are locked during drag, add a subtle live parallax offset
	// so the soup background still responds to finger movement.
	let soupDragDelta = $derived(Math.max(-1, Math.min(1, slidePosition - activeIndex)));
	let soupDragParallaxX = $derived(
		soupDragLocked ? soupDragDelta * dims.width * -dragMultiplier : 0
	);

	// Soup background — preload all bgSrc images up front so the img tag always gets
	// pixel data that's already in memory, making in:fade play against a visible image.
	let preloadedImages = $state(/** @type {Map<string, HTMLImageElement>} */ (new Map()));
	let lastSoupBgSrc = $state(null);

	onMount(() => {
		const srcs = [...new Set(slides.map(s => s.bgSrc).filter(Boolean))];
		srcs.forEach(src => {
			const img = new Image();
			img.onload = () => {
				preloadedImages = new Map([...preloadedImages, [src, img]]);
			};
			img.src = src;
		});
	});

	let soupBgRenderSrc = $derived(soupBg.src ?? (isNoImageSlideActive ? lastSoupBgSrc : null));
	$effect(() => {
		if (soupBg.src) lastSoupBgSrc = soupBg.src;
	});
	let soupBgNaturalW = $derived(preloadedImages.get(soupBgRenderSrc)?.naturalWidth ?? 0);
	let soupBgNaturalH = $derived(preloadedImages.get(soupBgRenderSrc)?.naturalHeight ?? 0);
	// Only expose src to the template once it's preloaded — prevents assigning a src the browser hasn't fetched yet
	let soupBgReadySrc = $derived(soupBgRenderSrc && preloadedImages.has(soupBgRenderSrc) ? soupBgRenderSrc : null);
	let soupBgMounted = $state(false);
	let soupBgIntroDelay = $derived(soupBgMounted && !justLeftNoImage ? 400 : 0);
	let soupBgOutroDelay = $derived(justLeftNoImage ? 0 : 100);
	let soupBgOutroDuration = $derived(justLeftNoImage ? 0 : 200);
	let soupBgLayerOpacity = $derived(isNoImageSlideActive ? 0 : (soupGuideOpen ? 0.18 : 1));
	let overlayLoadedIds = $state(new Set());
	let currentSoupBgImageId = $derived(normalizeImageId(soupBgReadySrc));
	let filteredZoomIds = $derived((zoomIds ?? []).filter((id) => normalizeImageId(id) !== currentSoupBgImageId));

	let soupBg = $derived.by(() => {
		const active = slides[activeIndex];
		if (!hasSoupBg(active)) return { src: null };
		return { src: active.bgSrc ?? null };
	});

	// Slow zoom animation: when settled on a zoom soup slide, zoomProgress eases 0→1
	// over ZOOM_DURATION ms, driving the image from fit-height toward the focal point.
	const ZOOM_DURATION = 6000;
	let zoomProgress = $state(0);

	$effect(() => {
		const slide = slides[activeIndex];
		const isZoomSlide = hasSoupBg(slide) && slide?.layout !== 'fit-height';
		if (!isZoomSlide || soupPanZoom) { zoomProgress = 0; return; }

		zoomProgress = 0;
		let frame;
		const timeout = setTimeout(() => {
			const start = performance.now();
			function tick(now) {
				const t = Math.min(1, (now - start) / ZOOM_DURATION);
				zoomProgress = smoothstep(t);
				if (t < 1) frame = requestAnimationFrame(tick);
			}
			frame = requestAnimationFrame(tick);
		}, 2000);
		return () => { clearTimeout(timeout); cancelAnimationFrame(frame); };
	});

	// Compute fit-height xform (common starting point for all soup slides).
	function fitHeightXform(vw, vh, nw, nh) {
		const s  = vh / (vw * nh / nw);
		const tx = layout === 'right' ? vw - vw * s - 20 : (vw - vw * s) / 2;
		return { tx, ty: 0, s };
	}

	// Compute (tx, ty, s) for a soup slide.
	// zp (0–1): 0 = fit-height start, 1 = full focal zoom (ignored for fit-height slides).
	function soupSlideXform(slide, vw, vh, nw, nh, zp = 1) {
		if (!nw || !nh) return { tx: 0, ty: 0, s: 1 };
		const fh = fitHeightXform(vw, vh, nw, nh);
		if (slide?.layout === 'fit-height') return fh;
		// Focal zoom target
		const pf  = (v, d) => parseFloat(v ?? d);
		const s   = pf(slide?.bgZoom, 1);
		const px  = pf(slide?.focalX, 0) * (vw / nw);
		const py  = pf(slide?.focalY, 0) * (vw / nw);
		const ax  = pf(slide?.anchorX, 0.5) * vw;
		const ay  = pf(slide?.anchorY, 0.5) * vh;
		const focal = { tx: ax - px * s, ty: ay - py * s, s };
		// Blend from fit-height → focal using zp
		return { s: lerp(fh.s, focal.s, zp), tx: lerp(fh.tx, focal.tx, zp), ty: lerp(fh.ty, focal.ty, zp) };
	}

	// Interpolate between the two soup slide transforms — exposes raw values for annotation positioning.
	// The from slide uses live zoomProgress; the to slide always starts at zp=0 (fit-height)
	// so each new zoom slide begins its animation fresh on arrival.
	let soupBgXform = $derived.by(() => {
		const vw = dims.width, vh = dims.height;
		const nw = soupBgNaturalW, nh = soupBgNaturalH;
		const from = slides[soupRefFromIdx];
		const to   = slides[soupRefToIdx];
		const fromIsSoup = hasSoupBg(from);
		const toIsSoup   = hasSoupBg(to);
		if (!fromIsSoup && !toIsSoup) return null;
		const fromIsZoom = fromIsSoup && from?.layout !== 'fit-height';
		const a = soupSlideXform(fromIsSoup ? from : to, vw, vh, nw, nh, fromIsZoom ? zoomProgress : 1);
		const b = soupSlideXform(toIsSoup   ? to   : from, vw, vh, nw, nh, 0);
		const t = smoothstep(soupRefBlendT);
		return {
			s: lerp(a.s, b.s, t),
			tx: lerp(a.tx, b.tx, t) + soupDragParallaxX,
			ty: lerp(a.ty, b.ty, t),
		};
	});
	let soupBgTransform = $derived(
		soupBgXform
			? `translate(${soupBgXform.tx}px, ${soupBgXform.ty}px) scale(${soupBgXform.s})`
			: 'none'
	);
	const PANZOOM_PAGE_GAP = 18;
	const PANZOOM_MOCK_PAGES = [
		"assets/menus/4000000068.png",
		"assets/menus/4046090.png"
	];

	function soupPageTransform(pageIndex = 0) {
		if (!soupBgXform) return 'none';
		const baseTx = soupPanZoom
			? (dims.width - dims.width * soupBgXform.s) / 2
			: soupBgXform.tx;
		const pageOffset = pageIndex * (dims.width + PANZOOM_PAGE_GAP) * soupBgXform.s;
		return `translate(${baseTx + pageOffset}px, ${soupBgXform.ty}px) scale(${soupBgXform.s})`;
	}

	// Annotation — pinned to the active zoom soup slide's annotationX/Y (native image pixels).
	// Hides when the dominant slide has no annotation data.
	function slideHasAnnotation(s) {
		return s?.id === 'soup' && s?.layout !== 'fit-height'
			&& s?.annotationX != null && s?.annotationY != null;
	}
	let annotationOpacity = $derived.by(() => {
		const from = slides[soupRefFromIdx];
		const to   = slides[soupRefToIdx];
		const fromHas = slideHasAnnotation(from);
		const toHas   = slideHasAnnotation(to);
		if (!fromHas && !toHas) return 0;
		// Fade in during the second half of the zoom animation (zoomProgress 0.5 → 1.0)
		const zoomFade = smoothstep(Math.max(0, zoomProgress * 2 - 1));
		if (fromHas && toHas) return zoomFade;
		const eased = smoothstep(soupRefBlendT);
		const slideFade = fromHas ? 1 - eased : eased;
		return Math.min(zoomFade, slideFade);
	});
	let annotationScreenPos = $derived.by(() => {
		const xform = soupBgXform;
		const nw = soupBgNaturalW;
		const vw = dims.width;
		if (!xform || !nw) return null;
		const from = slides[soupRefFromIdx];
		const to   = slides[soupRefToIdx];
		// Use the dominant slide's annotation coords (switches at 50% of the swipe)
		const src = slideHasAnnotation(to) && soupRefBlendT >= 0.5 ? to
		          : slideHasAnnotation(from) ? from
		          : slideHasAnnotation(to) ? to : null;
		if (!src) return null;
		const ax = parseFloat(src.annotationX);
		const ay = parseFloat(src.annotationY);
		// native pixel → screen: tx + (native / naturalWidth) * viewportWidth * scale
		return {
			x: xform.tx + (ax / nw) * vw * xform.s,
			y: xform.ty + (ay / nw) * vw * xform.s,
		};
	});

	// Top label follows the active soup-bg slide only.
	let soupTopLabel = $derived.by(() => {
		const active = slides[activeIndex];
		if (!hasSoupBg(active)) return null;
		return active?.topLabel ?? null;
	});

	// Optional contextual label rendered over the soup background image.
	let soupInfoLabel = $derived.by(() => {
		const active = slides[activeIndex];
		if (!hasSoupBg(active)) return null;
		return active?.infoLabel ?? null;
	});

	const defaultZoom = { scale: 1, x: 0, y: 0 };

	// Image zoom / pan — eased so transitions feel cinematic rather than linear
	let zoomT = $derived(smoothstep(blendT));
	let fromZoom = $derived(slides[fromIdx].zoom ?? defaultZoom);
	let toZoom = $derived(slides[toIdx].zoom ?? defaultZoom);
	let zoomScale = $derived(lerp(fromZoom.scale, toZoom.scale, zoomT));
	let zoomX = $derived(lerp(fromZoom.x, toZoom.x, zoomT));
	let zoomY = $derived(lerp(fromZoom.y, toZoom.y, zoomT));

	// ─── Swiper init ─────────────────────────────────────────────────────────────

	onMount(() => {
		swiper = new Swiper(containerEl, {
			modules: [Zoom, Keyboard],
			// grabCursor: true,
			// resistanceRatio: 0.6,
			speed: 300,
			// threshold: 5,
			longSwipesRatio: 0.2,
			// longSwipesMs: 300,
			keyboard: { enabled: true },
			zoom: { maxRatio: 4, minRatio: 1 }
		});

		swiper.on("touchStart", () => {
			isDragging = true;
		});

		swiper.on("touchEnd", () => {
			isDragging = false;
		});

		swiper.on("setTranslate", (s, translate) => {
			if (!s.width) return;
			const raw = -translate / s.width;
			slidePosition = Math.max(0, Math.min(raw, slides.length - 1));
		});

		swiper.on("activeIndexChange", (s) => {
			const prevSlide = slides[activeIndex];
			const nextSlide = slides[s.activeIndex];
			justLeftNoImage = prevSlide?.layout === 'no-image' && nextSlide?.layout !== 'no-image';
			swipeDirection = s.activeIndex >= activeIndex ? 1 : -1;
			activeIndex = s.activeIndex;
			soupGuideOpen = false;
		});

		return () => swiper?.destroy();
	});

// ─── Lightbox ─────────────────────────────────────────────────────────────────

	let lightboxOpen = $state(false);
	let lbZoom = $state(1);
	let lbPanX = $state(0);
	let lbPanY = $state(0);

	const LB_MIN_ZOOM = 0.5;
	const LB_MAX_ZOOM = 10;

	// Raw pointer tracking — not reactive, just bookkeeping
	const lbPointers = new Map();
	let lbLastPinchDist = 0;

	function openLightbox() {
		lightboxOpen = true;
		lbZoom = 1;
		lbPanX = 0;
		lbPanY = 0;
	}

	function closeLightbox() {
		lightboxOpen = false;
	}

	function onLbPointerDown(e) {
		lbPointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
		e.currentTarget.setPointerCapture(e.pointerId);
		if (lbPointers.size === 2) {
			const pts = [...lbPointers.values()];
			lbLastPinchDist = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
		}
	}

	function onLbPointerMove(e) {
		if (!lbPointers.has(e.pointerId)) return;
		const prev = lbPointers.get(e.pointerId);
		lbPointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

		if (lbPointers.size === 1) {
			lbPanX += e.clientX - prev.x;
			lbPanY += e.clientY - prev.y;
		} else if (lbPointers.size === 2) {
			const pts = [...lbPointers.values()];
			const dist = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
			if (lbLastPinchDist > 0) {
				lbZoom = Math.max(LB_MIN_ZOOM, Math.min(LB_MAX_ZOOM, lbZoom * (dist / lbLastPinchDist)));
			}
			lbLastPinchDist = dist;
		}
	}

	function onLbPointerUp(e) {
		lbPointers.delete(e.pointerId);
		lbLastPinchDist = 0;
	}

	// Disable Swiper while lightbox or soup pan/zoom is active
	$effect(() => {
		if (!swiper) return;
		(lightboxOpen || soupPanZoom) ? swiper.disable() : swiper.enable();
	});

// ─── Soup pan/zoom ────────────────────────────────────────────────────────────

	let soupPanZoom = $state(false);
	let pzZoom = $state(1);
	let pzPanX = $state(0);
	let pzPanY = $state(0);
	let pzResetAnimating = $state(false);
	let soupZoomResetting = $state(false);

	const PZ_MAX_ZOOM = 8;
	const PZ_RESET_DURATION = 280;
	const SOUP_ZOOM_RESET_DURATION = 620;
	const PZ_PAN_STEP = 60;
	const PZ_ZOOM_STEP = 1.2;

	const pzPointers = new Map();
	let pzLastPinchDist = 0;
	let pzResetTimer;
	let soupZoomResetTimer;

	async function resetPanZoomView(animate = false) {
		if (pzResetTimer) clearTimeout(pzResetTimer);
		pzPointers.clear();
		pzLastPinchDist = 0;
		zoomProgress = 0;
		if (!animate) {
			pzResetAnimating = false;
			pzZoom = 1;
			pzPanX = 0;
			pzPanY = 0;
			return;
		}
		pzResetAnimating = true;
		await tick();
		requestAnimationFrame(() => {
			pzZoom = 1;
			pzPanX = 0;
			pzPanY = 0;
			pzResetTimer = setTimeout(() => {
				pzResetAnimating = false;
				pzResetTimer = null;
			}, PZ_RESET_DURATION);
		});
	}

	async function animateSoupZoomOut() {
		if (soupZoomResetTimer) clearTimeout(soupZoomResetTimer);
		soupZoomResetting = true;
		await tick();
		requestAnimationFrame(() => {
			zoomProgress = 0;
			soupZoomResetTimer = setTimeout(() => {
				soupZoomResetting = false;
				soupZoomResetTimer = null;
			}, SOUP_ZOOM_RESET_DURATION);
		});
	}

	async function enterPanZoom(imageId) {
		if (zoomProgress > 0 || soupBgXform) {
			await animateSoupZoomOut();
		}
		overlayLoadedIds = new Set();
		soupPanZoom = true;
		const imagePathTail = String(imageId ?? '').split('/').pop() ?? '';
		const normalizedImageId = normalizeImageId(imageId);
		const related = getRelatedImageIds(normalizedImageId);
		console.log(imagePathTail, related);
		
		resetPanZoomView();
	}

	function exitPanZoom() {
		resetPanZoomView();
		soupPanZoom = false;
		overlayLoadedIds = new Set();
	}

	function onPzPointerDown(e) {
		e.preventDefault();
		pzResetAnimating = false;
		pzPointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
		e.currentTarget.setPointerCapture(e.pointerId);
		if (pzPointers.size === 2) {
			const pts = [...pzPointers.values()];
			pzLastPinchDist = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
		}
	}

	function onPzPointerMove(e) {
		if (!pzPointers.has(e.pointerId)) return;
		const prev = pzPointers.get(e.pointerId);
		pzPointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
		if (pzPointers.size === 1) {
			pzPanX += e.clientX - prev.x;
			pzPanY += e.clientY - prev.y;
		} else if (pzPointers.size === 2) {
			const pts = [...pzPointers.values()];
			const dist = Math.hypot(pts[1].x - pts[0].x, pts[1].y - pts[0].y);
			if (pzLastPinchDist > 0) {
				pzZoom = Math.max(0.5, Math.min(PZ_MAX_ZOOM, pzZoom * (dist / pzLastPinchDist)));
			}
			pzLastPinchDist = dist;
		}
	}

	function onPzPointerUp(e) {
		pzPointers.delete(e.pointerId);
		pzLastPinchDist = 0;
	}

	function onPzWheel(e) {
		e.preventDefault();
		pzResetAnimating = false;
		const factor = Math.exp(-e.deltaY * 0.005);
		const newZoom = Math.max(0.5, Math.min(PZ_MAX_ZOOM, pzZoom * factor));
		const k = newZoom / pzZoom;
		pzPanX = e.clientX * (1 - k) + pzPanX * k;
		pzPanY = e.clientY * (1 - k) + pzPanY * k;
		pzZoom = newZoom;
	}

	function nudgePan(dx, dy) {
		pzResetAnimating = false;
		pzPanX += dx;
		pzPanY += dy;
	}

	function stepZoom(multiplier) {
		pzResetAnimating = false;
		pzZoom = Math.max(0.5, Math.min(PZ_MAX_ZOOM, pzZoom * multiplier));
	}

	$effect(() => {
		if (!soupPanZoom) return;

		function onPanZoomKeydown(event) {
			const target = event.target;
			if (target instanceof HTMLElement) {
				const tagName = target.tagName;
				if (target.isContentEditable || tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT') {
					return;
				}
			}

			switch (event.key) {
				case 'ArrowUp':
					event.preventDefault();
					nudgePan(0, PZ_PAN_STEP);
					break;
				case 'ArrowDown':
					event.preventDefault();
					nudgePan(0, -PZ_PAN_STEP);
					break;
				case 'ArrowLeft':
					event.preventDefault();
					nudgePan(PZ_PAN_STEP, 0);
					break;
				case 'ArrowRight':
					event.preventDefault();
					nudgePan(-PZ_PAN_STEP, 0);
					break;
			}
		}

		window.addEventListener('keydown', onPanZoomKeydown);
		return () => {
			window.removeEventListener('keydown', onPanZoomKeydown);
		};
	});
</script>

<section class="story">
	<!-- ── Fixed background ── -->
	<div class="story-bg" aria-hidden="true">
		<div
			class="intro-bg"
			style="opacity: {introBgOpacity * (soupGuideOpen ? 0.18 : 1)}; transform: translateX({introBgSlideX}%) rotate(-2deg); transition: transform .4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 220ms ease;"
		></div>

		<!-- Zoomed photo background (visible from slide 1 onward) -->
		<div
			class="story-image"
			style="transform: scale({zoomScale}) translate({zoomX}%, {zoomY}%);
			       opacity: {Math.min(1, slidePosition) * (soupGuideOpen ? 0.18 : 1)};
			       transition: {isDragging ? 'none' : 'transform 420ms ease-in'}"
		></div>

		<!-- Soup slide background image — zoomed and pinned to focal point -->
		{#if soupBgReadySrc}
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div class="soup-bg"
				class:panzoom-active={soupPanZoom}
				style="opacity: {soupBgLayerOpacity}; transition: opacity 320ms ease;"
				onpointerdown={soupPanZoom ? onPzPointerDown : undefined}
				onpointermove={soupPanZoom ? onPzPointerMove : undefined}
				onpointerup={soupPanZoom ? onPzPointerUp : undefined}
				onpointercancel={soupPanZoom ? onPzPointerUp : undefined}
			onwheel={soupPanZoom ? onPzWheel : undefined}
			>
				<div class="soup-bg-pz" class:resetting={pzResetAnimating} style={soupPanZoom ? `transform: translate(${pzPanX}px, ${pzPanY}px) scale(${pzZoom})` : ''}>
					{#key soupBgReadySrc}
						<img
							src={soupBgReadySrc}
							alt=""
							draggable="false"
							onintroend={() => { soupBgMounted = true; justLeftNoImage = false; }}
							onoutroend={() => { if (!soupBgReadySrc) soupBgMounted = false; }}
							class:soup-zoom-resetting={soupZoomResetting}
							out:fade|global={{ duration: soupBgOutroDuration, delay: soupBgOutroDelay, easing: cubicOut }}
							in:fly|global={{ duration: 500, delay: soupBgIntroDelay, x: dims.width/2 * swipeDirection, easing: cubicOut }}
							style="transform: {soupPageTransform(0)}; transform-origin: 0 0;"
						/>
					{/key}
					{#if soupPanZoom}
						{#each filteredZoomIds as pageSrc, pageIndex}	
							<img
								class="soup-bg-overlay-mock"
								class:loaded={overlayLoadedIds.has(pageSrc)}
								onload={() => {
									if (!overlayLoadedIds.has(pageSrc)) {
										overlayLoadedIds = new Set([...overlayLoadedIds, pageSrc]);
									}
								}}
								in:fade={{ duration: 300, delay: 0, easing: cubicOut }}
								src={`https://s3.us-east-1.amazonaws.com/pudding.cool/projects/menu-images/${pageSrc}.jpg`}
								alt=""
								draggable="false"
								style="transform: {soupPageTransform(pageIndex + 1)}; transform-origin: 0 0;"
							/>
						{/each}
					{/if}
				</div>
				{#if annotationScreenPos && !soupPanZoom}
					<div
						class="soup-annotation"
						style="right: calc(100% - {annotationScreenPos.x}px); top: {annotationScreenPos.y}px; opacity: {annotationOpacity};"
					>
						<img src="assets/pointer.png" />
					</div>
				{/if}
			</div>
		{/if}

		<div class="stack" style="pointer-events: none; opacity: {stackTitleOpacity * (soupGuideOpen ? 0.18 : 1)}; transform: translate3d(0%, {-tweenedStackSlideX}%, 0); transition: opacity 700ms ease;">
			{#each STACK as card, i}
				<img class="stack-card" src={card.src} alt="" loading="lazy" decoding="async" draggable="false" style={stackStyles[i]} onload={(e) => {
						if (card.fitViewportHeight) {
							e.currentTarget.style.height = '100%';
							e.currentTarget.style.width = 'auto';
							e.currentTarget.style.maxWidth = 'none';
							return;
						}
						const w = e.currentTarget.naturalWidth * (card.widthPct / 100);
						if (card.role === 'heroRight') heroRightWidth = w;
						else if (card.role === 'second') secondWidth = w;
						else e.currentTarget.style.width = w + 'px';
					}} />
			{/each}
		</div>

		<div class="story-overlay"></div>
	</div>

	{#if soupGuideOpen}
		<button
			type="button"
			bind:this={guideOverlayEl}
			class="soup-guide-overlay"
			onclick={onGuideOverlayClick}
			aria-label="Close guide"
		>
			{@html guide}
			<img src="/assets/menus/guide.png" alt="" />
		</button>
	{/if}

	{#if !soupPanZoom && slides[activeIndex]?.course}
			<div
				class="soup-slide-index-label"
				class:guide-open={soupGuideOpen}
				aria-live="polite"
			>
				<details bind:open={soupGuideOpen}>
					<summary>Course {@html slides[activeIndex]?.course}</summary>
				</details>
			</div>	
	{/if}
	<!-- ── Swiper ── -->
	<div class="swiper" bind:this={containerEl} style="pointer-events: {soupPanZoom ? 'none' : 'auto'}">
		<div class="swiper-wrapper">
			{#each slides as slide, i}
				{@const firstSlide = i === 0}
				<div class="swiper-slide" class:is-zoom-slide={slide.zoomSlide}>
					{#if !slide.image}
						<div class="slide-inner {layout === 'right' ? 'right-align' : ''}"
							class:is-active={activeIndex === i}
							class:center-align={slide.layout === 'no-image'}
							class:first-slide={firstSlide}
							class:hidden={soupPanZoom}
							style="justify-content: {slide.id == "title" ? 'center' : ''}"
						>							
							{#if slide.body && slide.id !== 'title'}
								<div class="slide-content {slide.image ? "food-item" : ''}" style="flex-direction: {slide.image ? 'row' : ''};">
									{#if slide.id === 'soup' && !slide.image}
										<div class="slide-tab slide-tab-explore" style="right: 30px;">
											<div class="slide-curve">
												{@html curve}
											</div>
											{#if hasSoupBg(slide) && soupBgReadySrc}
												<button onclick={() => enterPanZoom(slide.bgSrc)} aria-label="Explore image" class="">
													<span>VIEW FULL MENU -&gt;</span>
												</button>
											{/if}
											
											<div class="slide-curve slide-curve-right">
												{@html curve}
											</div>
										</div>

										{#if slide.topLabel}
											<div class="slide-tab" class:slide-tab-small={isTopLabelSmall(slide)}>
												<div class="slide-curve">
													{@html curve}
												</div>
												<p>{@html slide.topLabel}</p>
												<div style="
													"
													class="slide-curve slide-curve-right">
														{@html curve}
												</div>
											</div>
										{/if}
									{/if}
									<div
										class="slide-body-wrapper {slide.image ? 'has-image' : ''} {firstSlide ? 'first-slide' : ''} {slide.layout === 'no-image' ? 'no-image' : ''} {isAutoTypeSlide(slide) ? 'is-auto-type' : ''}"
										bind:this={wrapperEl}
										bind:clientHeight={wrapperClientHeights[i]}
										style={slide.layout === 'no-image'
											? `font-size: ${slide.id === 'new-slide' ? 36 : bodyFontSizes[i]}px; line-height: ${slide.id === 'new-slide' ? "1" : bodyLineHeights[i]}; ${(slide.id === 'new-slide' || bodyFontSizes[i] > 36) ? '-webkit-font-smoothing: antialiased;' : ''}`
											: slide.id === 'new-slide'
												? 'font-size: 36px; line-height: 1; -webkit-font-smoothing: antialiased;'
												: `font-size: ${bodyFontSizes[i]}px; line-height: ${bodyLineHeights[i]}; ${wrapperMinHeights[i] != null ? `height: ${wrapperMinHeights[i]}px;` : ''} ${bodyFontSizes[i] > 36 ? '-webkit-font-smoothing: antialiased;' : ''}`}
									>
										<div class="slide-body-text" bind:clientWidth={textWidths[i]}>
											{#each slide.body as line}
												<p class="slide-body">{@html line.value ?? line}</p>
											{/each}
										</div>
									</div>
									{#if firstSlide}
										<div class="swipe-right">
											<span class="swipe-right-note">swipe right to continue&nbsp;--&gt;
											
												<span class="desktop-keyboard">or use the keyboard
													<div class="key"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left svelte-drta2n" style="width: 1em; height: 1em; transform: rotate(0deg);"><g><polyline points="15 18 9 12 15 6"></polyline></g></svg></div>
													<div class="key"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right svelte-drta2n" style="width: 1em; height: 1em; transform: rotate(0deg);"><g><polyline points="9 18 15 12 9 6"></polyline></g></svg></div>
												</span>
											</span>
										
										</div>
									{/if}
														{#if soupInfoLabel && !soupPanZoom}
						<details class="">
							<summary>Fun Fact</summary>
							<p>{@html soupInfoLabel}</p>
						</details>
					{/if}
								</div>
							{/if}
							
							<div class="slide-chrome" bind:clientHeight={chromeHeights[i]}>
								<span class="slide-kicker">{slide.kicker}</span>
								<h2 class="slide-title">{slide.title}</h2>
								<div class="slide-rule"></div>
							</div>
						</div>
					{:else}
						<div class="slide-inline-image">
							<div class="slide-inline-image-frame"
								style="transform: translate(0,0) rotate({slide.image === 'assets/menus/section.png' ? '-.2deg' : '0deg'});"
							>
								<img src={slide.image} alt={slide.imageAlt ?? ''} class={slide.class ? slide.class : ''} />
								{#if slide.image === 'assets/menus/title.png'}
									<div class="byline">
										<p><a href="https://pudding.cool/author/stephen-lurie/" target="_blank">By Stephen Lurie</a></p>
										<p>June 2026</p>
									</div>
								{/if}
								{#if slide.image === 'assets/menus/section.png'}
								<div class="section-text">
									{#if slide.sectionCount}
										<p class="course-count">Course {slide.sectionCount}</p>
										<img src={`assets/menus/${slide.sectionCount}.png`} alt="" />
										<p class="course-name">{slide.courseName}</p>
										<p class="course-description">{slide.courseDescription}</p>
									{/if}
								</div>
								{/if}
							</div>
						</div>
					{/if}

				</div>
			{/each}
		</div>
	</div>


<!-- ── Swipe hint (first slide only) ── -->
	{#if activeIndex === 0}
		<div class="swipe-hint" aria-hidden="true">
			<span>swipe</span>
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<polyline points="9 18 15 12 9 6" />
			</svg>
		</div>
	{/if}

	<!-- ── Pan/zoom button ── -->
	{#if soupPanZoom}

		<div class="soup-panzoom-controls" aria-label="Pan and zoom controls" role="group">
			<p>pan/zoom with your mouse</p>
			<div class="soup-panzoom-controls-grid">
				<button class="pz-btn pz-up" onclick={() => nudgePan(0, PZ_PAN_STEP)} aria-label="Pan up">
					<div style="transform: rotate(-90deg);">
						{@html arrowRight}
					</div>
				</button>
				<button class="pz-btn pz-left" onclick={() => nudgePan(PZ_PAN_STEP, 0)} aria-label="Pan left">
					<div style="transform: rotate(180deg);">
						{@html arrowRight}
					</div>
				</button>
				<button class="pz-btn pz-right" onclick={() => nudgePan(-PZ_PAN_STEP, 0)} aria-label="Pan right">
					<div style="transform: rotate(0deg);">
						{@html arrowRight}
					</div>
				</button>
				<button class="pz-btn pz-down" onclick={() => nudgePan(0, -PZ_PAN_STEP)} aria-label="Pan down">
					<div style="transform: rotate(90deg);">
						{@html arrowRight}
					</div>
				</button>
			</div>
			<div class="soup-panzoom-controls-actions">
				<button class="pz-btn" onclick={() => stepZoom(PZ_ZOOM_STEP)} aria-label="Zoom in">{@html plus}</button>
				<button class="pz-btn" onclick={() => stepZoom(1 / PZ_ZOOM_STEP)} aria-label="Zoom out">{@html minus}</button>
			</div>
		</div>
		<!-- <button class="soup-panzoom-reset" onclick={() => resetPanZoomView(true)} aria-label="Reset zoom">Reset</button> -->
		<button class="soup-panzoom-exit soup-top-label" onclick={exitPanZoom} aria-label="Exit pan/zoom">
			<span>
				GO BACK
			</span>
		</button>
		<div class="panzoom-label">
			<p>{soupTopLabel}</p>
		</div>

	{/if}

	<!-- ── Slide counter ── -->
	<!-- {#if soupTopLabel}
		<div class="soup-top-label" style="opacity: {soupBg.opacity}; transition: {isDragging ? 'none' : `opacity ${STACK_SPEED}ms ease`}">
			<span>{soupTopLabel}</span>
			<span class="blur">{soupTopLabel}</span>
		</div>
	{/if} -->

	<div class="slide-counter" aria-live="polite">
		<span class="counter-current">{String(activeIndex + 1).padStart(2, "0")}</span>
		<span class="counter-sep">/</span>
		<span class="counter-total">{String(slides.length).padStart(2, "0")}</span>
	</div>
</section>

<!-- ── Lightbox ── -->
{#if lightboxOpen}
	<div class="lightbox" role="dialog" aria-modal="true" aria-label="Menu explorer">
		<button class="lightbox-back" onclick={closeLightbox}>← Back</button>
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<div
			class="lightbox-stage"
			onpointerdown={onLbPointerDown}
			onpointermove={onLbPointerMove}
			onpointerup={onLbPointerUp}
			onpointercancel={onLbPointerUp}
		>
			<img
				src={soupBg.src}
				alt="Menu"
				draggable="false"
				class="lightbox-img"
				style="transform: translate({lbPanX}px, {lbPanY}px) scale({lbZoom})"
			/>
		</div>
	</div>
{/if}

<style>
	:global(body.story-chapter-active) {
		background: #f7f7f7;
	}

	:global(body){
		transition: background-color 500ms ease;
	}

	/* ── Layout ───────────────────────────────────────────────────── */

	.story {
		position: relative;
		width: 100%;
		height: 100svh;
		overflow: hidden;
	}

	/* ── Background ───────────────────────────────────────────────── */

	.story-bg {
		position: fixed;
		inset: 0;
		z-index: 0;
	}

	/* ── Photo stack ─────────────────────────────────────────────── */

	.stack {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: opacity 700ms ease;
	}

	.stack-card {
		position: absolute;
		/* width: 60vmin; */
		height: auto;
		max-width: 60vmin;
		width: auto;
		will-change: transform, opacity;
		transform-origin: center bottom;
		display: block;
		pointer-events: none;
		user-select: none;
		filter: drop-shadow(0px 0px 3px rgba(0,0,0,0.14));
		/* Stacked paper edge: cream-toned 1px steps simulate page thickness,
		   final value is the ambient drop shadow */
		/* box-shadow:
			1px 1px 0 #e8e2d6,
			2px 2px 0 #dfd9cc,
			3px 3px 0 #d6cfc2,
			4px 4px 0 #cdc7b8,
			5px 5px 0 #c4beae,
			8px 16px 32px rgba(0, 0, 0, 0.05); */
	}

	.story-image {
		position: absolute;
		inset: 0;
		background-image: url('/assets/demo/test.jpg');
		background-size: cover;
		background-position: center;
		will-change: transform;
		display: none;
	}

	.intro-bg {
		position: absolute;
		inset: 0;
		background-image: url('/assets/menus/intro.png');
		background-size: contain;
		background-position: center;
		will-change: transform, opacity;
		pointer-events: none;
		background-repeat: no-repeat;
		z-index: 100;
		height: 90lvh;
 	   	top: 5lvh;
		transform: rotate(2deg);
	}

	.story-overlay {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	/* ── Swiper ───────────────────────────────────────────────────── */

	.swiper {
		position: relative;
		z-index: 1;
		width: 100%;
		height: 100%;
	}

	.swiper-slide {
		display: flex;
		/* padding: 0 clamp(1.5rem, 6vw, 5rem) clamp(5rem, 12vh, 8rem); */
		box-sizing: border-box;
	}

	/* ── Slide content ────────────────────────────────────────────── */

	.slide-inner {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		width: calc(100% - 20px);
		max-width: 800px;
		margin: 0 auto;
		height: 100%;
		padding-bottom: 20px;
		transform: rotate(-0.2deg);
		/* padding: 0 1rem clamp(3rem, 8vh, 5rem); */
		/* color: #fff; */
	}

	.slide-inner.right-align {
		justify-content: center;
		margin-left: 0;
    	width: 50vw;
		max-width: 500px;
	}

	.slide-inner.center-align {
		margin-left: auto;
		margin-right: auto;
		max-width: 800px;
		width: calc(100% - 50px);
	}



	.center-align .slide-tab {
		display: none;
	}

	.right-align.first-slide {
		margin-left: auto;
		margin-right: 3rem;
		justify-content: flex-end;
		padding-bottom: 20px;
	}

	.slide-inner.right-align .slide-body-wrapper {
		height: auto;
		max-height: 80vh;
		min-height: 200px;
	}
	.right-align .slide-content {
		margin-top: 50px;
		margin-left: 3rem;
	}

	.center-align .slide-content {
		margin: 0 auto;
	}

	.slide-content details {
		padding: 15px 20px;
		padding-top: 0;
		font-family: "Courier Prime", monospace;
	}


	.slide-inner.hidden {
		opacity: 0;
		pointer-events: none;
	}

	.slide-body-wrapper {
		height: 30vh;
		/* flex-direction: column; */
		padding: 15px 20px;
		/* justify-content: flex-end; */
		border-radius: 3px;
		overflow: hidden;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;

		/* padding-bottom: 2rem; */
	}

	.slide-body-wrapper.no-image {
		/* height: calc(100svh - 40px); */
		justify-content: flex-start;
	}

	.slide-body-wrapper.is-auto-type:not(.no-image) {
		height: auto;
	}

	.has-image {
		padding-left: 20px;
	}
	.slide-inline-image {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		transform: rotate(-0.2deg);
	}

	.slide-inline-image-frame {
		position: relative;
		display: inline-block;
		height: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.slide-inline-image img {
		width: auto;
		max-width: 100%;
		display: block;
		height: 100%;
	}

	.slide-content.food-item {
		align-items: flex-start;
	}

	.slide-content {
		background: linear-gradient(60deg, #fbf3d8, #fef4d2);
		border-right: 1px solid rgb(252 252 252 / 32%);
		position: relative;
		display: flex;
		flex-direction: column;
		border-radius: 1px;
		/* filter: drop-shadow(0px -1px 6px rgba(0, 0, 0, .15)); */
		border-top: 1px solid rgb(252 252 252 / 32%);
	}
	.slide-tab {
		position: absolute;
		top: 2px;
		right: 190px;
		background: #fff4d2;
		height: 23px;
		transform: translate(0%, -100%);
		font-family: "Courier Prime", monospace;
		color:rgba(0, 0, 0, .7);
		line-height: 2;
		font-size: 14px;
	}

	.slide-tab.slide-tab-small {
		font-size: 12px;
	}
	.slide-tab-explore {
		background: #eee4be;
		top: -1px;
	}
	.slide-tab-explore {
		padding-left: 0;
	}
	:global(.slide-tab-explore path) {
		fill: #eee4be;
	}
	.slide-tab button {
		margin: 0;
		transform: rotate(-.2deg);
		letter-spacing: -0.7px;
		padding:0;
		margin:0;
		text-decoration: underline;
		padding-left: 10px;
		transform: translate(0px, 0)rotate(.1deg);
		letter-spacing: -0.3px;
		background:none;
		color:rgba(0, 0, 0, .7);
		font-family: "Courier Prime", monospace;
		z-index: 10000;
    	position: relative;
	}
	.slide-tab p {
		transform: translate(0px, 0) rotate(-0.2deg);
		letter-spacing: -0.7px;
		margin: 0;
		max-width: 240PX;
		LINE-HEIGHT: 1;
		MARGIN-TOP: 6PX;
		min-width: 30px;
	}
	.slide-tab-explore p {
		text-decoration: underline;
		padding-left: 10px;
		transform: translate(-5px, 0)rotate(.1deg);
		letter-spacing: -0.3px;
	}

	.slide-tab-right {
		
	}
	.slide-curve {
		position: absolute;
		left: 0;
		top: 0;
		transform: translate(-100%, 0%);
	}
	.slide-curve-right {
		left: auto;
		right: 0;
		transform: translate(100%, 0%) scaleX(-1);
	}
	.swipe-right {
		font-family: "Courier Prime", monospace;
		z-index: 10;
		position: relative;
		display: flex;
		justify-content: flex-end;
		transform: translate(-3px,-10px)
		
		
	}

	.swipe-right .swipe-right-note {
		background-color: #fffffb;
		display:inline-block;
		padding: 12px;
		color: rgba(0, 0, 0, .8);
		font-size: 15px;
		border-radius: 4px;
		line-height: 1;
		transform: rotate(-.3deg);
		-webkit-font-smoothing: antialiased;
		padding-right:15px;
		box-shadow: 0 1px 2px #0003;
	}
	.desktop-keyboard {
		display: flex;
		font-size: .8rem;
		margin-top: 8px;
		align-items: center;
		letter-spacing: -.5px;
	}

	.swipe-right span u {
		text-decoration-thickness: 1px;
	}
	
	.first-slide {
		height: auto;
		padding-top: 2rem;
		padding-bottom: 2rem;
		/* height: calc(35vh - 100px); */
	}

	@media (max-width: 640px) {
		.slide-body-wrapper {
			padding: 10px 17.5px;
		}
		.soup-top-label {
			font-size:12px;
			min-width: auto;
		}
		.soup-top-label span {
			padding: 6px;
			max-width: 100px;
		}

	}

	.slide-content::before {
		content: '';
		position: absolute;
		width: calc(100% - 10px);
		height: calc(100% - 10px);
		border: .5px solid #cacacab5;
		top: 5px;
		left: 5px;
		filter: blur(0.5px);
		border-radius: 2px;
		z-index: 1;
		display: none;
	}

	.food-item:before {
		display: none;
	}

	.slide-body-text {
		/* overflow: hidden; */
		width: 100%;
	}

	.slide-body {
		font-family: var(--font-body);
		font-size: inherit;
		line-height: inherit;
		margin-bottom: 0.75em;
		color: inherit;
		margin-top: 0;
		/* -webkit-font-smoothing: antialiased; */
		color: rgba(0,0,0,.9);
		/* -webkit-font-smoothing: antialiased; */
	}

	:global(.slide-body b) {
		-webkit-font-smoothing: auto;
	}

	.slide-body:last-child {
		margin-bottom: 0;
	}

	.slide-chrome {
		flex-shrink: 0;
		display: none;
	}

	.slide-kicker {
		display: block;
		font-family: var(--font-sans);
		font-size: var(--12px, 0.75rem);
		font-weight: 600;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		opacity: 0.6;
		margin-bottom: 0.75rem;
	}

	.slide-title {
		font-size: clamp(1.75rem, 5vw, 3rem);
		line-height: 1.15;
		font-weight: 400;
		margin: 0 0 1.25rem;
		color: inherit;
	}

	.slide-rule {
		width: 2.5rem;
		height: 2px;
		border-radius: 1px;
		opacity: 0.8;
	}

	/* ── Zoom slide ───────────────────────────────────────────────── */

	.is-zoom-slide {
		background: #000;
	}

	.swiper-zoom-container {
		width: 100%;
		height: 100%;
	}

	.swiper-zoom-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		pointer-events: none;
		user-select: none;
	}

	.zoom-label {
		position: absolute;
		bottom: clamp(5rem, 12vh, 8rem);
		left: clamp(1.5rem, 6vw, 5rem);
		color: #fff;
		opacity: 0;
		transform: translateY(8px);
		transition: opacity 0.5s ease, transform 0.5s ease;
		pointer-events: none;
		z-index: 2;
	}

	.zoom-label.is-active {
		opacity: 1;
		transform: translateY(0);
	}

	/* ── Dot navigation ───────────────────────────────────────────── */

	.dots {
		position: fixed;
		right: clamp(1rem, 3vw, 2rem);
		top: 50%;
		transform: translateY(-50%);
		z-index: 10;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		border: none;
		padding: 0;
		cursor: pointer;
		background: rgba(255 255 255 / 0.3);
		transition:
			background 0.3s ease,
			transform 0.3s ease;
	}

	.dot.is-active {
		transform: scale(1.5);
	}

	/* ── Slide counter ────────────────────────────────────────────── */

	.slide-counter {
		position: fixed;
		bottom: clamp(1.5rem, 4vh, 2.5rem);
		right: clamp(1rem, 3vw, 2rem);
		z-index: 10;
		font-family: var(--font-sans);
		font-size: var(--12px, 0.75rem);
		color: rgba(255 255 255 / 0.4);
		letter-spacing: 0.05em;
		display: flex;
		align-items: center;
		gap: 0.25rem;
		display: none;
	}

	.counter-current {
		color: rgba(255 255 255 / 0.9);
	}

	/* ── Swipe hint ───────────────────────────────────────────────── */

	.swipe-hint {
		position: fixed;
		bottom: clamp(1.5rem, 4vh, 2.5rem);
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-family: var(--font-sans);
		font-size: var(--12px, 0.75rem);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: rgba(255 255 255 / 0.4);
		animation: hint-pulse 2.5s ease-in-out infinite;
	}

	.swipe-hint svg {
		width: 14px;
		height: 14px;
	}
	.hed h1 {
		font-size: 100px;
	}
	.menu-explore {
		height: 60vmin;
		margin-bottom: 5vmin;
	}
	.menu-explore img {
		height: 100%;
		object-fit: cover;
	}

	/* ── Soup background ────────────────────────────────────────────── */

	.soup-bg {
		position: absolute;
		inset: 0;
		overflow: hidden;
		pointer-events: none;
	}

	.soup-bg img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: auto;
		user-select: none;
	}

	.soup-bg img.soup-zoom-resetting {
		transition: transform 620ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	.soup-bg img.soup-bg-overlay-mock {
		opacity: 0;
		transition: opacity 280ms ease;
		filter: drop-shadow(0 1px 6px rgba(0, 0, 0, 0.18));
		z-index: 2;
	}

	.soup-bg img.soup-bg-overlay-mock.loaded {
		opacity: 1;
	}

	.soup-guide-overlay {
		position: absolute;
		inset: 0;
		overflow: hidden;
		pointer-events: auto;
		cursor: pointer;
		padding: 0;
		border: 0;
		background: transparent;
		z-index: 2;
		transform: translateX(92%);
		animation: soup-guide-peek 320ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	.soup-guide-overlay img {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: auto;
		max-width: none;
		z-index: 100;
	}

	:global(.soup-guide-overlay svg) {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 36%;
		z-index: 1000;
		height: 100%;
	}

	:global(.soup-guide-overlay svg rect) {
		display: none;
	}

	.soup-info-label {
		position: absolute;
		right: 12px;
		top: 12px;
		width: 120px;
		z-index: 4;
		pointer-events: auto;
		background: rgba(255, 251, 239, 0.94);
		border: 1px solid rgba(66, 57, 42, 0.28);
		border-radius: 2px;
		padding: 8px 10px;
		font-family: "Courier Prime", monospace;
		font-size: 12px;
		line-height: 1.35;
		color: rgba(0, 0, 0, 0.78);
	}

	.soup-info-label summary {
		cursor: pointer;
	}

	.soup-info-label summary::-webkit-details-marker {
		/* display: none; */
	}

	.soup-info-label p {
		margin: 8px 0 0;
	}

	.soup-slide-index-label {
		position: absolute;
		right: 12px;
		top: 12px;
		z-index: 4;
		transition: right 220ms ease;
		background: rgba(255, 251, 239, 0.94);
		border: 1px solid rgba(66, 57, 42, 0.28);
		border-radius: 2px;
		padding: 8px 10px;
		font-family: "Courier Prime", monospace;
		font-size: 12px;
		line-height: 1;
		color: rgba(0, 0, 0, 0.78);
		font-size: 16px;
		font-family: 'EB Garamond';
		font-weight: 900;
	}

	.soup-slide-index-label.guide-open {
		right: 90px;
	}

	.soup-slide-index-label details {
		display: inline-block;
		letter-spacing: -.3px;
	}

	@keyframes soup-guide-peek {
		from {
			opacity: 0;
			transform: translateX(100%);
		}
		to {
			opacity: 1;
			transform: translateX(92%);
		}
	}

	.panzoom-label {
		position: fixed;
		max-width: 200px;
		top: 60px;
		transform: translate(0, 0) rotate(-1deg);
		left: 0;
		z-index: 20;
		font-family: "Courier Prime", monospace;
		font-size: 14px;
		text-align: left;
		/* pointer-events: none; */
		display: flex;
    	justify-content: flex-start;
		
		background: linear-gradient(60deg, #fbf3d8, #fef4d2);
	    border-right: 1px solid rgba(252, 252, 252, 0.32);
    	border-radius: 1px;
    	filter: drop-shadow(0px -1px 6px rgba(0, 0, 0, .15));
    	border-top: 1px solid rgba(252, 252, 252, 0.32);
		margin: 8px;
    	padding: 10px 12px;
		border-left: 1px solid #dddbd5;
    	border-bottom: 1px solid #e5dec8;
	}

	.panzoom-label p {
		margin: 0;
		transform: rotate(-0.2deg);
		letter-spacing: -0.7px;
		color: rgba(0, 0, 0, .7);
	}

	.soup-top-label {
		position: fixed;
		top: 10px;
		left: 0;
		z-index: 20;
		font-family: "Courier Prime", monospace;
		font-size: 16px;
		text-align: left;
		/* pointer-events: none; */
		display: flex;
    	justify-content: flex-start;
		background: none;
	}
	.soup-top-label span {
		display: inline-block;
		padding: 12px;
		color: rgba(0,0,0,.8);
		background:#fff;
		border-radius: 2px;
		line-height: 1;
		max-width: 300px;
		transform: rotate(-.3deg);
		box-shadow: 0px 1px 2px rgba(0, 0, 0, .2);
		-webkit-font-smoothing: antialiased;
		border: 1px solid #d3d2ce;
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 1px;

	}
	.soup-top-label span.blur {
		filter: blur(.9px);
		opacity: .3;
		position: absolute;
		background: none;
		display: none;

	}

	.soup-annotation {
		position: absolute;
		width: 80px;
		animation: annotation-nudge 4s ease-in-out infinite;
	}
	.soup-annotation img {
		width: 100%;
		height: auto;
		display: block;
		user-select: none;
		filter: drop-shadow(0 0 2px #fff000);
	}

	@keyframes annotation-nudge {
		0%        { transform: translateX(0); }
		10%       { transform: translateX(2px); }
		20%, 100% { transform: translateX(0); }
	}

	/* ── Lightbox ───────────────────────────────────────────────────── */

	.soup-bg-pz {
		position: absolute;
		inset: 0;
		transform-origin: 0 0;
	}

	.soup-bg-pz.resetting {
		transition: transform 620ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	.soup-bg.panzoom-active {
		pointer-events: auto;
		touch-action: none;
		cursor: grab;
		z-index: 5;
	}

	.soup-bg.panzoom-active:active {
		cursor: grabbing;
	}

	.soup-panzoom-exit {
		/* position: absolute;
		top: 1rem;
		left: 1rem;
		z-index: 10; */
		/* background: rgba(0, 0, 0, 0.55); */
		/* color: #fff; */
		/* border: none;
		padding: 0.5rem 1rem;
		border-radius: 999px;
		font-size: 1rem;
		cursor: pointer;
		backdrop-filter: blur(4px); */
	}

	.soup-panzoom-reset {
		position: absolute;
		top: 1rem;
		left: 7rem;
		z-index: 10;
		background: rgba(0, 0, 0, 0.55);
		color: #fff;
		border: none;
		padding: 0.5rem 0.9rem;
		border-radius: 999px;
		font-size: 0.95rem;
		cursor: pointer;
		backdrop-filter: blur(4px);
	}

	.soup-panzoom-controls {
		position: fixed;
		top: 12px;
		right: 12px;
		z-index: 30;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}
	.soup-panzoom-controls p {
		font-family: "Courier Prime", monospace;
		font-size: 12px;
		color: rgba(0, 0, 0, .7);
		margin: 0;
		transform: rotate(-0.2deg);
		letter-spacing: -0.7px;
		text-align: center;
		background: linear-gradient(60deg, #fbf3d8, #fef4d2);
    	border-right: 1px solid rgba(252, 252, 252, 0.32);
    	border-radius: 1px;
    	filter: drop-shadow(0px -1px 6px rgba(0, 0, 0, .15));
    	border-top: 1px solid rgba(252, 252, 252, 0.32);
		border-left: 1px solid #dddbd5;
		border-bottom: 1px solid #e5dec8;
		max-width: 97px;
		margin: 0 auto;
		padding: 0.1rem 0.5rem;
		line-height: 1;
	}

	.soup-panzoom-controls-grid {
		display: grid;
		grid-template-columns: repeat(3, 36px);
		grid-template-rows: repeat(2, 36px);
		gap: 4px;
	}

	.pz-up { grid-column: 2; grid-row: 1; }
	.pz-left { grid-column: 1; grid-row: 2; }
	.pz-right { grid-column: 3; grid-row: 2; }
	.pz-down { grid-column: 2; grid-row: 2; }

	.soup-panzoom-controls-actions {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 4px;
	}

	.soup-panzoom-controls-actions .pz-btn {
		grid-column: 2;
	}

	.pz-btn {
		height: 36px;
		min-width: 36px;
		border: 1px solid rgba(0,0,0,.62);
		border-radius: 2px;
		background: #fff;
		color: #000;
		font-family: "Courier Prime", monospace;
		font-size: 14px;
		line-height: 1;
		cursor: pointer;
		padding: 8px;
	}

	.pz-btn:focus-visible {
		outline: 2px solid #fff;
		outline-offset: 1px;
	}

	/* .soup-panzoom-btn {
		position: absolute;
		bottom: 4.5rem;
		right: 1rem;
		z-index: 10;
		background: rgba(0, 0, 0, 0.55);
		color: #fff;
		border: none;
		width: 2.75rem;
		height: 2.75rem;
		border-radius: 50%;
		cursor: pointer;
		backdrop-filter: blur(4px);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
	} */

	/* .soup-panzoom-btn svg {
		width: 1.25rem;
		height: 1.25rem;
	} */

	.lightbox {
		position: fixed;
		inset: 0;
		z-index: 1000;
		background: #000;
		display: flex;
		flex-direction: column;
	}

	.lightbox-back {
		position: absolute;
		top: 1rem;
		left: 1rem;
		z-index: 1;
		background: rgba(0, 0, 0, 0.55);
		color: #fff;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 999px;
		font-size: 1rem;
		cursor: pointer;
		backdrop-filter: blur(4px);
	}

	.lightbox-stage {
		flex: 1;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		touch-action: none;
		cursor: grab;
	}

	.lightbox-stage:active {
		cursor: grabbing;
	}

	.lightbox-img {
		width: 100%;
		height: auto;
		display: block;
		user-select: none;
		will-change: transform;
		transform-origin: center center;
		pointer-events: none;
	}


	.chapter {
		max-height: calc(100% - 40px);
	}

	.key {
		display: flex;
		margin-left:5px;
		padding: 4px;
		border: 1px solid #ccc;
		border-radius: 4px;
		text-align: center;
	}
	.section-text {
		position: absolute;
		left: 20%;
		right: 0;
		margin: 0 auto;
		width: 80%;
	}
	.course-name {
		font-size: 36px;
		max-width: 80%;
		margin: 0 auto;
		-webkit-font-smoothing: antialiased;
		line-height: 1;
		margin-top: 1rem;
		color: rgba(0, 0, 0, .85);
	}
	.section-text p {
		text-align: center;
	}
	.course-count {
		font-style: italic;
		margin: 0;
		font-size: 24px;
		-webkit-font-smoothing: antialiased;
	}
	.section-text img {
		max-width: 80%;
		margin: 0 auto;
	}
	.byline {
		position: absolute;
		bottom: 3rem;
		left: 2rem;
		font-family: "Courier Prime", monospace;
		font-size: 14px;
		background: #fffef5;
    	border-radius: 2px;
		line-height: 1.35;
		min-width: 180px;
		padding: 2px 10px;
		border-right: 1px solid rgba(252, 252, 252, 0.32);
		filter: drop-shadow(0px -1px 6px rgba(0, 0, 0, .05));
		border-top: 1px solid rgba(252, 252, 252, 0.32);
		border-left: 1px solid #dddbd5;
		border-bottom: 1px solid #e5dec8;
		transform: rotate(-0.2deg);
		padding-left: 4px;
	}

	.byline p {
		margin: 0;
		font-family: "Courier Prime", monospace;
		-webkit-font-smoothing: antialiased;
		line-height: 1.2;
		letter-spacing: -0.6px;
	}

	.byline a {
		text-decoration: underline;
		text-decoration-thickness: .8px;
		text-underline-offset: 1px;
	}


	@keyframes hint-pulse {
		0%,
		100% {
			opacity: 0.4;
			transform: translateX(-50%) translateX(0);
		}
		50% {
			opacity: 0.8;
			transform: translateX(-50%) translateX(4px);
		}
	}
</style>
