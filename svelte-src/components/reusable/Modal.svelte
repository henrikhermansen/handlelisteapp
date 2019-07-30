<script>
  import { getContext } from 'svelte';
  import { fade, fly } from 'svelte/transition';
  import Cross from "../svg/Cross.svelte";

  export let Component;
  let isHoveringCloseButton = false;

  const closeModal = getContext('closeModal');

  const { Component: c, ...forwardProps } = $$props;
</script>

<style>
  :global(body) {
    overflow: hidden;
  }

  .modal-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9;
    background: rgba(50, 50, 50, .6);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    position: relative;
    width: 25em;
    max-width: 98vw;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 4px;
    background: var(--white);
  }

  .modal__close {
    position: absolute;
    top: .4em;
    right: .4em;
    width: 3em;
    height: 3em;
    border: 0;
  }

  .modal__close :global(svg) {
    width: .8em;
    height: .8em;
    opacity: .7;
  }

  .modal__close:hover :global(svg) {
    opacity: 1;
  }
</style>

<div
    class="modal-background"
    in:fade={{ duration: 150 }}
    out:fade={{ duration: 150, delay: 150 }}
    on:click={closeModal}
>
  <div
      class="modal"
      in:fly={{ duration: 300, y: -50, delay: 150 }}
      out:fly={{ duration: 300, y: -50 }}
      on:click="{e=>e.stopPropagation()}"
  >
    <button
        class="modal__close"
        on:click={closeModal}
        on:mouseover="{()=>isHoveringCloseButton=true}"
        on:mouseout="{()=>isHoveringCloseButton=false}"
    >
      <Cross fill="charcoal" />
    </button>
    <Component {...forwardProps} />
  </div>
</div>
