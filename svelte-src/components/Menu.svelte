<script>
  import { createEventDispatcher } from 'svelte';

  export let view;

  const dispatch = createEventDispatcher();

  const showHandleliste = () => dispatch('updateView', 'bagItems');
  const showVareutvalg = () => dispatch('updateView', 'items');
</script>

<style>
  div {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 2.5em;
    background: #ffffff;
  }

  button {
    font-size: 14px;
    padding: .2em 1em;
    margin: 0 1em;
    height: 2em;
    opacity: .5;
    border: 0;
    background: transparent;
  }

  .active {
    opacity: 1;
  }
</style>

<div>
  <button on:click={showHandleliste} class:active={view==='bagItems'}>Handleliste</button>
  <button on:click={showVareutvalg} class:active={view==='items'}>Vareutvalg</button>
</div>
