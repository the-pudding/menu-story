<script>
	import { onMount, tick, untrack } from "svelte";
	import loadCsv from "../utils/loadCsv";
	import { cubicOut } from "svelte/easing";
	import { fade, fly } from "svelte/transition";
	import Swiper from "swiper";
	import { Zoom, Virtual, Keyboard } from "swiper/modules";
	import "swiper/css";
	import "swiper/css/zoom";
	import "swiper/css/virtual";
	import useWindowDimensions from "$runes/useWindowDimensions.svelte.js";
	import curve from "$svg/curve.svg";
	import arrowRight from "$svg/arrow-right.svg";
	import plus from "$svg/plus.svg";
	import minus from "$svg/minus.svg";
	import guide from "$svg/guide-text.svg";
	import sectionSvg from "$svg/section.svg";
	import Footer from "./Footer.svelte";
	import titleSvg from "$svg/title.svg";
	import titleMobile from "$svg/title-mobile.svg";

	[]

	let { slides, height } = $props();

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
	let virtualData = $state({ slides: [], offset: 0 });
	let swipeDirection = $state(1); // 1 = moving to next slide, -1 = moving to previous
	let isDragging = $state(false);
	let justLeftNoImage = $state(false);

	// ─── Pretext / font sizing ────────────────────────────────────────────────────

	const REF_SIZE = 16; // baseline measurement size in px
	let fontFamily = $state("serif"); // read from DOM after mount — matches whatever CSS sets on .slide-body
	const PARA_MARGIN_EM = 0.75; // margin-bottom between <p> tags (em)

	// Line-height ramps from 1.15 at 21px up to 1.25 at 36px+, with a 1.1 floor.
	function lineHeightFor(fontSize) {
		return Math.max(1, Math.min(1.2, 1.01 + fontSize / 200));
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
	let dims = new useWindowDimensions();
	
	//turned off
	let layout = $derived((dims.width ?? 0) < 500 ? 'center' : 'right');
	let newSlideFontSize = $derived(layout === 'center' ? 24 : 36);
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
		const nextIndex = slides.findIndex(s => Number(s.sectionCount) === idNum);
		if (nextIndex === -1) return false;
		soupGuideOpen = false;
		swiper?.slideTo(nextIndex);
		return true;
	}

	function bindSectionClicks(node) {
		const cleanupFns = [];
		Array.from(node.querySelectorAll('svg g[id]')).forEach((group) => {
			const idAttr = group.getAttribute('id') ?? '';
			const idNum = Number.parseInt(idAttr, 10);
			if (!Number.isInteger(idNum) || idNum < 1 || idNum > 10) return;
			group.style.cursor = 'pointer';
			const handler = (event) => {
				event.preventDefault();
				event.stopPropagation();
				goToGuideSlide(idAttr);
			};
			group.addEventListener('click', handler);
			cleanupFns.push(() => group.removeEventListener('click', handler));
		});
		return { destroy() { cleanupFns.forEach(fn => fn()); } };
	}

	function bindPuddingLink(node) {
		const group = node.querySelector('#pudding-link');
		if (!group) return {};
		group.style.cursor = 'pointer';
		const handler = () => window.open('https://pudding.cool', '_blank', 'noopener,noreferrer');
		group.addEventListener('click', handler);
		return { destroy() { group.removeEventListener('click', handler); } };
	}

	function onGuideOverlayClick(event) {
		// Fallback: clicking outside bound guide targets closes the overlay.
		soupGuideOpen = false;
	}
	// turned off
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

	let textWidths = $state([]); // per-slide text width, updated via bind:clientWidth
	let wrapperClientHeights = $state([]); // per-slide, updated via bind:clientHeight
	let wrapperPadV = $state(0); // vertical padding of .slide-body-wrapper, stored separately

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

	const MIN_FONT = 18;
	const MAX_FIT_FONT = 24;
	const RIGHT_LAYOUT_BODY_MAX_VH = 0.8;
	const CENTER_LAYOUT_BODY_MAX_VH = 0.35;
	const AUTO_BODY_FONT_SIZE = 24;
	let fontSizeAdjustEnabled = $state(true);

	function isAutoTypeSlide(slide) {
		if(layout == "center") return null; // type:auto only applies to right layout
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
	// Spread across multiple rAF frames (CHUNK slides per frame) so no single frame is blocked
	// by canvas text measurement for all slides at once. Active slide is computed first.
	const BODY_LAYOUT_CHUNK = 4;
	let bodyLayouts = $state([]);

	function computeOneBodyLayout(slide, idx, textWidth, _ptPrepare, _ptLayout, _layout, _height, _wrapperPadV, _dims) {
		if (isAutoTypeSlide(slide)) return { fontSize: AUTO_BODY_FONT_SIZE, wrapperMinH: null };
		const rightLayoutAvailH = _dims.height * RIGHT_LAYOUT_BODY_MAX_VH - _wrapperPadV;
		const centerLayoutAvailH = _dims.height * CENTER_LAYOUT_BODY_MAX_VH - _wrapperPadV;
		const slideAvailH = _layout === 'right' ? rightLayoutAvailH
			: slide.layout === 'no-image' ? _height * 0.9 - _wrapperPadV
			: centerLayoutAvailH;
		if (!_ptPrepare || !_ptLayout || !slide.body?.length || textWidth <= 0 || slideAvailH <= 0) {
			return { fontSize: REF_SIZE, wrapperMinH: null };
		}
		const paragraphs = slide.body.map((l) => stripHtml(l.value ?? l));
		const fontSize = fitFontSize(paragraphs, slideAvailH - 8, textWidth);
		let wrapperMinH = null;
		if (fontSize <= MIN_FONT) {
			const baseH = _layout === 'right' ? _dims.height * RIGHT_LAYOUT_BODY_MAX_VH : _dims.height * CENTER_LAYOUT_BODY_MAX_VH;
			const naturalH = idx === 0 ? baseH - 100 : baseH;
			const needed = textHeightAt(paragraphs, MIN_FONT, textWidth) + 8 + _wrapperPadV;
			if (needed > naturalH) wrapperMinH = Math.ceil(needed);
		}
		return { fontSize, wrapperMinH };
	}

	$effect(() => {
		void fontFamily; // track as dependency
		if (!fontSizeAdjustEnabled) return;
		const _slides = slides, _textWidths = textWidths, _dims = dims,
			_wrapperPadV = wrapperPadV, _layout = layout, _height = height,
			_ptPrepare = ptPrepare, _ptLayout = ptLayout;

		const _activeIndex = untrack(() => activeIndex);
		const order = [
			_activeIndex,
			..._slides.map((_, i) => i).filter(i => i !== _activeIndex),
		];

		// Seed with current layouts so uncomputed slides keep their existing value
		const working = untrack(() => bodyLayouts).slice();
		while (working.length < _slides.length) working.push({ fontSize: REF_SIZE, wrapperMinH: null });

		let cursor = 0;
		let rafHandle;

		// Fallback text width for slides not yet in the virtual window (no measured width).
		// Center: slide-inner = min(vw-20, 800px), wrapper adds 20px pad each side → min(vw,820)-60.
		// Right:  slide-inner.right-align = min(50vw, 500px), same padding → min(0.5vw,500)-40.
		const fallbackTextWidth = _layout === 'right'
			? Math.max(0, Math.min(_dims.width * 0.5, 500) - 40)
			: Math.max(0, Math.min(_dims.width, 820) - 60);

		function processChunk() {
			if (isDragging) { rafHandle = requestAnimationFrame(processChunk); return; }
			const end = Math.min(cursor + BODY_LAYOUT_CHUNK, order.length);
			for (; cursor < end; cursor++) {
				const idx = order[cursor];
				const measuredWidth = _textWidths[idx] ?? 0;
				const textWidth = measuredWidth > 0 ? measuredWidth : fallbackTextWidth;
				working[idx] = computeOneBodyLayout(
					_slides[idx], idx, textWidth,
					_ptPrepare, _ptLayout, _layout, _height, _wrapperPadV, _dims
				);
			}
			bodyLayouts = working.slice(); // shallow copy to trigger reactivity
			if (cursor < order.length) rafHandle = requestAnimationFrame(processChunk);
		}

		rafHandle = requestAnimationFrame(processChunk);
		return () => cancelAnimationFrame(rafHandle);
	});
	
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

	const IMG_BASE = 'https://s3.us-east-1.amazonaws.com/pudding.cool/projects/menu-images/';
	let buttolphPos = {
		rot: 8, tx: 0, ty: -20, widthPct: 50
	}
	if (untrack(() => layout) === "right") {
		buttolphPos = {
			rot: 8, tx: 80, ty: 0, widthPct: 75
		}
	}
	let STACK = $derived([
		{ rot: 8, tx: 65, ty: -50, widthPct: layout === "right" ? 50 : 25, src: `assets/menus/4000000219.png` },  // top-left
		{ rot:  50, tx:  50, ty: 0, widthPct: layout === "right" ? 50 : 25, src: `assets/menus/4000000068.png` },  // bottom — top-right corner
		{ rot: -20, tx: -120, ty:  40, widthPct: layout === "right" ? 50 : 25, src: `assets/menus/4046090.png` },  // bottom-left
		{ rot:  3, tx:  -80, ty:  -20, widthPct: layout === "right" ? 50 : 25, src: `assets/menus/476900.webp` },  // bottom-right
		{ rot: 2, tx: 5, ty: -50, widthPct: layout === "right" ? 50 : 25, src: `assets/menus/4000008419.png` },  // top-left
		{ rot: 1, tx: layout === "right" ? 50 : -10, ty:  layout === "right" ? 0 : -20, widthPct: layout === "right" ? 30 : 25, fitViewportHeight: true, src: `assets/menus/fish.webp` },  // lower-left
		{ rot:  18, tx:  -20, ty:  35, widthPct: layout === "right" ? 50 : 75, src: `assets/menus/470904.png`,  role: 'heroLeft' },   // hero left — animates to side-by-side
		{ rot: 10, tx: 50, ty: -50, widthPct: layout === "right" ? 50 : 30, src: `assets/menus/474586.webp`, role: 'heroRight' }, // hero right — animates to side-by-side
		{ rot:  buttolphPos["rot"], tx:   buttolphPos["tx"], ty:   buttolphPos["ty"], widthPct: buttolphPos["widthPct"], src: "assets/menus/buttolph_portrait.png", role: 'second' }, // flies off on slide 2→3
		{ rot:  -3, tx:   layout === "right" ? -2 : 20, ty:  layout === "right" ? -2 : 0, widthPct: layout === "right" ? 50 : 35, src: "assets/menus/4000003649.png", role: 'top' },  // flies off on slide 1→2
	]);

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
	let stackT = $derived(phaseProgress(coldNarrativeIdx, buttolphIdx >= 0 ? buttolphIdx : coldNarrativeIdx + 1));

	let sideEntryT = $derived(phaseProgress(buttolphIdx, sideIdx >= 0 ? sideIdx : buttolphIdx + 1));
	let stackOpacity = $derived(1 - sideEntryT);
	const titleIdx = untrack(() => slides.findIndex(s => s.id === 'soup'));
	let stackTitleOpacity = $derived(titleIdx >= 0 ? 1 - smoothstep(Math.max(0, Math.min(1, slidePosition - (titleIdx - 1)))) : 1);

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

	let introBgSlideX = $derived(coldIdx >= 0 && slidePosition < coldIdx ? (layout === 'center' ? -30 : 0) : -100);


	// Widths of animated cards — set by onload, included in stackStyles so reactive updates don't wipe them
	let heroRightWidth = $state(0);
	let heroLeftWidth = $state(0);
	let secondWidth = $state(0);
	let topWidth = $state(0);

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
			const widthStr = topWidth ? `width: ${topWidth}px; max-width: none; ` : '';
			return `${widthStr}transform: rotate(${rot}deg) translate(${tx}%, ${card.ty}%); transition: ${transition}; opacity: ${opacity}`;
		} else if (isSecond) {
			const tx = lerp(card.tx, -270, heroT);
			const rot = lerp(card.rot, card.rot + 0, heroT);
			const widthStr = secondWidth ? `width: ${secondWidth}px; max-width: none; ` : '';
			return `${widthStr}transform: rotate(${rot}deg) translate(${tx}%, ${card.ty}%); transition: ${transition}; opacity: ${opacity}`;
		} else if (isHero) {
			const sign = isHeroLeft ? -1 : 1;
			// Desktop: side by side; mobile: stacked vertically
			const targetTx = isDesktop ? sign * 50 : 0;
			const targetTy = isDesktop ? 0 : isHeroRight ? -20 : sign * 60;
			const exitTx = isDesktop ? sign * 150 : 0;
			const exitTy = isDesktop ? 0 : sign * 150;
			const tx = lerp(lerp(card.tx, targetTx, heroT), exitTx, heroExitT);
			const ty = lerp(lerp(card.ty, targetTy, heroT), exitTy, heroExitT);
			const rot = lerp(card.rot, 0, heroT);
			const widthStr = isHeroRight && heroRightWidth ? `width: ${heroRightWidth}px; max-width: none; `
				: isHeroLeft && heroLeftWidth ? `width: ${heroLeftWidth}px; max-width: none; `
				: '';
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

	let soupDragLocked = $derived(isDragging && hasSoupBg(slides[activeIndex]));
	let soupRefFromIdx = $derived(soupDragLocked ? activeIndex : fromIdx);
	let soupRefToIdx = $derived(soupDragLocked ? activeIndex : toIdx);
	let soupRefBlendT = $derived(soupDragLocked ? 0 : blendT);
	let soupDragDelta = $derived(Math.max(-1, Math.min(1, slidePosition - activeIndex)));
	let soupDragParallaxX = $derived(
		soupDragLocked ? soupDragDelta * dims.width * -dragMultiplier : 0
	);

	// Soup background — preload all bgSrc images up front so the img tag always gets
	// pixel data that's already in memory, making in:fade play against a visible image.
	let preloadedImages = $state(/** @type {Map<string, HTMLImageElement>} */ (new Map()));
	let lastSoupBgSrc = $state(null);

	let loading = $state(true);

	function preloadAllImages() {
		const bgSrcs = new Set(slides.map(s => s.bgSrc).filter(Boolean));

		const allSrcs = new Set([
			...bgSrcs,
			...slides.map(s => s.image).filter(Boolean),
			'assets/menus/title-mobile.jpg',
			...slides.filter(s => s.sectionCount).map(s => `assets/menus/${s.sectionCount}.webp`),
			...STACK.map(c => c.src).filter(Boolean),
		]);

		const promises = [...allSrcs].map(src => new Promise(resolve => {
			const img = new Image();
			img.onload = async () => {
				if (bgSrcs.has(src)) {
					// Wait for decode so the image is GPU-ready before it's needed at swap time.
					// This prevents the browser from doing expensive decode/rasterize work
					// in the middle of a slide transition, which causes long frames.
					try { await img.decode(); } catch (e) {}
					preloadedImages = new Map([...preloadedImages, [src, img]]);
				}
				resolve();
			};
			img.onerror = resolve;
			img.src = src;
		}));

		return Promise.allSettled(promises);
	}

	onMount(async () => {
		loading = false;
		await preloadAllImages();
	});

	let soupBgReadySrc = $derived(soupBgRenderSrc && preloadedImages.has(soupBgRenderSrc) ? soupBgRenderSrc : null);
	let soupBgRenderSrc = $derived(soupBg.src ?? (isNoImageSlideActive ? lastSoupBgSrc : null));


	$effect(() => {
		if (soupBg.src) lastSoupBgSrc = soupBg.src;
	});
	let soupBgNaturalW = $derived(preloadedImages.get(soupBgRenderSrc)?.naturalWidth ?? 0);
	let soupBgNaturalH = $derived(preloadedImages.get(soupBgRenderSrc)?.naturalHeight ?? 0);
	// // Only expose src to the template once it's preloaded — prevents assigning a src the browser hasn't fetched yet
	let soupBgMounted = $state(false);
	let videoEl = $state(null);
	let isVideoBgActive = $derived(slides[activeIndex]?.id === 'video');
	$effect(() => {
		const slide = slides[activeIndex];
		if (!videoEl || slide?.id !== 'video') return;
		const state = Number(slide.state);
		if (state === 1) {
			videoEl.currentTime = 0;
			const onTimeUpdate = () => {
				if (videoEl.currentTime >= 3) {
					videoEl.pause();
					videoEl.removeEventListener('timeupdate', onTimeUpdate);
				}
			};
			videoEl.addEventListener('timeupdate', onTimeUpdate);
			const timeout = setTimeout(() => videoEl.play().catch(() => {}), 1000);
			return () => {
				clearTimeout(timeout);
				videoEl?.removeEventListener('timeupdate', onTimeUpdate);
			};
		} else if (state === 2) {
			videoEl.play().catch(() => {});
		}
	});
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
		if (layout === 'center') return { tx: 0, ty: 0, s: 1 };
		const s  = vh / (vw * nh / nw);
		const tx = layout === 'right' ? Math.min(vw, 1200) - vw * s - 20 : (vw - vw * s) / 2;
		return { tx, ty: 0, s };
	}

	// Compute (tx, ty, s) for a soup slide.
	// zp (0–1): 0 = fit-height start, 1 = full focal zoom (ignored for fit-height slides).
	function soupSlideXform(slide, vw, vh, nw, nh, zp = 1) {
		if (!nw || !nh) return { tx: 0, ty: 0, s: 1 };
		const fh = fitHeightXform(vw, vh, nw, nh);
		if (slide?.layout === 'fit-height') return layout === 'center' ? { tx: 0, ty: 0, s: 1 } : fh;
		// Focal zoom target
		const pf  = (v, d) => parseFloat(v ?? d);
		const s   = pf(slide?.bgZoom, 1) * (layout === 'center' ? 2 : 1);
		const px  = pf(slide?.focalX, 0) * (vw / nw);
		const py  = pf(slide?.focalY, 0) * (vw / nw);
		const ax  = (layout === 'center' ? 0.5 : pf(slide?.anchorX, 0.5)) * vw;
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
		const zpFrom = !fromIsZoom ? 0
			: soupRefFromIdx === activeIndex ? zoomProgress
			: 0;
		const a = soupSlideXform(fromIsSoup ? from : to, vw, vh, nw, nh, zpFrom);
		const b = soupSlideXform(toIsSoup   ? to   : from, vw, vh, nw, nh, 0);
		const t = smoothstep(soupRefBlendT);
		const activeBgSrc = slides[activeIndex]?.bgSrc;
		const neighborSharesBg = slides[activeIndex - 1]?.bgSrc === activeBgSrc || slides[activeIndex + 1]?.bgSrc === activeBgSrc;
		return {
			s: lerp(a.s, b.s, t),
			tx: lerp(a.tx, b.tx, t) + (neighborSharesBg ? 0 : soupDragParallaxX),
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
			modules: [Virtual, Keyboard],
			keyboard: { enabled: true },
			speed: 300,
			// threshold: 5,
			longSwipesRatio: 0.2,
			// longSwipesMs: 300,
			// zoom: { maxRatio: 4, minRatio: 1 },

			virtual: {
				slides: slides.map((_, i) => i),
				addSlidesAfter: 1,
				addSlidesBefore: 1,
				renderExternal(data) {
					virtualData = data;
				}
			}
		});


		swiper.on("touchStart", () => {
			isDragging = true;
		});

		swiper.on("touchEnd", () => {
			isDragging = false;
		});

		let _pendingPos = null;
		let _rafHandle = null;

		swiper.on("setTranslate", (s, translate) => {
			if (!s.width) return;
			const raw = -translate / s.width;
			_pendingPos = Math.max(0, Math.min(raw, slides.length - 1));
			if (!_rafHandle) {
				_rafHandle = requestAnimationFrame(() => {
					slidePosition = _pendingPos;
					_rafHandle = null;
				});
			}
		});

		swiper.on("activeIndexChange", (s) => {
			swipeDirection = s.activeIndex >= activeIndex ? 1 : -1;
			activeIndex = s.activeIndex;
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
	const PZ_INITIAL_ZOOM_CENTER = 0.70;

	const pzPointers = new Map();
	let pzLastPinchDist = 0;
	let pzResetTimer;
	let soupZoomResetTimer;

	// Default pz state: center layout starts slightly zoomed out and re-centered.
	// Container has transform-origin: 0 0, so zoom < 1 without pan anchors at the
	// top-left; offsetting by (1-z)/2 of the viewport dimensions recenters it.
	function pzInitialState() {
		if (layout === 'center') {
			const z = PZ_INITIAL_ZOOM_CENTER;
			return { zoom: z, panX: dims.width * (1 - z) / 2, panY: dims.height * (1 - z) / 2 };
		}
		return { zoom: 1, panX: 0, panY: 0 };
	}

	async function resetPanZoomView(animate = false) {
		if (pzResetTimer) clearTimeout(pzResetTimer);
		pzPointers.clear();
		pzLastPinchDist = 0;
		zoomProgress = 0;
		const init = pzInitialState();
		if (!animate) {
			pzResetAnimating = false;
			pzZoom = init.zoom;
			pzPanX = init.panX;
			pzPanY = init.panY;
			return;
		}
		pzResetAnimating = true;
		await tick();
		requestAnimationFrame(() => {
			pzZoom = init.zoom;
			pzPanX = init.panX;
			pzPanY = init.panY;
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
			const midX = (pts[0].x + pts[1].x) / 2;
			const midY = (pts[0].y + pts[1].y) / 2;
			if (pzLastPinchDist > 0) {
				const newZoom = Math.max(0.5, Math.min(PZ_MAX_ZOOM, pzZoom * (dist / pzLastPinchDist)));
				const k = newZoom / pzZoom;
				pzPanX = midX * (1 - k) + pzPanX * k;
				pzPanY = midY * (1 - k) + pzPanY * k;
				pzZoom = newZoom;
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

<section class="story layout-{layout ? layout : ''}"
	style="height: {height}px;"
>
	<div class="story-bg" aria-hidden="true">
		<div
			class="intro-bg"
			style="transform: translate({introBgSlideX}%,{layout == "center" ? 20 : 0}%) rotate(-2deg) scale({layout == "center" ? .7 : 1}); transition: transform .4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 220ms ease;"
		>
		</div>

		{#if soupBgReadySrc}
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

		{#if isVideoBgActive}
			<div class="video-bg" aria-hidden="true">
				<video
					bind:this={videoEl}
					src="assets/menus/menu-explorer-video.mp4"
					muted
					playsinline
				></video>
			</div>
		{/if}

		<div class="stack" style="pointer-events: none; opacity: {stackTitleOpacity * (soupGuideOpen ? 0.18 : 1)}; transform: translate3d(0%, {layout == "center" ? 0 : -tweenedStackSlideX}%, 0); transition: opacity 700ms ease;">
			{#each STACK as card, i}
				<img class="stack-card" src={card.src} alt="" loading="lazy" decoding="async" draggable="false" style={stackStyles[i]} onload={(e) => {
						if (card.fitViewportHeight) {
							e.currentTarget.style.height = layout === 'center' ? '70%' : '100%';
							e.currentTarget.style.width = 'auto';
							e.currentTarget.style.maxWidth = 'none';
							return;
						}
						const w = e.currentTarget.naturalWidth * (card.widthPct / 100);
						if (card.role === 'heroRight') heroRightWidth = w;
						else if (card.role === 'heroLeft') heroLeftWidth = dims.width * (card.widthPct / 100);
						else if (card.role === 'second') secondWidth = w;
						else if (card.role === 'top') topWidth = w;
						else e.currentTarget.style.width = w + 'px';
					}} />
			{/each}
		</div>

	</div>

	<button
		type="button"
		bind:this={guideOverlayEl}
		class="soup-guide-overlay"
		class:soup-guide-overlay--hidden={!soupGuideOpen}
		onclick={onGuideOverlayClick}
		aria-label="Close guide"
	>
		{@html guide}
		<img src="/assets/menus/guide.png" alt="" />
	</button>

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
			{#each virtualData.slides as slideIndex, i (slideIndex)}
				{@const slide = slides[slideIndex]}
				{@const firstSlide = slideIndex === 0}
				<div
					data-swiper-slide-index={slideIndex}
					style="left: {virtualData.offset}px; z-index: {slide?.id === 'illustration' ? 100 : 'auto'};"
					class="swiper-slide"
					class:image-title={slide?.image === 'assets/menus/title.jpg'}
					class:image-section={slide?.image === 'assets/menus/section.png'}
				>
					{#if slide.id === 'footer'}
						<Footer />
					{/if}
					{#if !slide.image && slide.id !== 'footer'}
						<div class="slide-inner {layout === 'right' ? 'right-align' : ''}"
							class:is-active={activeIndex === i}
							class:center-align={slide.layout === 'no-image'}
							class:first-slide={firstSlide}
							class:hidden={soupPanZoom}
							style="justify-content: {slide.id == "title" ? 'center' : ''}"
						>			
							{#if slide.body && slide.id !== 'title'}
								<div class="{slide.id === "video" ? 'video-slide' : ''} slide-content {slide.image ? "food-item" : ''}" style="flex-direction: {slide.image ? 'row' : ''};">
									{#if slide.id === 'soup' && !slide.image}
										<div class="slide-tab slide-tab-explore" style="right: 30px;">
											<div class="slide-curve">
												{@html curve}
											</div>
											<!-- {#if hasSoupBg(slide) && soupBgReadySrc} -->
												<button onclick={() => enterPanZoom(slide.bgSrc)} aria-label="Explore image" class="">
													{#if layout === 'center'}
														<span>VIEW MENU</span>
													{:else}
														<span>VIEW FULL MENU</span>
													{/if}
												</button>
											<!-- {/if} -->
											
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
										bind:clientHeight={wrapperClientHeights[slideIndex]}
										style={slide.id === 'video' && layout === 'center'
											? `font-size: 18px; line-height: ${bodyLineHeights[slideIndex]};`
											: slide.layout === 'no-image'
											? `font-size: ${slide.id === 'new-slide' ? newSlideFontSize : bodyFontSizes[slideIndex]}px; line-height: ${slide.id === 'new-slide' ? "1" : bodyLineHeights[slideIndex]}; ${(bodyFontSizes[slideIndex] > 36) ? '-webkit-font-smoothing: antialiased;' : ''}`
											: slide.id === 'new-slide'
												? `font-size: ${newSlideFontSize}px; line-height: 1;`
												: `font-size: ${bodyFontSizes[slideIndex]}px; line-height: ${bodyLineHeights[slideIndex]}; ${wrapperMinHeights[slideIndex] != null ? `height: ${wrapperMinHeights[slideIndex]}px;` : `height: auto; padding-top: 10px; padding-bottom: 10px;`} ${bodyFontSizes[slideIndex] > 36 ? '-webkit-font-smoothing: antialiased;' : ''}`}
									>
										<div class="slide-body-text" bind:clientWidth={textWidths[slideIndex]}>
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
									{#if soupInfoLabel && !soupPanZoom && layout !== 'center'}
										<details class="">
											<summary>Fun Fact</summary>
											<p>{@html soupInfoLabel}</p>
										</details>
									{/if}
									{#if slide.id === 'video' && slide?.state == '2'}
										<div class="explore">
											<a
												style="font-size: ${bodyFontSizes[slideIndex]}px;"
												href="https://pudding.cool/2026/06/menu-collection/?tour=0" blank="_blank">
												Explore the Interactive Map »
											</a>
											<a href="https://pudding.cool/2026/06/menu-collection/?tour=0" blank="_blank">
												<img src="assets/menus/map-preview.jpg" alt="Preview of the interactive map" />
											</a>

										</div>
									{/if}
								</div>
							{/if}

						</div>
					{:else}
						<div class="slide-inline-image"
						>
							<div class="slide-inline-image-frame"
								style="transform: translate(0,0) rotate({slide.image === 'assets/menus/section.png' ? '0deg' : '0deg'});"
							>
								<img
									src={layout === 'center' && slide.image === 'assets/menus/title.jpg' ? 'assets/menus/title-mobile.jpg' : slide.image}
									alt={slide.imageAlt ?? ''}
									class={slide.class ? slide.class : ''}
									class:title-slide={slide.image === 'assets/menus/title.jpg'}
								/>
								{#if slide.image === 'assets/menus/section.png'}
									<div use:bindSectionClicks>{@html sectionSvg}</div>
								{/if}
								{#if slide.image === 'assets/menus/title.jpg'}
									{#if layout === 'center'}
										<div use:bindPuddingLink>{@html titleMobile}</div>
									{:else}
									<div use:bindPuddingLink>{@html titleSvg}</div>
									{/if}
								{/if}
								{#if slide.image === 'assets/menus/title.jpg'}
									<div class="byline">
										<p><a href="https://pudding.cool/author/stephen-lurie/" target="_blank">By Stephen Lurie</a></p>
										<p>June 2026</p>
									</div>
								{/if}
								{#if slide.image === 'assets/menus/section.png'}
									<div class="section-text">
										{#if slide.sectionCount}
											<p class="course-count">Course {slide.sectionCount}</p>
											<img src={`assets/menus/${slide.sectionCount}.webp`} alt="" />
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



	{#if soupPanZoom}

		<div class="soup-panzoom-controls" aria-label="Pan and zoom controls" role="group">
			{#if layout === 'center'}
				<p>pan/zoom by pinch/swipe</p>
			{:else}
				<p>pan/zoom with your mouse</p>
			{/if}
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
		<button class="soup-panzoom-exit soup-top-label" onclick={exitPanZoom} aria-label="Exit pan/zoom">
			<span>
				GO BACK
			</span>
		</button>
		<div class="panzoom-label">
			<p>{soupTopLabel}</p>
		</div>

	{/if}

	{#if layout == "right" && !soupGuideOpen && !soupPanZoom}
		<div class="slide-nav" aria-hidden="true">
			{#if activeIndex > 0}
				<button class="slide-nav-btn slide-nav-prev" onclick={() => swiper?.slidePrev()} tabindex="-1">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 1em; height: 1em;"><g><polyline points="15 18 9 12 15 6"></polyline></g></svg>
				</button>
			{:else}
				<div></div>
			{/if}
			{#if activeIndex < slides.length - 1}
				<button class="slide-nav-btn slide-nav-next" onclick={() => swiper?.slideNext()} tabindex="-1">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style=""><g><polyline points="9 18 15 12 9 6"></polyline></g></svg>
				</button>
			{/if}
		</div>
	{/if}
</section>


<!-- {#if lightboxOpen}
	<div class="lightbox" role="dialog" aria-modal="true" aria-label="Menu explorer">
		<button class="lightbox-back" onclick={closeLightbox}>← Back</button>
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
{/if} -->

{#if loading}
	<div class="loading-screen" out:fade={{ duration: 500 }}>
		<span class="loading-text">Loading…</span>
	</div>
{/if}

<style>
	:global(body.story-chapter-active) {
		background: #f7f7f7;
	}

	:global(body){
		transition: background-color 500ms ease;
	}


	.loading-screen {
		position: fixed;
		inset: 0;
		z-index: 9999;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #faf4e1;
	}

	.loading-text {
		font-family: "Courier Prime", monospace;
		font-size: 14px;
		letter-spacing: 0.05em;
		color: rgba(0, 0, 0, 0.5);
	}

	.story {
		position: relative;
		width: 100%;
		overflow: hidden;
		height: 100%;
	}


	.story-bg {
		position: fixed;
		inset: 0;
		z-index: 0;
	}


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
		max-width: 600px;
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

	.intro-bg {
		position: absolute;
		inset: 0;
		background-image: url('/assets/menus/intro.jpg');
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
		justify-content: center;
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
		width: calc(100% - 20px);
	}


	.layout-center .slide-inner {
		padding-bottom: 10px;
	}
	.layout-center .slide-body-wrapper {
		padding: 5px 20px;
	}


	.layout-center .desktop-keyboard {
		display: none;
	}

	.layout-center .swipe-right .swipe-right-note {
		margin-top: 10px;
		padding: 7px;
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

	.layout-center .slide-inner .slide-body-wrapper.first-slide {
		padding-bottom: 10px;
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
		font-family: 'EB Garamond';
	}

	.slide-content details p {
		font-size: inherit;
		line-height: 1rem;
		margin: 0;
		margin-top: 10px;
	}

	.slide-content details summary {
		font-family: 'EB Garamond';
	}

	details {
		cursor: pointer;
	}


	.slide-inner.hidden {
		opacity: 0;
		pointer-events: none;
	}

	.slide-body-wrapper {
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

	.layout-center .slide-body-wrapper.no-image {
		/* height: calc(100svh - 40px); */
		justify-content: center;
	}

	.layout-center .center-align {
		justify-content: center;
	}


	.slide-body-wrapper.is-auto-type:not(.no-image) {
		height: auto;
	}

	.has-image {
		padding-left: 20px;
	}
	.slide-inline-image {
		/* width: 100%; */
		width: auto;
		height: 100%;
		display: flex;
		justify-content: center;
		flex-direction:row;
		
		/* align-items: center; */
		/* transform: rotate(-0.2deg); */
	}

	:global(.layout-center) .swiper-slide.image-title {
		justify-content: flex-end;
	}

	:global(.layout-center) .swiper-slide.image-section {
		justify-content: flex-start;
	}

	.slide-inline-image-frame {
		position: relative;
		display: inline-block;
		height: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	:global(.slide-inline-image-frame svg) {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translate(0,-50%);
	}

	.slide-inline-image img {
		width: auto;
		max-width: 100%;
		display: block;
		height: 100%;
	}

	.layout-center .slide-inline-image img {
		width: auto;
		max-width: 100%;
		/* height: 100%; */
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

	.layout-center .slide-tab {
		right: 120px;
		max-width: calc(100% - 160px);
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

	.layout-center .slide-tab-explore button {
		transform: translate(3px, 0);
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

	.layout-center .slide-tab p {
		line-height: .8;
		font-size: 13px;
		letter-spacing: -0.9px;
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

	.layout-center .first-slide {
		padding-bottom: 10px;
	}
	
	.slide-inner .slide-body-wrapper.first-slide {
		height: auto;
		padding-top: 1rem;
		padding-bottom: 2rem;
		min-height: auto;
		/* height: calc(35vh - 100px); */
	}

	@media (max-width: 640px) {
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
		font-weight: 400;
		margin-top: 0;
		/* -webkit-font-smoothing: antialiased; */
		color: rgba(0,0,0,.9);
		/* -webkit-font-smoothing: antialiased; */
	}

	.layout-center .slide-body {
		font-weight: 450;
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

	.video-bg {
		position: absolute;
		inset: 0;
		overflow: hidden;
		pointer-events: none;
	}

	.video-bg video {
		position: absolute;
		top: 0;
		left: 0;
		width: auto;
		height: 100%;
		object-fit: contain;
		right: 0;
		left: auto;
	}

	

	.layout-center .video-bg video {
		object-fit: cover;
		width: 100%;
		left: 0;
	}

	.soup-bg-transition {
		position: absolute;
		inset: 0;
	}

	.soup-bg img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: auto;
		user-select: none;
		will-change: transform;
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
		top: 0;
		right: 0;
		height: 100%;
		width: max-content;
		display: block;
		overflow: hidden;
		pointer-events: auto;
		cursor: pointer;
		padding: 0;
		border: 0;
		background: transparent;
		z-index: 2;
		transform: translateX(80%);
		animation: soup-guide-peek 320ms cubic-bezier(0.22, 1, 0.36, 1) backwards;
	}
	.soup-guide-overlay--hidden {
		pointer-events: none;
		visibility: hidden;
		animation: none;
		transform: translateX(100%);
	}

	.soup-guide-overlay img {
		position: relative;
		display: block;
		top: 0;
		left: 0;
		height: 100%;
		width: auto;
		max-width: none;
		aspect-ratio: 1201 / 2472;
		z-index: 100;
	}

	:global(.soup-guide-overlay svg) {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 36%;
		z-index: 1000;
		height: 100%;
		width: auto;
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
		font-weight: 400;
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
		line-height: 1;
		color: rgba(0, 0, 0, 0.78);
		font-family: 'EB Garamond';
		font-weight: 600;
	}
	.soup-slide-index-label summary {
		font-size: 18px;
		font-weight: 400;
	}

	.layout-center .soup-slide-index-label summary {
		font-weight: 500;
	}

	.layout-center .soup-slide-index-label {
		font-size: 16px;
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
			transform: translateX(80%);
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
		line-height: 1;
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

	.soup-annotation img.flip {
		transform: scaleX(-1);
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
		max-height: calc(100% - 10px);
		object-fit: contain;
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
		top: 20px;
		bottom: 0;
		left: 0%;
		right: 0;
		margin: 0;
		width: 80%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		min-height: 0;
		overflow: hidden;
		height: calc(100% - 40px);
	}
	.section-text p {
		text-align: center;
		margin: 0;
		flex: 0 0 auto;
	}
	p.course-count {
		font-style: italic;
		margin: 0;
		font-size: 22px;
		-webkit-font-smoothing: antialiased;
		margin-bottom: 10px;
	}
	p.course-description {
		flex: 0 0 auto;
		max-width: 80%;
		font-size: 26px;
		line-height: 1.2;
		text-wrap: balance;
		margin-top: 10px;
		color: rgba(0, 0, 0, .85);
		text-transform: uppercase;
	}
	p.course-name {
		flex: 0 0 auto;
		font-size: 48px;
		max-width: 80%;
		margin: 0 auto;
		-webkit-font-smoothing: antialiased;
		line-height: .9;
		text-wrap: balance;
		color: rgba(0, 0, 0, .85);
		margin-top: 10px;
		margin-bottom: 10px;
	}

	.section-text img {
		flex: 0 1 auto;
		max-height: 42%;
		max-width: 80%;
		height: auto;
		width: auto;
		object-fit: contain;
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

	.layout-center .byline {
		left: 1rem ;
		right: auto;
		margin: 0 auto;
		width: 150px;
		min-width: auto;
		bottom: .5rem;
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

	.title-slide {
		/* object-fit: contain; */
		object-fit: contain;
		max-height: calc(100% - 10px);
		/* transform: scale(1.5); */
	}

	:global(a){
		text-decoration-thickness: 1.5px;
	}

	:gloabl(details i) {
		font-weight: 500;
	}

	.video-slide {
		background: #111;
	}

	.layout-center .video-slide {
		padding-top: 10px;
		padding-bottom: 10px;
	}

	.layout-center .video-slide a {
		font-size: 18px;
	}

	.video-slide p {
		color: white;
		-webkit-font-smoothing: antialiased;
	}

	.explore {
		padding: 15px 20px;
		padding-top: 0;
	}

	.explore a {
		margin-top: 0;
		margin-bottom: 1rem;
		font-size: 24px;
		display: block;
		color: white;
		text-decoration-color: white;
	}

	.explore img {
		box-shadow: 4px 4px 5px 1px rgba(0,0,0,.1);
		border: 1px solid rgba(0,0,0,.25);
		border-radius: 2px;
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

	.slide-nav {
		position: absolute;
		inset: 0;
		pointer-events: none;
		z-index: 2000;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 5px;
	}

	.slide-nav-btn {
		pointer-events: auto;
		background: rgba(0, 0, 0, 1);
		border: none;
		font-size: 18px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0;
	}

	.slide-nav-btn svg {
		stroke: white;
	}
	:global(b){
		font-weight: 600;
	}
	:global(tspan) {
		/* font-weight: 400;
		-webkit-font-smoothing: antialiased;
		stroke: none;
		filter: none;
		font-family: 'Atlas Grotesk';
		color: #000000; */
	}
	/* feGaussianBlur lives on the parent <g>, not on <tspan> — target the right element */
	:global(.soup-guide-overlay svg g[filter]),
	:global(.slide-inline-image-frame svg g[filter]) {
		filter: none;
	}
	.soup-guide-overlay {
		/* transform:translateX(100px); */
	}

	.slide-nav-next {
		padding: 15px 15px;
	}

	.slide-nav-next svg {
		width: 25px;
	}

	

</style>
