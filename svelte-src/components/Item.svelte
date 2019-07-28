<script>
  import Flexrow from './reusable/Flexrow.svelte';
  import Pencil from './svg/Pencil.svelte';
  import Cross from './svg/Cross.svelte';
  import { bagItems } from '../stores';
  import { update, remove, ITEMS } from '../api/firebase';

  export let key;
  export let item;

  let editing = false, newItemName = item.name;

  $: _count = Object.values($bagItems)
      .reduce(
          (count, { itemKey, quantity }) => itemKey === key ? count + (quantity || 1) : count,
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

  const removeItem = () => remove(ITEMS, key);
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

  .pencil, .remove-item {
    padding: 0 3px 0 0;
  }

  .pencil button, .remove-item button {
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
  }

  .pencil :global(svg), .remove-item :global(svg) {
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
    {#if _count>0}
      <div class="item-quantity">
          {_count}
      </div>
    {:else}
      <div class="remove-item">
        <button on:click={removeItem}>
          <Cross fill="dark-red" />
        </button>
      </div>
    {/if}
  <div class="pencil">
    <button on:click={editName}>
      <Pencil fill={editing?'grass':'light-gray'} />
    </button>
  </div>
</Flexrow>
