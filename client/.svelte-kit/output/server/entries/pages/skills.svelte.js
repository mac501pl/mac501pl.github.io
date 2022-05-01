import { c as create_ssr_component, v as validate_component, e as escape } from "../../chunks/index-ec28bb3a.js";
import { M as Main, H as Heading } from "../../chunks/Main-c053bc83.js";
var SkillHeading_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "h3.s-cyyrp3{text-align:center;font-weight:300;margin:0.5rem 0}",
  map: null
};
const SkillHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<h3 class="${"s-cyyrp3"}">${slots.default ? slots.default({}) : ``}
</h3>`;
});
var SkillList_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'ul.s-vgbge7{list-style-type:"- "}',
  map: null
};
const SkillList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<ul class="${"s-vgbge7"}">${slots.default ? slots.default({}) : ``}
</ul>`;
});
var skills_svelte_svelte_type_style_lang = "";
const css = {
  code: 'div.s-1mq7t6b.s-1mq7t6b{gap:10px;display:grid;grid-template-columns:1fr 1fr;grid-auto-rows:1fr;grid-template-areas:". ." ". ." "other other"}section.s-1mq7t6b.s-1mq7t6b{border:1px black solid;border-radius:0.5rem}section.s-1mq7t6b.s-1mq7t6b:last-child{grid-area:other}section.s-1mq7t6b div.s-1mq7t6b{display:flex}section.s-1mq7t6b div.s-1mq7t6b ul{flex:1}',
  map: null
};
let counter = 0;
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Skills</title>`, ""}<meta name="${"description"}" content="${"Maciej's skills"}">`, ""}

${validate_component(Main, "Main").$$render($$result, { class: "fade-in" }, {}, {
    default: () => {
      return `${validate_component(Heading, "Heading").$$render($$result, {
        style: "animation-delay: " + counter++ * 50 + "ms;"
      }, {}, {
        default: () => {
          return `Skills`;
        }
      })}
  <div style="${"animation-delay: " + escape(counter++ * 50) + "ms;"}" class="${"s-1mq7t6b"}"><section class="${"s-1mq7t6b"}">${validate_component(SkillHeading, "SkillHeading").$$render($$result, {}, {}, {
        default: () => {
          return `Frontend`;
        }
      })}
      ${validate_component(SkillList, "SkillList").$$render($$result, {}, {}, {
        default: () => {
          return `<li>Javascript, Typescript</li>
        <li>CSS3, sass, Bootstrap, Tailwind CSS</li>
        <li>React, Redux, Recoil, Formik, styled-components</li>
        <li>Svelte, SvelteKit</li>
        <li>Webpack, Vite</li>
        <li>SEO</li>`;
        }
      })}</section>
    <section class="${"s-1mq7t6b"}">${validate_component(SkillHeading, "SkillHeading").$$render($$result, {}, {}, {
        default: () => {
          return `Backend`;
        }
      })}
      ${validate_component(SkillList, "SkillList").$$render($$result, {}, {}, {
        default: () => {
          return `<li>Node.js</li>
        <li>Express, Jersey</li>
        <li>MySQL, Oracle, PL/SQL, MongoDB</li>`;
        }
      })}</section>
    <section class="${"s-1mq7t6b"}">${validate_component(SkillHeading, "SkillHeading").$$render($$result, {}, {}, {
        default: () => {
          return `Programming languages`;
        }
      })}
      ${validate_component(SkillList, "SkillList").$$render($$result, {}, {}, {
        default: () => {
          return `<li>Java</li>
        <li>C</li>
        <li>C++</li>`;
        }
      })}</section>
    <section class="${"s-1mq7t6b"}">${validate_component(SkillHeading, "SkillHeading").$$render($$result, {}, {}, {
        default: () => {
          return `Software`;
        }
      })}
      ${validate_component(SkillList, "SkillList").$$render($$result, {}, {}, {
        default: () => {
          return `<li>VS Code, Webstorm, IntelliJ IDEA, Eclipse</li>
        <li>Jira, Confluence</li>`;
        }
      })}</section>
    <section class="${"s-1mq7t6b"}">${validate_component(SkillHeading, "SkillHeading").$$render($$result, {}, {}, {
        default: () => {
          return `Other`;
        }
      })}
      <div class="${"s-1mq7t6b"}">${validate_component(SkillList, "SkillList").$$render($$result, {}, {}, {
        default: () => {
          return `<li>Linux</li>
          <li>Electron</li>
          <li>Docker</li>
          <li>Git</li>
          <li>npm, yarn</li>`;
        }
      })}
        ${validate_component(SkillList, "SkillList").$$render($$result, {}, {}, {
        default: () => {
          return `<li>Latex</li>
          <li>UML</li>
          <li>Android</li>
          <li>GitHub Actions</li>
          <li>Assembly language</li>`;
        }
      })}</div></section></div>`;
    }
  })}`;
});
export { Skills as default };
