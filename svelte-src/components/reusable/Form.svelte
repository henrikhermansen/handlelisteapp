<script>
  import TopSticky from './TopSticky.svelte';
</script>

<style>
  .form {
    margin: 0 0 5px;
  }

  div :global(button) {
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, .05);
  }

  div :global(input) {
    margin-bottom: .5em;
  }
</style>

<TopSticky>
  <div class="form">
    <slot></slot>
  </div>
</TopSticky>
