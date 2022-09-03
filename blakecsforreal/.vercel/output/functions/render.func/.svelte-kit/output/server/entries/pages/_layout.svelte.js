import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Footer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "main.svelte-1jngvxc.svelte-1jngvxc{padding-bottom:20px}.footer_pic.svelte-1jngvxc.svelte-1jngvxc{display:block;width:17%;margin-left:auto;margin-right:auto}a.svelte-1jngvxc.svelte-1jngvxc{padding:auto;color:#f5f6f7;font-size:30px}a.svelte-1jngvxc p.svelte-1jngvxc{margin:0;text-align:center}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<main class="${"svelte-1jngvxc"}"><img class="${"footer_pic svelte-1jngvxc"}" src="${"favicon.png"}" alt="${"Footer Pic"}">
    <a href="${"mailto:blake.csclub@gmail.com"}" class="${"svelte-1jngvxc"}"><p class="${"svelte-1jngvxc"}">blake.csclub@gmail.com</p></a>
</main>`;
});
const Navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-1tcmcax{position:fixed;top:0;width:100%;height:5em;display:flex;justify-content:space-around;align-items:center;box-sizing:border-box;background-color:#1f2833;box-shadow:2px 2px 12px rgba(0, 0, 0, 0.05)}img.svelte-1tcmcax{margin-left:20%;max-height:100%}a.svelte-1tcmcax{text-decoration:none;text-transform:uppercase;font-weight:200;font-size:0.8rem;padding:10px 15px;color:#66fcf1}a.svelte-1tcmcax:hover,.active.svelte-1tcmcax{background-color:#45a29e;color:#ffffff;font-weight:700;transition:all ease 0.4s}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<main><nav class="${"svelte-1tcmcax"}"><a id="${"home"}" href="${"/"}" class="${"active svelte-1tcmcax"}">Home</a>
    <a id="${"about"}" href="${"about"}" class="${" svelte-1tcmcax"}">About</a>

    <a id="${"events"}" href="${"events"}" class="${"svelte-1tcmcax"}">Upcoming Events</a>
    <a id="${"photos"}" href="${"photos"}" class="${"svelte-1tcmcax"}">Photo Gallery</a>
    <a id="${"reference"}" href="${"reference"}" class="${"svelte-1tcmcax"}">Reference Material</a>
    <a id="${"contact"}" href="${"contact"}" class="${"svelte-1tcmcax"}">Contact Us!</a>
    <img class="${"nav_pic svelte-1tcmcax"}" src="${"temp_nav_pic.png"}" alt="${"Navbar Icon"}"></nav>
</main>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '#global-container.svelte-48ik1v{margin:5em;min-height:calc(100vh - 2*5em);display:flex}#global-container main.svelte-48ik1v{margin:auto}body{margin:0px;padding:0px;background-color:#161616}text{font-family:calibri;width:700px;text-align:center}h1{font-family:"Times New Roman";font-size:80px;letter-spacing:3px;color:#66fcf1;text-align:left}p{color:#f5f6f7;font-size:30px;text-align:left}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"svelte-48ik1v"}">
    ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
    <div id="${"global-container"}" class="${"svelte-48ik1v"}">${slots.default ? slots.default({}) : ``}</div>
    ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</main>`;
});
export {
  Layout as default
};
