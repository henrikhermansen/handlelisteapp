<script>
  import { crossfade } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import { quintOut } from 'svelte/easing';
  import AddItem from './AddItem.svelte';
  import List from './reusable/List.svelte';
  import Item from './Item.svelte';
  import { items } from '../stores';

  let filterCharacter = 'a';
  $: filterableCharacters = Array.from(
      Object.values($items)
          .reduce((set, { name }) => {
            set.add(name.toLowerCase()[0]);
            return set;
          }, new Set())
  )
      .sort((a, b) => a.localeCompare(b));

  $: sortedItems = Object.entries($items)
      .filter(([_, { name }]) => filterCharacter ? name.toLowerCase().startsWith(filterCharacter) : true)
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
  .filters {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }

  .filters button {
    width: 2.3em;
    height: 2.3em;
    margin: .2em;
  }

  .filters button.alle {
    width: 3.4em;
  }

  .active {
    background: var(--cool-green);
  }
</style>

<AddItem />
<div class="filters">
    {#each filterableCharacters as character}
      <button
          on:click="{()=>filterCharacter=character}"
          class:active={filterCharacter===character}
      >
          {character.toUpperCase()}
      </button>
    {/each}
  <button on:click="{()=>filterCharacter=null}" class:active={filterCharacter===null} class="alle">Alle</button>
</div>
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
