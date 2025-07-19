<script lang="ts">
  export let options: string[] = [];
  export let selected: string = '';
  export let label: string = '';
</script>

<label>
  {label}
  <select bind:value={selected}>
    {#each options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
</label>

<style>
</style>
