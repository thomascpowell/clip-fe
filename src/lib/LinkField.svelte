<script lang="ts">
  export let value: string = '';
  export let placeholder: string = '';
  import Icon from "../icons/LinkIcon.svelte"
</script>

<div>
  <Icon style="transform: scale(1.3)"/>
  <input
    placeholder={placeholder}
    bind:value
  />
</div>

<style>
  div {
    width: 100%;
    display: flex;
    gap: 0.5em;
    align-items: center;
    background-color: var(--bg2);
    border-radius: 0.5em;
    padding: 1em;
    border: .1em solid var(--border);
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
