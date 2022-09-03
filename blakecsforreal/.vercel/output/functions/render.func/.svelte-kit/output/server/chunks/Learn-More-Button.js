import { c as create_ssr_component } from "./index.js";
const LearnMoreButton_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-p6ycbo{width:200px;height:45px;display:flex;justify-content:center;align-items:center;color:#151515;background-color:#55b2ae}a.svelte-p6ycbo:hover{background-color:#66fcf1;transition:all ease 0.2s}",
  map: null
};
const Learn_More_Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main><a href="${"https://docs.google.com/forms/d/e/1FAIpQLScWg2R4RNg_KUkPExhttiIAfvlR68b16Vr4O6q6BueUDmnXUw/viewform?pli=1"}" class="${"svelte-p6ycbo"}">Join Our Mailing List &gt; </a>
</main>`;
});
export {
  Learn_More_Button as L
};
