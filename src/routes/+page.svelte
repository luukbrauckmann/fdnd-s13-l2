<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	import { Globe } from '$lib/icons';

	export let data
	const { page } = data
</script>

<h1>{ page.title }</h1>

<Globe />

<SliceZone slices={page.slices} {components} />