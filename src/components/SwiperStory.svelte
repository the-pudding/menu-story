<script>
	import { onMount, untrack } from "svelte";
	import Swiper from "swiper";
	import { Zoom } from "swiper/modules";
	import "swiper/css";
	import "swiper/css/zoom";
	import useWindowDimensions from "$runes/useWindowDimensions.svelte.js";

	[]

	let { slides } = $props();

	let containerEl = $state();
	let swiper = $state();

	// Floating-point slide position (0 = slide 0, 1.5 = halfway between 1 and 2)
	let slidePosition = $state(0);
	let activeIndex = $state(0);
	let isDragging = $state(false);

	// ─── Pretext / font sizing ────────────────────────────────────────────────────

	const REF_SIZE = 16; // baseline measurement size in px
	let fontFamily = $state("serif"); // read from DOM after mount — matches whatever CSS sets on .slide-body
	const PARA_MARGIN_EM = 0.75; // margin-bottom between <p> tags (em)

	// Standard typographic line-height: tighter at larger sizes, looser at smaller.
	// ~1.65 at 16px, ~1.45 at 32px, ~1.33 at 48px.
	function lineHeightFor(fontSize) {
		return Math.max(1.25, Math.min(1.3, 1.2 + 6.4 / fontSize));
	}

	// prepare() and layout() loaded dynamically — @chenglou/pretext is ESM-only
	// and must not run during SSR
	let ptPrepare = $state(null);
	let ptLayout = $state(null);
	onMount(async () => {
		const mod = await import("@chenglou/pretext");
		ptPrepare = mod.prepare;
		ptLayout = mod.layout;
	});

	let dims = new useWindowDimensions();

	// Both measured from the DOM — CSS padding/max-height changes are reflected automatically
	let textWidth = $state(0);
	let availH = $state(0);

	// Any wrapper element is sufficient — all share the same CSS, last bind:this write wins
	let wrapperEl = $state(null);

	$effect(() => {
		const el = wrapperEl;
		if (!el) return;
		dims.height; // re-run on viewport resize
		const s = getComputedStyle(el);
		const padV = parseFloat(s.paddingTop) + parseFloat(s.paddingBottom);
		availH = el.clientHeight - padV;
		const bodyEl = el.querySelector(".slide-body");
		if (bodyEl) fontFamily = getComputedStyle(bodyEl).fontFamily;
	});

	// Per-slide chrome (kicker + title + rule) heights — bound from DOM
	let chromeHeights = $state(Array.from({ length: untrack(() => slides.length) }, () => 0));

	// Binary search for the largest font size where all paragraphs fit availH.
	// Measures each paragraph separately to correctly account for inter-paragraph margins.
	function fitFontSize(paragraphs, availH) {
		let lo = 10, hi = 200;
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
		return lo;
	}

	let bodyFontSizes = $derived(
		slides.map((slide) => {
			if (!ptPrepare || !ptLayout || !slide.body?.length || textWidth <= 0 || availH <= 0) return REF_SIZE;
			const paragraphs = slide.body.map((l) => l.value ?? l);
			return fitFontSize(paragraphs, availH);
		})
	);

	let bodyLineHeights = $derived(bodyFontSizes.map(lineHeightFor));

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
	const STACK = [
		{ rot:  47, tx:  90, ty: -60, src: `${IMG_BASE}4000000068.jpg` },  // 0 bottom — top-right corner
		{ rot: -55, tx: -80, ty:  70, src: `${IMG_BASE}4000000069.jpg` },  // 1 — bottom-left
		{ rot:  33, tx:  60, ty:  80, src: `${IMG_BASE}4000000070.jpg` },  // 2 — bottom-right
		{ rot: -38, tx: -65, ty: -50, src: `${IMG_BASE}4000000071.jpg` },  // 3 — top-left
		{ rot:  22, tx:  40, ty: -40, src: `${IMG_BASE}4000000072.jpg` },  // 4 — upper-right
		{ rot: -44, tx: -35, ty:  55, src: `${IMG_BASE}4000000073.jpg` },  // 5 — lower-left
		{ rot:  18, tx:  25, ty:  35, src: `assets/476900.png` },  // 6 — lower-right
		{ rot: -60, tx: -20, ty: -25, src: `assets/4000000219.png` },  // 7 — upper-left
		{ rot:  8, tx:   6, ty:   -20, src: "assets/buttolph_portrait.png" },  // 8 — near center
		{ rot:  -3, tx:   2, ty:  -2, src: "assets/4000000068.png"},  // 9 top — centered (flies off)
	];

	// t = 0 at slide 0, t = 1 fully into slide 1
	let stackT = $derived(Math.max(0, Math.min(slidePosition, 1)));

	// Stack container fades out as you swipe from slide 1 → slide 2
	let stackOpacity = $derived(Math.max(0, Math.min(1, 2 - slidePosition)));

	// Per-card transform strings, driven by stackT
	// transition is only applied during snap (not during drag) — same pattern as story-image —
	// so a fast flick still plays the full animation rather than jumping to the end state
	const SNAP_TRANSITION = 'transform 420ms cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 420ms cubic-bezier(0.25, 0.46, 0.45, 0.94)';

	let stackStyles = $derived(STACK.map((card, i) => {
		const isTop = i === STACK.length - 1;
		const transition = isDragging ? 'none' : SNAP_TRANSITION;
		if (isTop) {
			// Top card: slides right and rotates further off screen
			const tx = lerp(card.tx, 130, stackT);
			const rot = lerp(card.rot, card.rot + 15, stackT);
			return `transform: rotate(${rot}deg) translate(${tx}%, ${card.ty}%); transition: ${transition}`;
		} else {
			// All other cards stay in their resting positions
			return `transform: rotate(${card.rot}deg) translate(${card.tx}%, ${card.ty}%)`;
		}
	}));

	// ─── Derived state ────────────────────────────────────────────────────────────

	// from/to indices and blend factor
	let fromIdx = $derived(Math.floor(Math.max(0, Math.min(slidePosition, slides.length - 1))));
	let toIdx = $derived(Math.min(fromIdx + 1, slides.length - 1));
	let blendT = $derived(Math.max(0, Math.min(slidePosition - fromIdx, 1)));

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
			modules: [Zoom],
			grabCursor: true,
			resistanceRatio: 0.6,
			speed: 420,
			threshold: 5,
			longSwipesRatio: 0.2,
			longSwipesMs: 300,
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
			activeIndex = s.activeIndex;
		});

		return () => swiper?.destroy();
	});

	function goTo(i) {
		swiper?.slideTo(i);
	}
