import { c as create_ssr_component, a as compute_rest_props, b as spread, d as escape_object } from "./index-ec28bb3a.js";
var Heading_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h1.s-6my2ly{text-align:center;font-size:2rem;font-weight:300;margin-bottom:2rem;margin:3rem 0 2rem 0}@media(max-width: 1024px){h1.s-6my2ly{margin:1rem 0 0 0}}",
  map: null
};
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  $$result.css.add(css$1);
  return `<h1${spread([escape_object($$restProps)], { classes: "s-6my2ly" })}>${slots.default ? slots.default({}) : ``}
</h1>`;
});
var Main_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.s-7q2zh0{width:min(100% - 8rem, 1200px);margin-inline:auto}@media(max-width: 640px){main.s-7q2zh0{width:90vw;margin-top:1rem}}",
  map: null
};
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  $$result.css.add(css);
  return `<main${spread([escape_object($$restProps)], { classes: "s-7q2zh0" })}>${slots.default ? slots.default({}) : ``}
</main>`;
});
export { Heading as H, Main as M };
