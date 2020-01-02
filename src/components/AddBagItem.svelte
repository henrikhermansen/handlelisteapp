<script>
  import { onMount } from 'svelte';
  import Form from './reusable/Form.svelte';
  import SearchableInput from './reusable/SearchableInput.svelte';
  import { items } from '../stores';
  import { add, BAG_ITEMS } from '../api/firebase';
  import { makeBagItem, findItemKey, sortItems } from '../util';
  import ModalHeader from './reusable/ModalHeader.svelte';
  import ModalBody from './reusable/ModalBody.svelte';
  import ModalFooter from './reusable/ModalFooter.svelte';
  import TemporaryMessage from './reusable/TemporaryMessage.svelte';
  import ModalFooterFormButtons from "./reusable/ModalFooterFormButtons.svelte";

  let varenavn = '',
      kommentar = '',
      antall = '',
      submitting = false,
      temporaryMessage = null,
      temporaryMessageTheme = null,
      inputNode;

  $: itemKey = findItemKey($items, varenavn);

  $: sortedItems = sortItems($items, varenavn);

  const resetValues = () => {
    varenavn = '';
    kommentar = '';
    antall = '';
  };

  const onSubmit = async () => {
    try {
      resetTemporaryMessage();
      submitting = true;
      await add(BAG_ITEMS, makeBagItem(itemKey, kommentar, antall));
      temporaryMessage = `${varenavn} ble lagt i handlevognen`;
      temporaryMessageTheme = 'success';
      resetValues();
    } catch (e) {
      temporaryMessage = `Kunne ikke legge ${varenavn} i handlevognen`;
      temporaryMessageTheme = 'error';
    } finally {
      submitting = false;
    }
  };

  const resetTemporaryMessage = () => {
    temporaryMessage = null;
    temporaryMessageTheme = null;
  };

  onMount(() => {
    inputNode.focus();
  });
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
    {#if temporaryMessage}
      <TemporaryMessage closeFn={resetTemporaryMessage} theme={temporaryMessageTheme}>
          {temporaryMessage}
      </TemporaryMessage>
    {/if}
  <Form>
    <SearchableInput bind:value={varenavn} bind:inputNode placeholder="Varenavn" selection={sortedItems} />
    <input type="text" bind:value={kommentar} placeholder="Kommentar" />
    <label>
      Antall
      <input
          type="number"
          bind:value={antall}
          class="number"
          maxlength="3"
          placeholder="1"
      />
    </label>
  </Form>
</ModalBody>
<ModalFooter>
  <ModalFooterFormButtons>
    <button
        on:click={onSubmit}
        class="submit"
        class:submittable={!!itemKey}
        disabled={!itemKey || submitting}
    >
      Legg til
    </button>
  </ModalFooterFormButtons>
</ModalFooter>
