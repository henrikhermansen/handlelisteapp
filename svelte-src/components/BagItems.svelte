<script>
  import { bagItems } from '../stores';
  import BagItem from './BagItem.svelte';
  import AddBagItem from './AddBagItem.svelte';
  import List from './reusable/List.svelte';

  $: bagItemEntries = Object.entries($bagItems);
</script>

<style>
    div {
        padding: .5em .5em 2em;
    }
</style>

<AddBagItem />
<List>
    {#each bagItemEntries as [id, bagItem] (id) }
    <BagItem bagItem={bagItem} />
    {/each}
    {#each bagItemEntries as [id, bagItem] (id) }
    <BagItem bagItem={bagItem} />
    {/each}
    {#each bagItemEntries as [id, bagItem] (id) }
    <BagItem bagItem={bagItem} />
    {/each}
    {#each bagItemEntries as [id, bagItem] (id) }
    <BagItem bagItem={bagItem} />
    {/each}
    {#each bagItemEntries as [id, bagItem] (id) }
    <BagItem bagItem={bagItem} />
    {/each}
    {#each bagItemEntries as [id, bagItem] (id) }
    <BagItem bagItem={bagItem} />
    {/each}
    {#each bagItemEntries as [id, bagItem] (id) }
    <BagItem bagItem={bagItem} />
    {/each}
    {#each bagItemEntries as [id, bagItem] (id) }
    <BagItem bagItem={bagItem} />
    {/each}
    {#each bagItemEntries as [id, bagItem] (id) }
    <BagItem bagItem={bagItem} />
    {/each}
    {#each bagItemEntries as [id, bagItem] (id) }
    <BagItem bagItem={bagItem} />
    {/each}
</List>
