import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { L as Learn_More_Button } from "../../chunks/Learn-More-Button.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-cjmf3l{display:block;margin-top:auto;margin-bottom:auto;max-width:700px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="${"container svelte-cjmf3l"}">
    <h1>The Blake School<br> Cyber Security <br> &amp; Coding Club</h1>
    <p>Hello! We&#39;re so glad your here!</p>
    ${validate_component(Learn_More_Button, "LearnMoreButton").$$render($$result, {}, {}, {})}
</main>`;
});
export {
  Page as default
};
