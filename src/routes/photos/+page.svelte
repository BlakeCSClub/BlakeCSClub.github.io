<script>
	import images from "$lib/images.json"
</script>

<main>
	<h1>Photos</h1>
	{#each images as image, i}
		<img src={"club-photos/"+ image} alt="club-photo-{i}"/>
	{/each}
</main>

<style>
	img {
		max-width: 100%;
	}
</style>
