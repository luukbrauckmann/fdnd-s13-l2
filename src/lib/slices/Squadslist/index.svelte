<script>
  /** @type {import("@prismicio/client").Content.SquadlistSlice} */
  export let slice;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  Placeholder component for {slice.slice_type} (variation: {slice.variation})
  Slices
	{#each slice.items as { squad } }

		<pre>{ JSON.stringify(squad, 0, 2)}</pre>

	{/each}
</section>
