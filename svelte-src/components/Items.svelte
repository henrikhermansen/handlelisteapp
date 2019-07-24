<script>
  import AddItem from './AddItem.svelte';
  import { items, bagItems } from '../stores';

  $: bagItemValues = Object.values($bagItems);

  $: sortedItems = Object.entries($items)
      .sort((a, b) => {
        const aNavn = a[1].name.toLowerCase();
        const bNavn = b[1].name.toLowerCase();
        return aNavn.localeCompare(bNavn);
      })
      .map(([key, item]) => ([
        key,
        {
          ...item,
          _count: bagItemValues.filter(({ itemKey }) => itemKey === key).length
        }
      ]));
</script>

<style>
</style>

<AddItem />

{#each sortedItems as item}
    {JSON.stringify(item)}<br />
{/each}
