<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  export const load: Load = ({ url: { pathname } }) => ({ props: { pathname } });
</script>

<script lang="ts">
  import Nav from "$lib/Nav.svelte";
  export let pathname: string;
</script>

<Nav current={pathname} />

<slot />

<style lang="scss">
  :global {
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      background-color: $background;
    }

    a,
    p {
      color: $text;
    }

    a:hover {
      color: $highlight;
    }
  }
</style>
