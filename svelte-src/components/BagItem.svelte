<script>
  import Flexrow from './reusable/Flexrow.svelte';
  import { items } from '../stores';

  export let bagItem;
</script>

<style>
    div {
        padding: 1em;
    }
</style>

<Flexrow>
    <div>{$items[bagItem.itemKey].name}</div>
</Flexrow>
