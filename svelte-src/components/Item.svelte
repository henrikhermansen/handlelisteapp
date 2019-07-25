<script>
  import Flexrow from './reusable/Flexrow.svelte';
  import Pencil from './svg/Pencil.svelte';
  import { bagItems } from '../stores';
  import { update, ITEMS } from '../api/firebase';

  export let key;
  export let item;

  let editing = false, newItemName = item.name;

  $: _count = Object.values($bagItems)
      .reduce(
          (count, { itemKey, quantity }) =>
              itemKey === key ? count + (quantity || 1) : count,
          0
      );

  const editName = async () => {
    if (editing) {
      await update(ITEMS, key, {
        ...item,
        name: newItemName,
      });
    }
    editing = !editing;
  };
</script>

<style>
  div {
    padding: 1em;
  }

  .item-name {
    flex-grow: 2;
  }

  .item-quantity {
    flex-basis: 3em;
    text-align: right;
  }

  .pencil {
    padding: 0;
  }

  .pencil button {
    background: transparent;
    border: 0;
    outline: 0;
    padding: 0;
    width: 59px;
    height: 52px;
    cursor: pointer;
  }

  .pencil :global(.svg) {
    stroke: var(--grass);
    stroke-opacity: .4;
    transition: stroke-opacity .1s ease-in;
  }

  .pencil :global(svg) {
    width: 24px;
    height: 24px;
  }
</style>

<Flexrow>
  <div class="item-name">
      {#if editing}
        <input type="text" bind:value={newItemName} placeholder="Nytt varenavn" />
      {:else}
          {item.name}
      {/if}
  </div>
  <div class="item-quantity">{_count > 0 ? _count : '\xa0'}</div>
  <div class="pencil">
    <button on:click={editName}>
      <Pencil fill={editing?'grass':'light-gray'} />
    </button>
  </div>
</Flexrow>
