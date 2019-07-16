<script>
  import { crossfade } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import { bagItems } from "../stores";
  import BagItem from "./BagItem.svelte";
  import AddBagItem from "./AddBagItem.svelte";
  import List from "./reusable/List.svelte";

  $: bagItemEntries = Object.entries($bagItems);

  const ikkeKjopt = ([_, { purchased }]) => !purchased;
  const kjopt = ([_, { purchased }]) => purchased;

  const [send, receive] = crossfade({ duration: d => Math.sqrt(d * 400) });
</script>

<style>
</style>

<AddBagItem />
<List>
    {#each bagItemEntries.filter(ikkeKjopt) as [key, bagItem] (key)}
      <div
          in:receive={{key}}
          out:send={{key}}
          animate:flip={{duration:300}}
      >
        <BagItem {key} {bagItem} />
      </div>
    {/each}
    {#each bagItemEntries.filter(kjopt) as [key, bagItem] (key)}
      <div
          in:receive={{key}}
          out:send={{key}}
          animate:flip={{duration:300}}
      >
        <BagItem {key} {bagItem} />
      </div>
    {/each}
</List>
