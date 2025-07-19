<script lang="ts">
  export let url: string = '';
  export let placeholder: string = '';
  import Icon from "../icons/LinkIcon.svelte"
</script>

<div>
  <Icon/>
  <input
    placeholder={placeholder}
    bind:value={url}
  />
</div>

<style>
</style>
