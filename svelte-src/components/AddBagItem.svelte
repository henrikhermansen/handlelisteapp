<script>
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  import Form from './reusable/Form.svelte';
  import SearchableInput from './reusable/SearchableInput.svelte';
  import { items } from '../stores';
  import { add, BAG_ITEMS } from '../api/firebase';
  import { makeBagItem } from '../util';

  let varenavn = '', kommentar, antall, visMer;

  $: itemKey = Object.entries($items).reduce((item, [key, { name }]) => {
    return item || (name.toLowerCase() === varenavn.toLowerCase() ? key : undefined);
  }, undefined);

  const resetValues = () => {
    varenavn = '';
    kommentar = '';
    antall = 1;
    visMer = false;
  };

  const onSubmit = async () => {
    try {
      const response = await add(BAG_ITEMS, makeBagItem(itemKey, kommentar, antall));
      resetValues();
      return response;
    } catch (e) {
      return Promise.reject(e);
    }
  };

  onMount(resetValues);
</script>

<style>
  button {
    display: block;
    padding: .2em .4em;
    margin: .6em auto 1.2em;
    border: 0;
    border-radius: 3px;
    background: transparent;
  }

  input.number {
    width: 4em;
    text-align: right;
    margin-left: 1em;
  }
</style>

<Form onSubmit={onSubmit} on:formcancel={resetValues} submittable={!!itemKey}>
  <SearchableInput bind:value={varenavn} placeholder="Varenavn" selection={$items} />
    {#if visMer}
      <div transition:slide>
        <input type="text" bind:value={kommentar} placeholder="Kommentar" />
        <div>
          Antall
          <input
              type="number"
              bind:value={antall}
              class="number"
              maxlength="3"
          />
        </div>
      </div>
    {:else}
      <button on:click={()=>visMer=true} transition:slide>Vis mer</button>
    {/if}
</Form>