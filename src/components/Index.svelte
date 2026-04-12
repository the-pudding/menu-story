<script>
	import SwiperStory from "$components/SwiperStory.svelte";
	import { getContext } from "svelte";

	let copy = getContext("copy");
	let data = getContext("data");
</script>

<svelte:boundary onerror={(e) => console.error(e)}>
	<SwiperStory slides={copy.slides} />
</svelte:boundary>
