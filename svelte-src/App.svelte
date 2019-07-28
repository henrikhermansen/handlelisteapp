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
    background: var(--white);
    height: 100vh;
    position: relative;
  }

  :global(body, input, button) {
    font-family: "Nunito", Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-size: 16px;
  }

  :global(button), :global(input) {
    padding: .3em .6em;
    border: 2px solid var(--silver);
    border-radius: 3px;
    background: transparent;
  }

  :global(input) {
    width: 100%;
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, .05);
  }

  :global(input:focus, button:focus) {
    outline: none;
    box-shadow: 0 0 0 1px var(--white), 0 0 0 3px var(--cool-green);
  }

  :global(button:hover),
  :global(button:focus),
  :global(input:hover, input:focus) {
    border-color: var(--grass);
  }

  :global(.submit) {
    transition: background var(--easing-visual);
  }

  :global(.submit.submittable) {
    background: var(--cool-green);
  }

  .outer {
    margin: 0 auto;
    height: calc(100vh - 2.5em);
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
