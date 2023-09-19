<script>
  /** @type {import("@prismicio/client").Content.SquadSlice} */
  export let slice;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  Placeholder component for {slice.slice_type} (variation: {slice.variation})
  Slices

	<pre>{ JSON.stringify(slice, 0, 2) }</pre>
</section>
