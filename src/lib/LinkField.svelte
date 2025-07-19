<script lang="ts">
  export let value: string = '';
  export let placeholder: string = '';
  import Icon from "../icons/LinkIcon.svelte"
</script>

<div>
  <Icon/>
  <input
    placeholder={placeholder}
    bind:value
  />
</div>

<style>
</style>
