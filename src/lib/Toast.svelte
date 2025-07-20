<script lang="ts">
  import type { JobResponse } from "../api/post.ts";

  import CrossIcon from "../icons/CrossIcon.svelte"
  import CheckIcon from "../icons/CheckIcon.svelte"

  export let res: JobResponse = {} 

  $: Icon = res.error ? CrossIcon : CheckIcon;
  $: message = res.message || ""
</script>

<div>
  <Icon style="transform: scale(1.5)" />
  <p>{message}</p>
</div>

<style>
  div {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    width: 20em;
    height: 3em;
    background-color: var(--bg2);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    padding: 0.5em 1em; 
    border-radius: 0.5em;
  }
  p {
    width: 100%;
  }
  .icon {
    transform: scale(2);
  }
</style>




