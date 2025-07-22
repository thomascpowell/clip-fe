<script lang="ts">
  export let options: string[] = [];
  export let selected: string = '';
  export let label: string = '';
</script>


<div>
  <p>{label}: </p>
  <select bind:value={selected}>
    {#each options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
</div>


<style>
  div {
    background-color: var(--bg2);
    border: .1em solid var(--border);
    color: var(--text2);
    display: flex;
    gap: 0.5em;
    padding: 0.5em;
    border-radius: 0.5em;
    align-items: center;
  }
</style>
