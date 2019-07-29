<script>
  import Form from './reusable/Form.svelte';
  import SearchableInput from './reusable/SearchableInput.svelte';
  import { items } from '../stores';
  import { add, BAG_ITEMS } from '../api/firebase';
  import { makeBagItem } from '../util';
  import ModalHeader from './reusable/ModalHeader.svelte';
  import ModalBody from './reusable/ModalBody.svelte';
  import ModalFooter from './reusable/ModalFooter.svelte';
  import TemporaryMessage from './reusable/TemporaryMessage.svelte';

  let varenavn = '',
      kommentar = '',
      antall = 1,
      submitting = false,
      temporaryMessage = null,
      temporaryMessageTheme = null;

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
      await add(BAG_ITEMS, makeBagItem(itemKey, kommentar, antall));
      temporaryMessage = `${varenavn} ble lagt i handlevognen`;
      temporaryMessageTheme = 'success';
      resetValues();
    } catch (e) {
      temporaryMessage = `Kunne ikke legge ${varenavn} i handlevognen`;
      temporaryMessageTheme = 'error';
    }
  };

  const resetTemporaryMessage = () => {
    temporaryMessage = null;
    temporaryMessageTheme = null;
  };
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
{#if temporaryMessage}
  <TemporaryMessage closeFn={resetTemporaryMessage} theme={temporaryMessageTheme}>
      {temporaryMessage}
  </TemporaryMessage>
{/if}
<ModalBody>
  <Form>
    <SearchableInput bind:value={varenavn} placeholder="Varenavn" selection={sortedItems} />
    <input type="text" bind:value={kommentar} placeholder="Kommentar" />
    <label>
      Antall
      <input
          type="number"
          bind:value={antall}
          class="number"
          maxlength="3"
      />
    </label>
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
