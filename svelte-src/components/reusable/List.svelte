<script>
</script>

<style>
  .list :global(>div:nth-child(even)) {
    background: var(--gray-white);
  }

  .list :global(>div:nth-child(odd)) {
    background: var(--light-gray);
  }
</style>

<div class="list">
  <slot></slot>
</div>