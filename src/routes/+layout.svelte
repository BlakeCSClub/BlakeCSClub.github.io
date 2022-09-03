<script>
    import Footer from "$lib/Footer.svelte";
    import Navbar from "$lib/Navbar.svelte";
</script>

<main>
    <!-- <script src="https://kit.fontawesome.com/23a7380aaf.js" crossorigin="anonymous"></script> -->
    <Navbar />
    <div id="global-container">
        <slot></slot>
    </div>
    <Footer />
</main>

<style>
    #global-container {
        margin: 5em;
        min-height: calc(100vh - 2*5em);
        display: flex;
    }
    :global(#global-container) main {
        margin:auto;
    }
    :global(body) {
		margin: 0px;
		padding: 0px;
		background-color: #161616;
    }
    :global(text) {
        font-family: calibri;
        width: 700px;
        text-align: center;
    }

    :global(h1) {
        font-family: "Times New Roman";
        font-size: 80px;
        letter-spacing: 3px;
        color: #66fcf1;
        text-align: left;
    }

    :global(p) {
        color: #f5f6f7;
        font-size: 30px;
        text-align: left;
    }
</style>