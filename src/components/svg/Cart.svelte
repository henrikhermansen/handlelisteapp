<script>
  import Svg from './Svg.svelte';

  export var fill;
</script>

<Svg fill={fill}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M10 19.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm3.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.937 13L0 6h16.812l-1.977 7H2.937zM14.17 8H3.008l1.259 3h9.056l.847-3zm5.635-5l-3.432 12H3.776l.839 2h13.239l3.474-12h1.929L24 3h-4.195z" />
  </svg>
</Svg>