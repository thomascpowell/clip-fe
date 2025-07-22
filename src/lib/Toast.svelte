<script lang="ts">
  import type { JobResponse } from "../api/post.ts";
  import CrossIcon from "../icons/CrossIcon.svelte"
  import CheckIcon from "../icons/CheckIcon.svelte"

  export let res: JobResponse = {} as JobResponse 
  let show = false
  let timer = 5000
  let timeoutHandle: number | undefined = undefined;

  $: if (res.message || res.error) {
    show = true;
    clearTimeout(timeoutHandle);
    timeoutHandle = setTimeout(() => {
      show = false;
    }, timer);  
  }
  $: Icon = res.error ? CrossIcon : CheckIcon;
  $: message = res.message || "" + res.error || ""
</script>


{#if show}
  <div>
    <Icon style="transform: scale(1.5)" />
    <p>{message}</p>
  </div>
{/if}


<style>
  div {
    position: fixed;
    bottom: 1em;
    right: 1em;
    background-color: var(--bg2);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    padding: 1em; 
    border-radius: 0.5em;
  }
  p {
    width: 100%;
  }
</style>




