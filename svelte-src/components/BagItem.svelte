<script>
  import Flexrow from './reusable/Flexrow.svelte';
  import { items } from '../stores';

  export let bagItem;
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
</Flexrow>
