<script>
</script>

<style>
  .list :global(>div) {
    transition: background-color .3s ease-out;
  }

  .list :global(>div:nth-child(even)) {
    background-color: var(--gray-white);
  }

  .list :global(>div:nth-child(odd)) {
    background-color: var(--light-gray);
  }
</style>

<div class="list">
  <slot></slot>
</div>