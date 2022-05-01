<main {...$$restProps}>
  <slot />
</main>

<style lang="scss">
  main {
    width: min(100% - 8rem, 1200px);
    margin-inline: auto;

    @include mq(xs) {
      width: 90vw;
      margin-top: 1rem;
    }
  }
</style>
