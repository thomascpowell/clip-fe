<script lang="ts">
  export let input: string = '';
  export let placeholder: string = '';
</script>

<input
  placeholder={placeholder}
  bind:value={input}
/>

<style>
</style>
