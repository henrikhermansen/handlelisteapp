<script>
  import { crossfade } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import { quintOut } from 'svelte/easing';
  import AddItem from './AddItem.svelte';
  import List from './reusable/List.svelte';
  import Item from './Item.svelte';
  import { items } from '../stores';

  $: sortedItems = Object.entries($items)
      .sort((a, b) => {
        const aNavn = a[1].name.toLowerCase();
        const bNavn = b[1].name.toLowerCase();
        return aNavn.localeCompare(bNavn);
      });

  const [send, receive] = crossfade({
    duration: d => Math.sqrt(d * 400),
    fallback: () => ({
      duration: 400,
      easing: quintOut,
      css: t => `
					transform: scale(${t});
					opacity: ${t}
				`
    })
  });
</script>

<style>
</style>

<AddItem />
<List>
    {#each sortedItems as [key, item] (key)}
      <div
          in:receive={{key}}
          out:send={{key}}
          animate:flip={{duration:300}}
      >
        <Item {key} {item} />
      </div>
    {/each}
</List>
