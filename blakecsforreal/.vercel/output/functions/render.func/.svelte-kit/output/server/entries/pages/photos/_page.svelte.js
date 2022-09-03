import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-ojzt9c{max-width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<main><h1>Photos</h1>
	${each(Object.values(data), (image, i) => {
    return `<img${add_attribute("src", "club-photos/" + image, 0)} alt="${"club-photo-" + escape(i, true)}" class="${"svelte-ojzt9c"}">`;
  })}
</main>`;
});
export {
  Page as default
};
