<script lang="ts">
  // imports
  import Dropdown from "../lib/Dropdown.svelte"
  import LinkField from "../lib/LinkField.svelte"
  import SmallField from "../lib/SmallField.svelte"
  import OptionsButton from "../lib/OptionsButton.svelte"
  import { status } from '../store/status.ts';
  import { loading } from '../store/loading.ts';

  import { postJob } from "../api/post.ts"
  import { waitForVideo } from "../api/get.ts"
  import type { JobStatus, JobResponse } from "../api/types";

  // dropdown options
  const volumeOptions = ["0.0", "0.5", "1.0", "1.5", "2"];
  const formatOptions = ["mp4", "mp3", "wav"];

  // ui state
  let showOptions = false

  // job data
	let url = '';
	let format = 'mp4';
	let volumeScale = '1.0';
	let startTime = '';
	let endTime = '';

  // status info
	let jobId = '';
  let downloadUrl = ''

  async function handleSubmit() {
    loading.set(true);
    const postRes = await postJob({
      url,
      format,
      volumeScale,
      startTime,
      endTime
    });
    status.set({ message: postRes.message, error: postRes.error });
    if (!postRes.id) {
      loading.set(false);
      return
    }
    jobId = postRes.id;
    const statusRes = await waitForVideo(jobId);
    status.set({ message: statusRes.message, error: statusRes.error });
    if (!statusRes.url) {
      loading.set(false);
      return
    }
    downloadUrl = statusRes.url
    const a = document.createElement("a");
    a.href = "http://" + downloadUrl;
    a.download = "";
    a.click();
  }
</script>


<form on:submit|preventDefault={handleSubmit}>
  <LinkField bind:value={url} placeholder="URL"/>
  <div class="options">
    <OptionsButton bind:showOptions={showOptions} />
    {#if showOptions}
      <SmallField bind:value={startTime} placeholder="start time"/>
      <SmallField bind:value={endTime} placeholder="end time"/>
      <Dropdown
        label="volume"
        options={volumeOptions}
        bind:selected={volumeScale}
      />
      <Dropdown
        label="format"
        options={formatOptions}
        bind:selected={format}
      />
    {/if}
  </div>
  <button type="submit" style="display: none"></button>
</form>


<style>
  form {
    width: clamp(0em, 100%, 50em);
  }
  .options {
    height: 4em;
    display: grid;
    justify-content: start;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(0, max-content));
    gap: 1em;
    white-space: nowrap;
  }
</style>




