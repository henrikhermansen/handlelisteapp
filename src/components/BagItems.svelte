<script>
  import { crossfade } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import { bagItems } from "../stores";
  import BagItem from "./BagItem.svelte";
  import List from "./reusable/List.svelte";

  const todayDateString = new Date().toLocaleDateString();
  $: bagItemEntries = Object.entries($bagItems)
          .filter(([_, {purchased}]) =>
                  !purchased || new Date(purchased).toLocaleDateString() === todayDateString);

  const ikkeKjopt = ([_, { purchased }]) => !purchased;
  const kjopt = ([_, { purchased }]) => purchased;

  const [send, receive] = crossfade({
    duration: d => Math.sqrt(d * 400),
    fallback: () => ({
      duration: 400,
      css: t => `opacity: ${t}`
    })
  });
</script>

<style>
</style>

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
