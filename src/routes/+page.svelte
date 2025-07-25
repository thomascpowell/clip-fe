<script lang="ts">
  import JobForm from "../lib/JobForm.svelte"
  import Nav from "../lib/Nav.svelte"
  import { loading } from '../store/loading.ts';
</script>

<Nav/>
{#if !$loading}
  <JobForm/>
{/if}
