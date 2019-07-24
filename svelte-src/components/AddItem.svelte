<script>
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  import Form from './reusable/Form.svelte';
  import { items } from '../stores';
  import { add, ITEMS } from '../api/firebase';
  import { makeItem } from '../util';

  let varenavn = '', submitting = false;

  $: lowerCaseItemNames = Object.values($items).map(({ name }) => name.toLowerCase());
  $: varenavnEksisterer = lowerCaseItemNames.includes(varenavn.trim().toLowerCase());
  $: submittable = varenavn.trim().length > 1 && !varenavnEksisterer;

  const resetValues = () => {
    varenavn = '';
  };

  const onSubmit = async () => {
    try {
      submitting = true;
      const response = await add(ITEMS, makeItem(varenavn));
      resetValues();
      return response;
    } catch (e) {
      return Promise.reject(e);
    } finally {
      submitting = false;
    }
  };

  onMount(resetValues);
</script>

<style>
  .item-form {
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }

  .feilmelding {
    color: var(--dark-red);
  }

  button {
    flex-basis: 7em;
    margin: 0 0 .5em .5em;
  }

  input {
    flex-grow: 2;
  }
</style>

<Form>
  <div class="item-form">
    <input type="text" bind:value={varenavn} placeholder="Varenavn" />
    <button
        on:click={onSubmit}
        class="submit"
        class:submittable
        disabled={!submittable}
    >
      Legg til
    </button>
  </div>
    {#if varenavnEksisterer && !submitting}
      <div class="feilmelding">Varenavnet eksisterer allerede</div>
    {/if}
</Form>
