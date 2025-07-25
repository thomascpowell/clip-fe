<script lang="ts">
  import { modal } from '../store/modal.ts';
</script>

<div class="top">
  <p>[clip]</p>
  <span>
    <button on:click={() => modal.update(value => !value)}>[settings]</button>
    <a href="https://github.com/thomascpowell/clip-fe">[repo]</a>
    <a href="https://thomascpowell.com">[web]</a>
  </span>
</div>

<style>
  div {
    padding: 1em;
    width: 100%;
    height: min-content;
    display: flex;
    justify-content: space-between;
    position: fixed;
    color: var(--text);
    left: 0;
    right: 0;
  }
  .top {
    top: 0;
  }
  a, button {
    color: var(--text2);
    text-decoration: none;
  }
</style>
