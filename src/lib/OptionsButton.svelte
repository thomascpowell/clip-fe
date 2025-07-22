<script lang="ts">
  import ChevronRight from "../icons/ChevronRight.svelte"
  export let showOptions: boolean = false
</script>


<button class="optionsButton" type="button" on:click={() => showOptions = !showOptions}>
  <span>{showOptions ? "show less" : "show more"}</span>
  <ChevronRight/>
</button>


<style>
  button {
    display: flex;
    align-items: center;
    display: flex;
    width: min-content;
    height: min-content;
    color: var(--text2);
  }
  span {
    margin-bottom: 0.1em; /*terrible*/
    align-items: center;
    display: flex;
  }
</style>


