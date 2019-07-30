<script>
  import { onDestroy, beforeUpdate, afterUpdate } from 'svelte';
  import { slide } from 'svelte/transition';

  export let closeFn;
  export let theme;
  export let timeout = 5000;

  let timer;
  const setTimer = () => timer = setTimeout(closeFn, timeout);
  const clearTimer = () => {
    clearTimeout(timer);
    timer = null;
  };

  afterUpdate(setTimer);
  onDestroy(clearTimer);
  beforeUpdate(clearTimer);

  const cssClass = `temporary-message ${theme}`;
</script>

<style>
  .temporary-message {
    margin: 0 auto 1em;
    box-sizing: border-box;
    width: calc(100% - 2px);
    padding: 0.5em;
    border-radius: 3px;
  }

  .success {
    background: var(--cool-green);
    box-shadow: 0 0 1px 0 var(--grass), 0 0 0 1px var(--cool-green);
    color: var(--dark-green);
  }

  .error {
    background: var(--cool-red);
    box-shadow: 0 0 1px 0 var(--dark-red), 0 0 0 1px var(--cool-red);
    color: var(--dark-red);
  }
</style>

<div class={cssClass} transition:slide={{ duration: 200 }}>
  <slot></slot>
</div>
