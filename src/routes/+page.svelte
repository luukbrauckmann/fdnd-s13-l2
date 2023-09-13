<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';

	export let data
	const { page } = data
</script>

<h1>{ page.title }</h1>

<SliceZone slices={page.slices} {components} />