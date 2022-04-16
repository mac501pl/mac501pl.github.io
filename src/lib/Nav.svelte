<script lang="ts">
  export let current: string;
</script>

<nav>
  <a class:current={current === "/"} href="/">Home</a>
  <a class:current={current === "/skills"} href="/skills">Skills</a>
  <a class:current={current === "/portfolio"} href="/portfolio">Portfolio</a>
  <a class:current={current === "/contact"} href="/contact">Contact</a>
</nav>

<style lang="scss">
  .current,
  .current:hover {
    color: $highlight;
    font-weight: bold;
  }

  nav {
    padding: 1rem 17rem;
    display: flex;
    gap: 2rem;

    @include mq(xl) {
      padding: 1rem 7rem;
    }

    @include mq(m) {
      gap: 1rem;
      padding: 1rem 3rem;
    }

    @include mq(xs) {
      gap: 0.5rem;
      padding: 1rem;
    }
  }

  a {
    text-decoration: underline 0.2em transparent;
    transition: text-decoration-color 300ms;

    &:hover {
      color: initial;
      text-decoration-color: $highlight;
    }

    &:first-child {
      margin-right: auto;
    }

    &::before {
      content: attr(title);
      font-weight: bold;
      visibility: hidden;
    }
  }
</style>
