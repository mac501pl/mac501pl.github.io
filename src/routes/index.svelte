<script lang="ts">
  import Heading from "$lib/Heading.svelte";
  import Main from "$lib/Main.svelte";

  let counter = 0;
</script>

<svelte:head>
  <title>Maciej Żyłka</title>
  <meta name="description" content="This is the front page of the Maciej Żyłka's personal site" />
</svelte:head>

<Main class="fade-in">
  <Heading style="animation-delay: {counter++ * 50}ms;" class="index-heading">
    <span>Maciej Żyłka</span> <span class="hyphen">-</span> <span>Full-stack developer</span>
  </Heading>
  <div style="animation-delay: {counter++ * 50}ms;">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img src="image.webp" width="400" height="400" alt="Maciej's picture" />

    <p>
      <span>
        <span>Full-stack developer, functional programming enthusiast. Currently working for</span>
        <a href="https://eda.sw.siemens.com/en-US/" target="_blank" rel="noreferrer noopener">Siemens EDA</a><span
          >.</span
        >
      </span>
      <span>
        <span>I love JavaScript and I use it</span>
        <a href="https://kryogenix.org/code/browser/everyonehasjs.html" target="_blank" rel="noreferrer noopener">
          as little as possible</a
        ><span>.</span>
      </span>
    </p>
  </div>
</Main>

<style lang="scss">
  :global(.index-heading) {
    @include mq(m) {
      span {
        display: block;
      }

      .hyphen {
        display: none;
      }
    }
  }

  div {
    display: flex;
    gap: 7rem;

    @include mq(l) {
      gap: 3rem;
    }

    @include mq(m) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  img {
    border-radius: 50%;
    margin-inline: auto;

    @include mq(xs) {
      max-width: 75vw;
      max-height: 75vw;
    }
  }

  p {
    text-align: justify;
    line-height: 1.4;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
