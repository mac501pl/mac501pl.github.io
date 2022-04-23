<script>
  import Heading from "$lib/Heading.svelte";
  import Main from "$lib/Main.svelte";
  import SkillHeading from "$lib/skills/SkillHeading.svelte";
  import SkillList from "$lib/skills/SkillList.svelte";

  let counter = 0;
</script>

<svelte:head>
  <title>Skills</title>
  <meta name="description" content="Maciej's skills" />
</svelte:head>

<Main class="fade-in">
  <Heading style="animation-delay: {counter++ * 50}ms;">Skills</Heading>
  <div style="animation-delay: {counter++ * 50}ms;">
    <section>
      <SkillHeading>Frontend</SkillHeading>
      <SkillList>
        <li>Javascript, Typescript</li>
        <li>CSS3, sass, Bootstrap, Tailwind CSS</li>
        <li>React, Redux, Recoil, Formik, styled-components</li>
        <li>Svelte, SvelteKit</li>
        <li>Webpack, Vite</li>
        <li>SEO</li>
      </SkillList>
    </section>
    <section>
      <SkillHeading>Backend</SkillHeading>
      <SkillList>
        <li>Node.js</li>
        <li>Express, Jersey</li>
        <li>MySQL, Oracle, PL/SQL, MongoDB</li>
      </SkillList>
    </section>
    <section>
      <SkillHeading>Programming languages</SkillHeading>
      <SkillList>
        <li>Java</li>
        <li>C</li>
        <li>C++</li>
      </SkillList>
    </section>
    <section>
      <SkillHeading>Software</SkillHeading>
      <SkillList>
        <li>VS Code, Webstorm, IntelliJ IDEA, Eclipse</li>
        <li>Jira, Confluence</li>
      </SkillList>
    </section>
    <section>
      <SkillHeading>Other</SkillHeading>
      <div>
        <SkillList>
          <li>Linux</li>
          <li>Electron</li>
          <li>Docker</li>
          <li>Git</li>
          <li>npm, yarn</li>
        </SkillList>
        <SkillList>
          <li>Latex</li>
          <li>UML</li>
          <li>Android</li>
          <li>GitHub Actions</li>
          <li>Assembly language</li>
        </SkillList>
      </div>
    </section>
  </div>
</Main>

<style lang="scss">
  div {
    gap: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    grid-template-areas:
      ". ."
      ". ."
      "other other";
  }

  section {
    border: 1px black solid;
    border-radius: 0.5rem;

    &:last-child {
      grid-area: other;
    }

    div {
      display: flex;
      :global(ul) {
        flex: 1;
      }
    }
  }
</style>
