import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { L as Learn_More_Button } from "../../../chunks/Learn-More-Button.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><div class="${"name"}"><h1>Upcoming Events</h1>
	  <p>There are no upcoming events at the moment, but check back soon! </p><br>
	  ${validate_component(Learn_More_Button, "LearnMoreButton").$$render($$result, {}, {}, {})}</div>
  </main>`;
});
export {
  Page as default
};
