<script>
	import SwiperStory from "$components/SwiperStory.svelte";
	import { getContext, onMount } from "svelte";

	let copy = getContext("copy");
	let data = getContext("data");
	let height = $state(null);

	onMount(() => {
		height = window.visualViewport?.height ?? document.documentElement.clientHeight;
	});
</script>

<svelte:boundary onerror={(e) => console.error(e)}>
	{#if height}
		<SwiperStory slides={copy.slides} {height} />
	{/if}
	
</svelte:boundary>
