<script lang="ts">
  import SmallField from "../lib/SmallField.svelte"
  import { backend } from '../store/backend.ts';
  import { modal } from '../store/modal.ts';
  export let show: boolean = false
  $: show = $modal;
  const close = () => modal.set(false);
</script>

{#if show} 
  <div on:click={close} class="wrapper">
    <div on:click|stopPropagation class="inner">
      <p>Backend URL:</p>
      <SmallField style="width: 100%!important"   bind:value={$backend} content={$backend} placeholder="URL"/>
    </div>
  </div>
{/if}

<style>
  .wrapper {
    backdrop-filter: brightness(50%) blur(5px);
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  .inner {
    z-index: 2;
    width: clamp(0em, 100%, 30em);
    white-space: nowrap;
    padding: 2em;
    margin: 1em;
    border-radius: 0.5em;
    justify-content: start;
    align-items: baseline;
    background-color: var(--bg);
    border: .1em solid var(--border);
  }
</style>
