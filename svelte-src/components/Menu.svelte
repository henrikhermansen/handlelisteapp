<script>
  import { createEventDispatcher } from 'svelte';
  import Cart from './svg/Cart.svelte';
  import Selection from './svg/Selection.svelte';
  import Plus from "./svg/Plus.svelte";

  export let view;

  const dispatch = createEventDispatcher();

  const showHandleliste = () => dispatch('updateView', 'bagItems');
  const showVareutvalg = () => dispatch('updateView', 'items');
</script>

<style>
  .menu {
    position: absolute;
    padding: 0 1em;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100vw - 2em);
    height: 3em;
    background: var(--grass);
  }

  button {
    padding: 0 1.5em;
    margin: 0 .2em;
    height: 3em;
    background: transparent;
    border: 0;
    box-shadow: none;
  }

  button:hover,
  button:focus {
    background: var(--dark-green);
    transition: background var(--easing-visual);
    opacity: .85;
  }

  button :global(svg) {
    width: 1.5em;
    height: 1.5em;
  }

  .active {
    background: var(--dark-green);
  }

  .stretch {
    flex-grow: 2;
  }
</style>

<div class="menu">
  <button on:click={showHandleliste} class:active={view==='bagItems'}>
    <Cart fill="white" />
  </button>
  <button on:click={showVareutvalg} class:active={view==='items'}>
    <Selection fill="white" />
  </button>
  <div class="stretch" />
  <button>
    <Plus fill="white" />
  </button>
</div>
