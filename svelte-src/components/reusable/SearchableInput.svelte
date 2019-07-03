<script>
  export let value;
  export let placeholder;
  export let selection;

  $: suggestions = Object.entries(selection)
      .filter(([_, { name }]) => name.toLowerCase().includes(value.toLowerCase()));

  let inputNode;
  let visibleSelection = false;
  const showSelection = () => {
    visibleSelection = true;
  };
  const hideSelection = () => {
    visibleSelection = false;
  };
  const selectItem = name => () => {
    value = name;
    hideSelection();
  };
</script>

<style>
  .outer {
    position: relative;
  }

  .selection {
    position: absolute;
    left: 0;
    right: 0;
    top: 2.3em;
    z-index: 10;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .1);
    border-radius: 2px;
    max-height: calc(3em * 6.2);
    overflow: scroll;
  }

  button {
    display: block;
    width: 100%;
    text-align: left;
    background: #ffffff;
    border: 0;
    padding: 0 1em;
    cursor: pointer;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
    height: 3em;
  }

  button:last-of-type {
    border-bottom: 0;
  }

  button:hover {
    background: #e9f9e1;
    border-color: rgba(0, 0, 0, .1) !important;
  }
</style>

<div class="outer">
  <input
      type="text"
      placeholder={placeholder}
      bind:value
      bind:this={inputNode}
      on:focus={showSelection}
      on:input={showSelection}
      on:blur={hideSelection}
  />
    {#if visibleSelection && value}
<div class="selection">
{#each suggestions as [key, {name}] (key)}
  <button on:mousedown={selectItem(name)}>{name}</button>
{/each}
</div>
    {/if}
</div>
