<script>
	  /** @type {import('./$types').PageData} */  
	  export let data;
</script>

<main>
	<h1>Photos</h1>
	{#each Object.values(data) as image, i}
		<img src={"club-photos/"+ image} alt="club-photo-{i}"/>
	{/each}
</main>

<style>
	img {
		max-width: 100%;
	}
</style>
