<script>
  import { createEventDispatcher } from 'svelte';
  import { slide } from 'svelte/transition';

  let showForm = true; // flip me
  const toggleShowForm = () => showForm = !showForm;
  $: buttonText = showForm ? 'Avbryt' : 'Legg til';

  const dispatch = createEventDispatcher();
  const onSubmit = () => {
    dispatch('submit');
    toggleShowForm();
  };
</script>

<style>
    .outer {
        position: sticky;
        top: 0;
        z-index: 1;
        background: #ffffff;
        padding: .5em
    }

    .form {
        margin: 0 0 5px;
    }

    .toggle {
        display: block;
        margin: 0 auto;
    }

    .buttons {
        display: flex;
        justify-content: space-evenly;
        margin-top: 1em;
    }

    .buttons button {
        flex-basis: 33%;
    }

    button, div :global(input) {
        padding: .3em .6em;
        border: 2px solid #cccccc;
        border-radius: 4px;
        background: transparent;
        box-shadow: 0 1px 2px 1px rgba(0, 0, 0, .05);
    }

    button:hover, button:focus, div :global(input:hover, input:focus) {
        border-color: #46a020 !important;
    }

    div :global(input) {
        width: 100%;
    }
</style>

<div class="outer">
    {#if showForm}
    <div transition:slide class="form">
        <slot></slot>
        <div class="buttons">
            <button on:click={onSubmit}>Legg til</button>
            <button on:click={toggleShowForm}>Avbryt</button>
        </div>
    </div>
    {:else}
    <button transition:slide on:click={toggleShowForm} class="toggle">{buttonText}</button>
    {/if}
</div>
