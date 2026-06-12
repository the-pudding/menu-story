<script>
	import { getContext, onMount } from "svelte";
	import Swiper from "swiper";
	import { Virtual, Keyboard } from "swiper/modules";
	import "swiper/css";
	import "swiper/css/virtual";

	let copy = getContext("copy");
	let slides = copy.slides;

	let containerEl = $state();
	let swiper = $state();
	let activeIndex = $state(0);
	let virtualData = $state({ slides: [], offset: 0 });

	onMount(() => {
		swiper = new Swiper(containerEl, {
			modules: [Virtual, Keyboard],
			//speed: 300,
			keyboard: { enabled: true },
			virtual: {
				slides: slides.map((_, i) => i),
				addSlidesAfter: 1,
				addSlidesBefore: 1,
				renderExternal(data) {
					virtualData = data;
				}
			}
		});

		swiper.on("activeIndexChange", (s) => {
			activeIndex = s.activeIndex;
		});

		return () => swiper?.destroy();
	});
</script>

<div class="swiper-test">
	<div class="swiper" bind:this={containerEl}>
		<div class="swiper-wrapper">
			{#each virtualData.slides as slideIndex}
				{@const slide = slides[slideIndex]}
				<div class="swiper-slide" data-swiper-slide-index={slideIndex} style="left: {virtualData.offset}px">
					<div class="slide-inner" class:active={slideIndex === activeIndex}>
						{#if slide.body}
							{#each slide.body as line}
								<p>{@html line.value ?? line}</p>
							{/each}
						{/if}
						hi
						<!-- <span class="slide-id">{slide.id ?? slideIndex}</span> -->
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- <div class="slide-counter">
		{activeIndex + 1} / {slides.length}
	</div> -->
</div>

<style>
	.swiper-test {
		width: 100%;
		height: 100svh;
		display: flex;
		flex-direction: column;
		background: #faf4e1;
		font-family: "EB Garamond", serif;
	}

	.swiper {
		width: 100%;
		flex: 1;
	}

	.swiper-slide {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		box-sizing: border-box;
	}

	.slide-inner {
		max-width: 600px;
		width: 100%;
		padding: 2rem;
		background: #fff8e7;
		border-radius: 4px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
		opacity: 0.5;
		transition: opacity 300ms ease;
	}

	.slide-inner.active {
		opacity: 1;
	}

	.slide-inner p {
		margin: 0 0 0.75em;
		font-size: 1.25rem;
		line-height: 1.4;
	}

	.slide-inner p:last-of-type {
		margin-bottom: 0;
	}

	.slide-id {
		display: block;
		margin-top: 1rem;
		font-family: "Courier Prime", monospace;
		font-size: 0.75rem;
		color: rgba(0, 0, 0, 0.35);
	}

	.slide-counter {
		text-align: center;
		padding: 0.75rem;
		font-family: "Courier Prime", monospace;
		font-size: 0.875rem;
		color: rgba(0, 0, 0, 0.5);
	}
</style>
