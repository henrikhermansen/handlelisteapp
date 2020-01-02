<script>
  import { createEventDispatcher } from 'svelte';
  import { fly } from 'svelte/transition';
  import Cart from './svg/Cart.svelte';
  import Selection from './svg/Selection.svelte';
  import Plus from "./svg/Plus.svelte";
  import { connected } from '../stores';
  import Nocloud from "./svg/Nocloud.svelte";

  export let view;
  export let addItemActive;

  const dispatch = createEventDispatcher();

  const showHandleliste = () => dispatch('updateView', 'bagItems');
  const showVareutvalg = () => dispatch('updateView', 'items');
  const addItem = () => dispatch('addItem');
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

  .menu-item {
    padding: 0 1.5em;
    margin: 0 .2em;
    height: 3em;
    background: transparent;
    border: 0;
    box-shadow: none;
    display: flex;
    align-items: center;
  }

  button.menu-item:hover,
  button.menu-item:focus {
    background: var(--dark-green);
    transition: background var(--easing-visual), opacity var(--easing-visual);
    opacity: .85;
  }

  .menu-item :global(svg) {
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
  <button on:click={showHandleliste} class="menu-item" class:active={view==='bagItems'}>
    <Cart fill="white" />
  </button>
  <button on:click={showVareutvalg} class="menu-item" class:active={view==='items'}>
    <Selection fill="white" />
  </button>
  <div class="stretch" />
  {#if !$connected}
    <span class="menu-item" transition:fly="{{ y: 50, duration: 500 }}">
      <Nocloud fill="dark-red" />
    </span>
  {/if}
  <div class="stretch" />
  <button on:click={addItem} class="menu-item" class:active={addItemActive}>
    <Plus fill="white" />
  </button>
</div>
