<script>
  export let value;
  export let placeholder;
  export let selection;

  let showSelection = true; // flip me
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
        background: red;
    }

    button {
        display: block;
    }
</style>

<div class="outer">
    <input
            type="text"
            placeholder={placeholder}
            bind:value
            on:focus={() => { showSelection = true; }}
            on:blur={() => { showSelection = false; }}
    />
    {#if showSelection}
    <div class="selection">
        {#each Object.entries(selection) as [key, {name}] (key)}
        <button on:click={() => { value = name; }}>{name}</button>
        {/each}
    </div>
    {/if}
</div>
