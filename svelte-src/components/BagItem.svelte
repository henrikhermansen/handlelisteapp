<script>
  import { setContext } from 'svelte';
  import Flexrow from './reusable/Flexrow.svelte';
  import Checkmark from './svg/Checkmark.svelte';
  import { items } from '../stores';
  import { update, BAG_ITEMS } from '../api/firebase';
  import Modal from './reusable/Modal.svelte';
  import EditBagItem from './EditBagItem.svelte';

  export let key;
  export let bagItem;

  let longPressTimer, edit = false;

  const togglePurchasedStatus = () => update(BAG_ITEMS, key, {
    ...bagItem,
    purchased: bagItem.purchased ? false : new Date().toJSON(),
  });

  const startLongPressTimer = () => longPressTimer = setTimeout(() => edit = true, 700);
  const endLongPressTimer = () => clearTimeout(longPressTimer);
  setContext('closeModal', () => edit = false);
</script>

<style>
  div {
    padding: 1em;
  }

  .item-name {
    flex-grow: 2;
    padding-right: 0;
  }

  .item-name small {
    margin-left: 1em;
    display: block;
  }

  .item-quantity {
    flex-basis: 3em;
    text-align: right;
    padding-left: .5em;
  }

  .checkmark {
    padding: 0;
  }

  .checkmark button {
    background: transparent;
    border: 0;
    outline: 0;
    padding: 0;
    width: 59px;
    height: 52px;
    cursor: pointer;
  }

  .checkmark :global(.svg) {
    stroke: var(--grass);
    stroke-opacity: .4;
  }

  .checkmark :global(svg) {
    width: 24px;
    height: 24px;
  }
</style>

{#if edit}
  <Modal Component={EditBagItem} {key} {bagItem} />
{/if}
<Flexrow>
  <div class="item-name">
      {$items[bagItem.itemKey].name}
      {#if bagItem.comment}
        <small>{bagItem.comment}</small>
      {/if}
  </div>
  <div class="item-quantity">{bagItem.quantity > 1 ? bagItem.quantity : '\xa0'}</div>
  <div class="checkmark">
    <button
        on:click={togglePurchasedStatus}
        on:mousedown={startLongPressTimer}
        on:mouseup={endLongPressTimer}
    >
      <Checkmark fill={bagItem.purchased?'grass':'light-gray'} />
    </button>
  </div>
</Flexrow>
