import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { L as Learn_More_Button } from "../../../chunks/Learn-More-Button.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>
	  <h1>About</h1>
	  <p>The purpose of the club is to encourage an active interest in coding and learning foundational computational skills! We can help students learn a wide variety of coding languages particularly Python and Java script as well as learn more about work happening in artificial intelligence, game design, and other applications of computer science. </p><br>
      <p>Additionally, there\u2019s a focus on cybersecurity and supporting individual and team competitive sport experiences among students! The club endeavors to increase their knowledge of information security skills. Developing cybersecurity skills come as a part of Capture the Flag (CTF) events, learning \u201Cethical hacking.\u201D Members are committed to promoting the wider school community on information security and good computer security practices. </p>

	  ${validate_component(Learn_More_Button, "LearnMoreButton").$$render($$result, {}, {}, {})}
  </main>`;
});
export {
  Page as default
};
