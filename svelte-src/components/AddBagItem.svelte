<script>
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  import Form from './reusable/Form.svelte';
  import SearchableInput from './reusable/SearchableInput.svelte';
  import { items } from '../stores';
  import { add, BAG_ITEMS } from '../api/firebase';
  import { makeBagItem } from '../util';
  import ModalHeader from "./reusable/ModalHeader.svelte";
  import ModalBody from "./reusable/ModalBody.svelte";
  import ModalFooter from "./reusable/ModalFooter.svelte";

  let varenavn = '', kommentar, antall, submitting;

  $: itemKey = Object.entries($items).reduce((item, [key, { name }]) => {
    return item || (name.toLowerCase() === varenavn.toLowerCase() ? key : undefined);
  }, undefined);

  $: sortedItems = Object.entries($items).sort((a, b) => {
    const aNavn = a[1].name.toLowerCase();
    const bNavn = b[1].name.toLowerCase();
    const vNavn = varenavn.toLowerCase();
    if (aNavn.startsWith(vNavn) && !bNavn.startsWith(vNavn)) return -1;
    if (bNavn.startsWith(vNavn) && !aNavn.startsWith(vNavn)) return 1;
    return aNavn.localeCompare(bNavn);
  });

  const resetValues = () => {
    varenavn = '';
    kommentar = '';
    antall = 1;
    submitting = false;
  };

  const onSubmit = async () => {
    try {
      submitting = true;
      const response = await add(BAG_ITEMS, makeBagItem(itemKey, kommentar, antall));
      resetValues();
      return response; // Gjøre noe med denne? Vise en success-melding?
    } catch (e) {
      return Promise.reject(e);
    }
  };

  onMount(resetValues);
</script>

<style>
  input.number {
    width: 4em;
    text-align: right;
    margin-left: 1em;
  }
</style>

<ModalHeader>
  Legg til i handlevogn
</ModalHeader>
<ModalBody>
  <Form>
    <SearchableInput bind:value={varenavn} placeholder="Varenavn" selection={sortedItems} />
    <div>
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
  </Form>
</ModalBody>
<ModalFooter>
  <button
      on:click={onSubmit}
      class="submit"
      class:submittable={!!itemKey}
      disabled={!itemKey || submitting}
  >
    Legg til
  </button>
</ModalFooter>
