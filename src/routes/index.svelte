<script lang="ts">
  let counter = 0;
</script>

<svelte:head>
  <title>Maciej Żyłka</title>
  <meta name="description" content="This is the front page of the Maciej Żyłka's personal site" />
</svelte:head>

<main class="fade-in">
  <h1 style="animation-delay: {counter++ * 50}ms;">
    <span>Maciej Żyłka</span> <span class="hyphen">-</span> <span>Full-stack developer</span>
  </h1>
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

  h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 2rem;

    @include mq(s) {
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

    @include mq(s) {
      max-width: 350px;
      max-height: 350px;
    }

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
