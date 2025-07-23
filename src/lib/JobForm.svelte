<script lang="ts">
  // imports
  import Dropdown from "../lib/Dropdown.svelte"
  import LinkField from "../lib/LinkField.svelte"
  import SmallField from "../lib/SmallField.svelte"
  import OptionsButton from "../lib/OptionsButton.svelte"
  import Toast from "../lib/Toast.svelte"

  import { postJob } from "../api/post.ts"
  import { waitForVideo } from "../api/get.ts"
  import type { JobRequest, JobStatus, JobResponse } from "../api/types";

  // dropdown options
  const volumeOptions = ["0.0", "0.5", "1.0", "1.5", "2"];
  const formatOptions = ["mp4", "mp3", "wav"];

  // ui state
  let showOptions = false
  let loading = false

  // job data
	let url = '';
	let format = 'mp4';
	let volumeScale = '1.0';
	let startTime = '';
	let endTime = '';

  // status info
	let jobId = '';
  let downloadUrl = ''
  let latestRes: JobResponse | JobStatus = {}

  async function handleSubmit() {
    loading = true;
    const postRes = await postJob({
      url,
      format,
      volumeScale,
      startTime,
      endTime
    });
    latestRes = postRes;
    if (!postRes.id) {
      loading = false;
      return
    }
    jobId = postRes.id;
    const statusRes = await waitForVideo(jobId);
    latestRes = statusRes;
    if (!statusRes.url) {
      loading = false;
      return
    }
    downloadUrl = statusRes.url
    const a = document.createElement("a");
    a.href = "http://" + downloadUrl;
    a.download = "";
    a.click();
  }
</script>


<Toast res={latestRes} />
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




