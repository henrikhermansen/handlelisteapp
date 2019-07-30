<script>
  import Form from './reusable/Form.svelte';
  import SearchableInput from './reusable/SearchableInput.svelte';
  import { items } from '../stores';
  import { update, remove, BAG_ITEMS } from '../api/firebase';
  import { makeBagItem, findItemKey, sortItems } from '../util';
  import ModalHeader from './reusable/ModalHeader.svelte';
  import ModalBody from './reusable/ModalBody.svelte';
  import ModalFooter from './reusable/ModalFooter.svelte';
  import TemporaryMessage from './reusable/TemporaryMessage.svelte';

  export let key;
  export let bagItem;

  let varenavn = $items[bagItem.itemKey].name,
      kommentar = bagItem.comment || '',
      antall = bagItem.quantity || 1,
      submitting = false,
      temporaryMessage = null,
      temporaryMessageTheme = null,
      inputNode;

  $: itemKey = findItemKey($items, varenavn);

  $: sortedItems = sortItems($items, varenavn);

  const onSubmit = async () => {
    try {
      resetTemporaryMessage();
      submitting = true;
      await update(BAG_ITEMS, key, makeBagItem(itemKey, kommentar, antall, bagItem.added));
      temporaryMessage = `${varenavn} ble oppdatert`;
      temporaryMessageTheme = 'success';
    } catch (e) {
      temporaryMessage = `Kunne ikke oppdatere ${varenavn}`;
      temporaryMessageTheme = 'error';
    } finally {
      submitting = false;
    }
  };

  const onRemove = () => remove(BAG_ITEMS, key);

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

  .remove {
    float: right;
    background: var(--cool-red);
  }

  .remove:hover,
  .remove:focus {
    border-color: var(--dark-red);
  }

  .remove:focus {
    box-shadow: 0 0 0 1px var(--white), 0 0 0 3px var(--cool-red);
  }
</style>

<ModalHeader>
  Endre vare i handlevogn
</ModalHeader>
<ModalBody>
    {#if temporaryMessage}
      <TemporaryMessage closeFn={resetTemporaryMessage} theme={temporaryMessageTheme}>
          {temporaryMessage}
      </TemporaryMessage>
    {/if}
  <Form>
    <SearchableInput bind:value={varenavn} bind:this={inputNode} placeholder="Varenavn" selection={sortedItems} />
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
    Endre
  </button>
  <button class="remove" on:click={onRemove}>Slett</button>
</ModalFooter>
