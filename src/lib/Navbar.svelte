<main>
  <nav>
    <a id="home" href="/" class="active">Home</a>
    <a id="about" href="about" class="">About</a>

    <a id="events" href="events">Upcoming Events</a>
    <a id="photos" href="photos">Photo Gallery</a>
    <a id="reference" href="reference">Reference Material</a>
    <a id="contact" href="contact">Contact Us!</a>
    <img class="nav_pic" src="temp_nav_pic.png" alt="Navbar Icon" />
  </nav>
</main>

<style>
  nav {
    position: fixed;
    top: 0;
    width: 100%;
    height: 5em;

    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    
    background-color: #1f2833;
    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.05);
  }

  img {
    margin-left: 20%;
    max-height: 100%;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 200;
    font-size: 0.8rem;
    padding: 10px 15px;
    color: #66fcf1;
  }

  a:hover,
  .active {
    background-color: #45a29e;
    color: #ffffff;
    font-weight: 700;
    transition: all ease 0.4s;
  }
</style>