</script>

<section class="story">
	<!-- ── Fixed background ── -->
	<div class="story-bg" aria-hidden="true">
		<!-- Zoomed photo background (visible from slide 1 onward) -->
		<div
			class="story-image"
			style="transform: scale({zoomScale}) translate({zoomX}%, {zoomY}%);
			       opacity: {Math.min(1, slidePosition)};
			       transition: {isDragging ? 'none' : 'transform 420ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'}"
		></div>

		<!-- Stack of photos — sits above story-image, fades out on slide 1→2 -->
		<div class="stack" style="opacity: {stackOpacity}; pointer-events: none">
			{#each STACK as card, i}
				<img class="stack-card" src={card.src} alt="" loading="lazy" decoding="async" draggable="false" style={stackStyles[i]} onload={(e) => e.currentTarget.style.width = e.currentTarget.naturalWidth / 2 + 'px'} />
			{/each}
		</div>

		<div class="story-overlay"></div>
	</div>

	<!-- ── Swiper ── -->
	<div class="swiper" bind:this={containerEl}>
		<div class="swiper-wrapper">
			{#each slides as slide, i}
				<div class="swiper-slide" class:is-zoom-slide={slide.zoomSlide}>
					{#if slide.zoomSlide}
						<div class="swiper-zoom-container">
							<img src="/assets/demo/test.jpg" alt="Zoom demo" draggable="false" />
						</div>
						<div class="zoom-label" class:is-active={activeIndex === i}>
							<span class="slide-kicker">{slide.kicker}</span>
							<h2 class="slide-title">{slide.title}</h2>
						</div>
					{:else}
						<div class="slide-inner" class:is-active={activeIndex === i}>
							{#if slide.body}
								<div
									class="slide-body-wrapper"
									bind:this={wrapperEl}
									style="font-size: {bodyFontSizes[i]}px; line-height: {bodyLineHeights[i]}"
								>
									<div class="slide-body-text" bind:clientWidth={textWidth}>
										{#each slide.body as line}
											<p class="slide-body">{@html line.value ?? line}</p>
										{/each}
									</div>
								</div>
							{/if}
							<div class="slide-chrome" bind:clientHeight={chromeHeights[i]}>
								<span class="slide-kicker">{slide.kicker}</span>
								<h2 class="slide-title">{slide.title}</h2>
								<div class="slide-rule"></div>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>

	<!-- ── Dot navigation ── -->
	<nav class="dots" aria-label="Story navigation">
		{#each slides as _, i}
			<button
				class="dot"
				class:is-active={activeIndex === i}
				onclick={() => goTo(i)}
				aria-label="Go to slide {i + 1}"
				style={activeIndex === i ? `background: #fff` : ""}
			></button>
		{/each}
	</nav>

	<!-- ── Swipe hint (first slide only) ── -->
	{#if activeIndex === 0}
		<div class="swipe-hint" aria-hidden="true">
			<span>swipe</span>
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<polyline points="9 18 15 12 9 6" />
			</svg>
		</div>
	{/if}

	<!-- ── Slide counter ── -->
	<div class="slide-counter" aria-live="polite">
		<span class="counter-current">{String(activeIndex + 1).padStart(2, "0")}</span>
		<span class="counter-sep">/</span>
		<span class="counter-total">{String(slides.length).padStart(2, "0")}</span>
	</div>
</section>

<style>
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
		/* padding: 0 1rem clamp(3rem, 8vh, 5rem); */
		/* color: #fff; */
		opacity: 0.45;
		transform: translateY(8px);
		transition:
			opacity 0.5s ease,
			transform 0.5s ease;
	}

	.slide-inner.is-active {
		opacity: 1;
		transform: translateY(0);
	}

	.slide-body-wrapper {
		background: #fffffb;
		height: 30vh;
		border: 1px solid rgba(0, 0, 0, .1);
		/* flex-direction: column; */
		padding: 20px 25px 15px;
		/* justify-content: flex-end; */
		border-radius: 3px;
		overflow: hidden;
		/* padding-bottom: 2rem; */
	}

	.slide-body-text {
		overflow: hidden;
		width: 100%;
	}

	.slide-body {
		font-family: var(--font-body);
		font-size: inherit;
		line-height: inherit;
		margin-bottom: 0.75em;
		color: inherit;
		margin-top: 0;
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
