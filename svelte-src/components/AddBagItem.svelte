<script>
  import Form from './reusable/Form.svelte';
  import SearchableInput from './reusable/SearchableInput.svelte';
  import { items } from '../stores';

  let value = '';

  const onSubmit = () => {
    console.log('submitting', value);
    value = '';
  };
</script>

<style>
    input, button {
        margin-top: .5em;
    }
</style>

<Form on:submit={onSubmit}>
    <SearchableInput bind:value placeholder="Varenavn" selection={$items} />
</Form>