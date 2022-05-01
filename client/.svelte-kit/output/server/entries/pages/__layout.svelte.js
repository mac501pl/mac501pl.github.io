import { c as create_ssr_component, v as validate_component } from "../../chunks/index-ec28bb3a.js";
var Nav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".current.s-rcu5v4,.current.s-rcu5v4:hover{color:#ff3e00;font-weight:bold}nav.s-rcu5v4{padding:1rem 17rem;display:flex;gap:2rem}@media(max-width: 1536px){nav.s-rcu5v4{padding:1rem 7rem}}@media(max-width: 1024px){nav.s-rcu5v4{gap:1rem;padding:1rem 3rem}}@media(max-width: 640px){nav.s-rcu5v4{gap:0.5rem;padding:1rem;justify-content:space-around}}a.s-rcu5v4{text-decoration:underline 0.2em transparent;transition:text-decoration-color 300ms}a.s-rcu5v4:hover{color:initial;text-decoration-color:#ff3e00}a.s-rcu5v4:first-child{margin-right:auto}@media(max-width: 640px){a.s-rcu5v4:first-child{margin-right:0}}a.s-rcu5v4::before{content:attr(title);font-weight:bold;visibility:hidden}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { current } = $$props;
  if ($$props.current === void 0 && $$bindings.current && current !== void 0)
    $$bindings.current(current);
  $$result.css.add(css$1);
  return `<nav class="${"s-rcu5v4"}"><a href="${"/"}" class="${["s-rcu5v4", current === "/" ? "current" : ""].join(" ").trim()}">Home</a>
  <a href="${"/skills"}" class="${["s-rcu5v4", current === "/skills" ? "current" : ""].join(" ").trim()}">Skills</a>
  <a href="${"/portfolio"}" class="${["s-rcu5v4", current === "/portfolio" ? "current" : ""].join(" ").trim()}">Portfolio</a>
  <a href="${"/contact"}" class="${["s-rcu5v4", current === "/contact" ? "current" : ""].join(" ").trim()}">Contact</a>
</nav>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "*{box-sizing:border-box}body{margin:0;background-color:#eee;font-family:arial}a,p,span{color:black;font-size:larger}a:hover{color:#ff3e00}@keyframes intro{100%{transform:translateY(0);opacity:1}}.fade-in>*{animation:intro 0.5s forwards;opacity:0;transform:translateY(-20px)}",
  map: null
};
const load = ({ url: { pathname } }) => ({ props: { pathname } });
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pathname } = $$props;
  if ($$props.pathname === void 0 && $$bindings.pathname && pathname !== void 0)
    $$bindings.pathname(pathname);
  $$result.css.add(css);
  return `${validate_component(Nav, "Nav").$$render($$result, { current: pathname }, {}, {})}

${slots.default ? slots.default({}) : ``}`;
});
export { _layout as default, load };
