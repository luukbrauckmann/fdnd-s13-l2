<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';

	export let data
	const { page } = data
</script>

<h3>{ page.title }</h3>

<SliceZone slices={page.slices} {components} />