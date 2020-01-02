<script>
  import List from './reusable/List.svelte';
  import Item from './Item.svelte';
  import { items, bagItems } from '../stores';

  $: sortedItems = Object.entries($items)
      .sort((a, b) => {
        const aNavn = a[1].name.toLowerCase();
        const bNavn = b[1].name.toLowerCase();
        return aNavn.localeCompare(bNavn);
      });

  $: itemCounts = Object.values($bagItems)
      .reduce((itemCounts, { itemKey, quantity }) => {
        if (itemCounts[itemKey]) {
          itemCounts[itemKey] += quantity || 1;
        } else {
          itemCounts[itemKey] = quantity || 1;
        }
        return itemCounts;
      }, {});
</script>

<style>
</style>

<List>
    {#each sortedItems as [key, item] (key)}
        <Item {key} {item} count={itemCounts[key]} />
    {/each}
</List>
