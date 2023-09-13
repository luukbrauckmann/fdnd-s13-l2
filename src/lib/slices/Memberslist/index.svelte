<script>
  /** @type {import("@prismicio/client").Content.MemberslistSlice} */
  export let slice;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
  <h2>Members</h2>

	<ul>
		{#each slice.items as { member } }
			<li>
				<article>
					<img src="{ member.data?.github.url }.png" alt="Icon">
					<h3>{member.data.firstname}</h3>


					<pre>{ JSON.stringify(member.data, 0, 2) }</pre>
				</article>
			</li>
		{/each}
</section>
