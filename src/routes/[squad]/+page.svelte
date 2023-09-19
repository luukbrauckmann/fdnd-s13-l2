<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';

	export let data
	const { page } = data
</script>

<h2>{ page.title }</h2>

<SliceZone slices={page.slices} {components} />