import { c as create_ssr_component, v as validate_component, e as escape } from "../../chunks/index-ec28bb3a.js";
import { M as Main, H as Heading } from "../../chunks/Main-c053bc83.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(max-width: 1024px){.index-heading span.s-pmxwn2{display:block}.index-heading .hyphen.s-pmxwn2{display:none}}div.s-pmxwn2{display:flex;gap:7rem}@media(max-width: 1280px){div.s-pmxwn2{gap:3rem}}@media(max-width: 1024px){div.s-pmxwn2{flex-direction:column;gap:1rem}}img.s-pmxwn2{border-radius:50%;margin-inline:auto}@media(max-width: 640px){img.s-pmxwn2{max-width:75vw;max-height:75vw}}p.s-pmxwn2{text-align:justify;line-height:1.4;display:flex;flex-direction:column;gap:2rem}",
  map: null
};
let counter = 0;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Maciej \u017By\u0142ka</title>`, ""}<meta name="${"description"}" content="${"This is the front page of the Maciej \u017By\u0142ka's personal site"}">`, ""}

${validate_component(Main, "Main").$$render($$result, { class: "fade-in" }, {}, {
    default: () => {
      return `${validate_component(Heading, "Heading").$$render($$result, {
        style: "animation-delay: " + counter++ * 50 + "ms;",
        class: "index-heading"
      }, {}, {
        default: () => {
          return `<span class="${"s-pmxwn2"}">Maciej \u017By\u0142ka</span> <span class="${"hyphen s-pmxwn2"}">-</span> <span class="${"s-pmxwn2"}">Full-stack developer</span>`;
        }
      })}
  <div style="${"animation-delay: " + escape(counter++ * 50) + "ms;"}" class="${"s-pmxwn2"}">
    <img src="${"image.webp"}" width="${"400"}" height="${"400"}" alt="${"Maciej's picture"}" class="${"s-pmxwn2"}">

    <p class="${"s-pmxwn2"}"><span class="${"s-pmxwn2"}"><span class="${"s-pmxwn2"}">Full-stack developer, functional programming enthusiast. Currently working for</span>
        <a href="${"https://eda.sw.siemens.com/en-US/"}" target="${"_blank"}" rel="${"noreferrer noopener"}">Siemens EDA</a><span class="${"s-pmxwn2"}">.</span></span>
      <span class="${"s-pmxwn2"}"><span class="${"s-pmxwn2"}">I love JavaScript and I use it</span>
        <a href="${"https://kryogenix.org/code/browser/everyonehasjs.html"}" target="${"_blank"}" rel="${"noreferrer noopener"}">as little as possible</a><span class="${"s-pmxwn2"}">.</span></span></p></div>`;
    }
  })}`;
});
export { Routes as default };
