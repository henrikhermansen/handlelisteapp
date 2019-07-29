<script>
  export let fill;

  $: cssClass = `svg ${fill}`;
</script>

<style>
  .svg :global(svg) {
    transition: fill var(--easing-visual), opacity var(--easing-visual);
  }

  .quick-silver :global(svg) {
    fill: var(--quick-silver);
  }
  .white :global(svg) {
    fill: var(--white);
  }
  .light-gray :global(svg) {
    fill: var(--light-gray);
  }
  .gray-white :global(svg) {
    fill: var(--gray-white);
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
  .cool-red :global(svg) {
    fill: var(--cool-red);
  }
  .charcoal :global(svg) {
    fill: var(--charcoal);
  }
</style>

<div class={cssClass}>
  <slot></slot>
</div>
