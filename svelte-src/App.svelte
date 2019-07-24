<script>
  import { fly, fade } from 'svelte/transition';
  import { quintInOut } from 'svelte/easing';
  import BagItems from './components/BagItems.svelte';
  import Items from './components/Items.svelte';
  import Menu from './components/Menu.svelte';

  let view = 'bagItems';

  const updateView = ({ detail }) => view = detail;
</script>

<style>
  :global(body) {
    padding: 0;
    margin: 0;
    background: var(--light-gray);
    height: 100vh;
    position: relative;
  }

  :global(body, input, button) {
    font-family: "Nunito", Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-size: 16px;
  }

  :global(input:focus, button:focus) {
    outline: none;
    box-shadow: 0 0 0 1px var(--white), 0 0 0 3px var(--cool-green) !important;
  }

  :global(button:hover),
  :global(button:focus),
  :global(input:hover, input:focus) {
    border-color: var(--grass) !important;
  }

  .outer {
    max-width: 768px;
    margin: 0 auto;
    height: calc(100vh - 2.5em);
    position: relative;
  }

  .outer:after {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    pointer-events: none;
    background-image: linear-gradient(
        to bottom,
        rgba(245, 245, 245, 0),
        rgba(245, 245, 245, 1) 90%
    );
    width: 100%;
    height: 4em;
  }

  .inner {
    height: 100%;
    overflow: scroll;
  }
</style>

{#if view === 'bagItems'}
<div
    class="outer"
    in:fly={{ x: -300, delay: 500, duration: 500, easing: quintInOut }}
    out:fly={{ x: -300, delay: 0, duration: 500, easing: quintInOut }}
>
  <div class="inner">
    <BagItems />
  </div>
</div>
{:else}
<div
    class="outer"
    in:fly={{ x: 300, delay: 500, duration: 500, easing: quintInOut }}
    out:fly={{ x: 300, delay: 0, duration: 500, easing: quintInOut }}
>
  <div class="inner">
    <Items />
  </div>
</div>
{/if}

<Menu on:updateView={updateView} view={view} />
