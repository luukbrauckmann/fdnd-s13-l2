<script>
  /** @type {import("@prismicio/client").Content.MemberslistSlice} */
  export let slice;
</script>

<section
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
>
<pre>{ JSON.stringify(slice, 0, 2) }</pre>
  <!-- <h2>Members</h2>

	{#each slice.items as { member } }
		<article>
			<div>
				<h3>{member.data.firstname}</h3>

				<div>
					Extra info
					<pre>{ JSON.stringify(member.data, 0, 2) }</pre>
				</div>
			</div>

			<img src="{ member.data?.github.url }.png" alt="">
		</article>
	{/each} -->
</section>

<style>
	article {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
