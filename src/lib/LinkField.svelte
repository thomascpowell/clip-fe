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
  div {
    display: flex;
    gap: 0.5em;
    align-items: center;
    background-color: var(--bg2);
    border-radius: 0.5em;
    padding: 0.5em;
  }
  div:focus-within {
    border-color: Highlight;
    outline: 1px auto Highlight;
  }
  input {
    width: 100%;
  }
  input:focus {
    outline: none;
    box-shadow: none;
  }

</style>
