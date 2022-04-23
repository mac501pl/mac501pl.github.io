<h1 {...$$restProps}>
  <slot />
</h1>

<style lang="scss">
  h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 2rem;
    margin: 3rem 0 2rem 0;

    @include mq(m) {
      margin: 1rem 0 0 0;
    }
  }
</style>
