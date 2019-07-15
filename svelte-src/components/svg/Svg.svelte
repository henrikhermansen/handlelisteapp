<script>
  export let fill;

  $: cssClass = `svg ${fill}`;
</script>

<style>
  .quick-silver :global(svg) {
    fill: var(--quick-silver);
  }
  .white :global(svg) {
    fill: var(--white);
  }
  .light-gray :global(svg) {
    fill: var(--light-gray);
  }
  .grass :global(svg) {
    fill: var(--grass);
  }
  .black :global(svg) {
    fill: var(--black);
  }
  .silver :global(svg) {
    fill: var(--silver);
  }
  .cool-green :global(svg) {
    fill: var(--cool-green);
  }
  .dark-green :global(svg) {
    fill: var(--dark-green);
  }
  .dark-red :global(svg) {
    fill: var(--dark-red);
  }
</style>

<div class={cssClass}>
  <slot></slot>
</div>
