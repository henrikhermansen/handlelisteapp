<script>
  import { createEventDispatcher } from 'svelte';
  import { slide } from 'svelte/transition';
  import Form from './Form.svelte';

  export let onSubmit, submittable;

  let showForm, submitting, error;
  const toggleShowForm = () => showForm = !showForm;

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
</style>

<Form>
    {#if showForm}
      <div transition:slide>
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
      <button transition:slide on:click={toggleShowForm} class="toggle">Legg til</button>
    {/if}
</Form>
