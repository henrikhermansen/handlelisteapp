<script>
  import { createEventDispatcher } from 'svelte';
  import { slide } from 'svelte/transition';

  export let onSubmit, submittable;

  let showForm, submitting, error;
  const toggleShowForm = () => showForm = !showForm;
  $: buttonText = showForm ? 'Avbryt' : 'Legg til';

  const dispatch = createEventDispatcher();
  const handleSubmit = async () => {
    error = null;
    submitting = true;
    try {
      await onSubmit();
      toggleShowForm();
    } catch (e) {
      error = e;
    } finally {
      submitting = false;
    }
  };
  const handleCancel = () => {
    dispatch('formcancel');
    error = null;
    toggleShowForm();
  }
</script>

<style>
  .outer {
    position: sticky;
    top: 0;
    z-index: 1;
    background: var(--white);
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
    margin-top: .5em;
  }

  .buttons button {
    flex-basis: 33%;
  }

  button, div :global(input) {
    padding: .3em .6em;
    border: 2px solid var(--silver);
    border-radius: 4px;
    background: transparent;
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, .05);
  }

  .submit {
    background: transparent;
    transition: background .2s cubic-bezier(.25, .1, .25, 1);
  }

  .submit.submittable {
    background: var(--cool-green);
  }

  div :global(input) {
    width: 100%;
    margin-bottom: .5em;
    background: var(--some-random-color)
  }
</style>

<div class="outer">
    {#if showForm}
      <div transition:slide class="form">
        <slot></slot>
        <div class="buttons">
          <button
              on:click={handleSubmit}
              class="submit"
              class:submittable
              disabled={!submittable || submitting}
          >
            Legg til
          </button>
          <button on:click={handleCancel}>Avbryt</button>
        </div>
          {#if error}
            En feil oppsto: {error}
          {/if}
      </div>
    {:else}
      <button transition:slide on:click={toggleShowForm} class="toggle">{buttonText}</button>
    {/if}
</div>
