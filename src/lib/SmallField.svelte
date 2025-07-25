<script lang="ts">
  export let value: string = '';
  export let placeholder: string = '';
</script>


<div>
  <input
    placeholder={placeholder}
    bind:value
  />
</div>

<style>
  div {
    min-width: 8em;
  }
  input {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: var(--bg2);
    border: .1em solid var(--border);
    display: flex;
    gap: 0.5em;
    padding: 0.5em;
    border-radius: 0.5em;
    align-items: center;
  }
</style>
