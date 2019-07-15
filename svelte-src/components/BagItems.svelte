<script>
  import { bagItems } from "../stores";
  import BagItem from "./BagItem.svelte";
  import AddBagItem from "./AddBagItem.svelte";
  import List from "./reusable/List.svelte";

  $: bagItemEntries = Object.entries($bagItems).sort(([,{ purchased: ap }], [,{ purchased: bp }]) => {
    if (!ap && bp) return -1;
    if (!bp && ap) return 1;
    return 0;
  });
</script>

<style>
  div {
    padding: 0.5em 0.5em 2em;
  }
</style>

<AddBagItem />
<List>
    {#each bagItemEntries as [key, bagItem] (key)}
      <BagItem {key} {bagItem} />
    {/each}
</List>
