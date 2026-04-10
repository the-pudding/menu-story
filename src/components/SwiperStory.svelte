<script>
	import { onMount } from "svelte";
	import { browser } from "$app/environment";
	import Swiper from "swiper";
	import { Zoom } from "swiper/modules";
	import "swiper/css";
	import "swiper/css/zoom";

	// Each slide defines its text content and image zoom/pan state
	const slides = [
		{
			kicker: "Arrival",
			title: "The first table",
			body: "You fold your coat across the chair. The maître d' brings water without being asked. This is how you know it's going to be a good night.",
			accent: "#e94560",
			zoom: { scale: 1.9, x: 0, y: 4 }
		},
		{
			kicker: "Amuse-bouche",
			title: "Something unexpected",
			body: "A single bite arrives unsolicited — cold beet, warm goat cheese, one herb leaf. The kitchen is saying: we see you. We're paying attention.",
			accent: "#c77dff",
			zoom: { scale: 1.7, x: -3, y: 7 }
		},
		{
			kicker: "First course",
			title: "The soup that changes everything",
			body: "Celery root velouté. You didn't order it meaning to. But now you understand why people write letters to restaurants.",
			accent: "#0ac5bf",
			zoom: { scale: 2.0, x: 3, y: -3 }
		},
		{
			kicker: "Main",
			title: "The weight of it",
			body: "Duck breast, quince, something smoky underneath. You set down your fork to fully inhabit the moment. The table beside you is laughing.",
			accent: "#ff6b35",
			zoom: { scale: 2.3, x: -2, y: 2 }
		},
		{
			kicker: "Dessert",
			title: "Sweetness, earned",
			body: "Tarte Tatin, crème fraîche pooling at the edge. You came here hungry for something and found it, though you couldn't name it if asked.",
			accent: "#ffd166",
			zoom: { scale: 1.8, x: 1, y: 5 }
		},
		{
			kicker: "The bill",
			title: "Staying a little longer",
			body: "The check sits in its leather folder. Neither of you reaches for it. This is the highest compliment a meal can receive.",
			accent: "#74b9ff",
			zoom: { scale: 1.3, x: 0, y: 0 }
		},
		{
			kicker: "Zoom demo",
			title: "Pinch or double-tap",
			body: null,
			accent: "#ffffff",
			zoom: { scale: 1.0, x: 0, y: 0 },
			zoomSlide: true
		}
	];

	let containerEl = $state();
	let swiper = $state();

	// Floating-point slide position (0 = slide 0, 1.5 = halfway between 1 and 2)
	let slidePosition = $state(0);
	let activeIndex = $state(0);
	let isDragging = $state(false);

	// ─── Helpers ────────────────────────────────────────────────────────────────

	function lerp(a, b, t) {
		return a + (b - a) * t;
	}

	function hexToRgb(hex) {
		const h = hex.replace("#", "");
		return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
	}

	function lerpColor(hex1, hex2, t) {
		const [r1, g1, b1] = hexToRgb(hex1);
		const [r2, g2, b2] = hexToRgb(hex2);
		return `rgb(${Math.round(lerp(r1, r2, t))},${Math.round(lerp(g1, g2, t))},${Math.round(lerp(b1, b2, t))})`;
	}

	// ─── Helpers ─────────────────────────────────────────────────────────────────

	// Smoothstep: ease-in-out with zero derivatives at t=0 and t=1
	function smoothstep(t) {
		return t * t * (3 - 2 * t);
	}

	// ─── Derived state ────────────────────────────────────────────────────────────

	// from/to indices and blend factor
	let fromIdx = $derived(Math.floor(Math.max(0, Math.min(slidePosition, slides.length - 1))));
	let toIdx = $derived(Math.min(fromIdx + 1, slides.length - 1));
	let blendT = $derived(Math.max(0, Math.min(slidePosition - fromIdx, 1)));

	let accentColor = $derived(lerpColor(slides[fromIdx].accent, slides[toIdx].accent, blendT));

	// Image zoom / pan — eased so transitions feel cinematic rather than linear
	let zoomT = $derived(smoothstep(blendT));
	let zoomScale = $derived(lerp(slides[fromIdx].zoom.scale, slides[toIdx].zoom.scale, zoomT));
	let zoomX = $derived(lerp(slides[fromIdx].zoom.x, slides[toIdx].zoom.x, zoomT));
	let zoomY = $derived(lerp(slides[fromIdx].zoom.y, slides[toIdx].zoom.y, zoomT));

	// ─── Swiper init ─────────────────────────────────────────────────────────────

	onMount(() => {
		swiper = new Swiper(containerEl, {
			grabCursor: true,
			resistanceRatio: 0.6,
			speed: 420,
			keyboard: { enabled: true }
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
		<div
			class="story-image"
			style="transform: scale({zoomScale}) translate({zoomX}%, {zoomY}%); transition: {isDragging ? 'none' : 'transform 420ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'}"
		></div>
		<div class="story-overlay"></div>
	</div>

	<!-- ── Swiper ── -->
	<div class="swiper" bind:this={containerEl}>
		<div class="swiper-wrapper">
			{#each slides as slide, i}
				<div class="swiper-slide">
					<div class="slide-inner" class:is-active={activeIndex === i}>
						<span class="slide-kicker">{slide.kicker}</span>
						<h2 class="slide-title">{slide.title}</h2>
						<p class="slide-body">{slide.body}</p>

						<!-- Inline progress for this slide's accent color -->
						<div
							class="slide-rule"
							style="background: {accentColor}"
						></div>
					</div>
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
				style={activeIndex === i ? `background: ${accentColor}` : ""}
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

	.story-image {
		position: absolute;
		inset: 0;
		background-image: url('/assets/demo/test.jpg');
		background-size: cover;
		background-position: center;
		will-change: transform;
	}

	.story-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			to top,
			rgba(0, 0, 0, 0.82) 0%,
			rgba(0, 0, 0, 0.35) 55%,
			rgba(0, 0, 0, 0.55) 100%
		);
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
		align-items: flex-end;
		padding: 0 clamp(1.5rem, 6vw, 5rem) clamp(5rem, 12vh, 8rem);
		box-sizing: border-box;
	}

	/* ── Slide content ────────────────────────────────────────────── */

	.slide-inner {
		max-width: 52ch;
		color: #fff;
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
		font-family: var(--font-serif);
		font-size: clamp(1.75rem, 5vw, 3rem);
		line-height: 1.15;
		font-weight: 400;
		margin: 0 0 1.25rem;
		color: inherit;
	}

	.slide-body {
		font-family: var(--font-serif);
		font-size: clamp(1rem, 2.2vw, 1.2rem);
		line-height: 1.7;
		margin: 0 0 2rem;
		opacity: 0.85;
		color: inherit;
	}

	.slide-rule {
		width: 2.5rem;
		height: 2px;
		border-radius: 1px;
		opacity: 0.8;
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
