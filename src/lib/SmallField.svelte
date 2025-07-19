<script lang="ts">
  export let value: string = '';
  export let placeholder: string = '';
</script>

<input
  placeholder={placeholder}
  bind:value
/>

<style>
</style>
