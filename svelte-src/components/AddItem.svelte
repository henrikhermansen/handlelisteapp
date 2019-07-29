<script>
  import Form from './reusable/Form.svelte';
  import { items } from '../stores';
  import { add, ITEMS } from '../api/firebase';
  import { makeItem } from '../util';
  import ModalHeader from "./reusable/ModalHeader.svelte";
  import ModalBody from "./reusable/ModalBody.svelte";
  import ModalFooter from "./reusable/ModalFooter.svelte";
  import TemporaryMessage from "./reusable/TemporaryMessage.svelte";

  let varenavn = '',
      submitting = false,
      temporaryMessage = null,
      temporaryMessageTheme = null;

  $: lowerCaseItemNames = Object.values($items).map(({ name }) => name.toLowerCase());
  $: varenavnEksisterer = lowerCaseItemNames.includes(varenavn.trim().toLowerCase());
  $: submittable = !!varenavn.trim() && !varenavnEksisterer;

  const resetValues = () => {
    varenavn = '';
  };

  const onSubmit = async () => {
    try {
      submitting = true;
      await add(ITEMS, makeItem(varenavn));
      temporaryMessage = `${varenavn} ble lagt til i vareutvalget`;
      temporaryMessageTheme = 'success';
      resetValues();
    } catch (e) {
      temporaryMessage = `Kunne ikke legge til ${varenavn} i vareutvalget`;
      temporaryMessageTheme = 'error';
    } finally {
      submitting = false;
    }
  };

  const resetTemporaryMessage = () => {
    temporaryMessage = null;
    temporaryMessageTheme = null;
  };
</script>

<style>
  .feilmelding {
    color: var(--dark-red);
  }
</style>

<ModalHeader>
  Legg til i vareutvalg
</ModalHeader>
<ModalBody>
  {#if temporaryMessage}
    <TemporaryMessage closeFn={resetTemporaryMessage} theme={temporaryMessageTheme}>
      {temporaryMessage}
    </TemporaryMessage>
  {/if}
  <Form>
    <input type="text" bind:value={varenavn} placeholder="Varenavn" />
      {#if varenavnEksisterer && !submitting}
        <div class="feilmelding">Varenavnet eksisterer allerede</div>
      {/if}
  </Form>
</ModalBody>
<ModalFooter>
  <button
      on:click={onSubmit}
      class="submit"
      class:submittable
      disabled={!submittable || submitting}
  >
    Legg til
  </button>
</ModalFooter>
