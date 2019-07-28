<script>
  import Flexrow from './reusable/Flexrow.svelte';
  import Checkmark from './svg/Checkmark.svelte';
  import { items } from '../stores';
  import { update, BAG_ITEMS } from '../api/firebase';

  export let key;
  export let bagItem;

  const togglePurchasedStatus = () => update(BAG_ITEMS, key, {
    ...bagItem,
    purchased: bagItem.purchased ? false : new Date().toJSON(),
  });
</script>

<style>
  div {
    padding: 1em;
  }

  .item-name {
    flex-grow: 2;
  }

  .item-name small {
    margin-left: 1em;
  }

  .item-quantity {
    flex-basis: 3em;
    text-align: right;
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

<Flexrow>
  <div class="item-name">
      {$items[bagItem.itemKey].name}
      {#if bagItem.comment}
        <br />
        <small>{bagItem.comment}</small>
      {/if}
  </div>
  <div class="item-quantity">{bagItem.quantity > 1 ? bagItem.quantity : '\xa0'}</div>
  <div class="checkmark">
    <button on:click={togglePurchasedStatus}>
      <Checkmark fill={bagItem.purchased?'grass':'light-gray'} />
    </button>
  </div>
</Flexrow>
