<script>
  import { afterUpdate } from 'svelte';
  import Flexrow from './reusable/Flexrow.svelte';
  import Pencil from './svg/Pencil.svelte';
  import Cross from './svg/Cross.svelte';
  import { update, remove, ITEMS } from '../api/firebase';

  export let key;
  export let item;
  export let count;

  let editing = false, newItemName = item.name, inputNode;

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

  afterUpdate(() => {
    if (editing) {
      inputNode.focus();
    }
  });
</script>

<style>
  div {
    padding: 1em;
  }

  .item-name {
    flex-grow: 2;
  }

  .item-quantity, .remove-item {
    flex-basis: 3em;
    text-align: right;
  }

  .remove-item {
    padding: 0 3px 0 1em;
  }

  .pencil {
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
        <input type="text" bind:value={newItemName} bind:this={inputNode} placeholder="Nytt varenavn" />
      {:else}
          {item.name}
      {/if}
  </div>
    {#if count>0}
      <div class="item-quantity">
          {count}
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
