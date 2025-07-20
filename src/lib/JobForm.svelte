<script lang="ts">
  // imports
  import Dropdown from "../lib/Dropdown.svelte"
  import LinkField from "../lib/LinkField.svelte"
  import SmallField from "../lib/SmallField.svelte"
  import Toast from "../lib/Toast.svelte"
  import ChevronRight from "../icons/ChevronRight.svelte"
  import ChevronLeft from "../icons/ChevronLeft.svelte"

  import { postJob } from "../api/post.ts"
  import type { JobRequest, JobResponse } from "../api/post.ts";

  // dropdown options
  const volumeOptions = ["0.0", "0.5", "1.0", "1.5", "2"];
  const formatOptions = ["mp4", "mp3", "wav"];

  // state
  let showOptions = false

  // job data
	let url = '';
	let format = 'mp4';
	let volumeScale = '1.0';
	let startTime = '';
	let endTime = '';

  // status info
	let jobId = '';
  let latestRes: JobResponse = {}

  async function submit_job() {
    const data: JobRequest = {
      url,
      format,
      volumeScale,
      startTime,
      endTime
    };
    const res: JobResponse = await postJob(data);
    console.log(res)
    latestRes = res
    jobId = res.id || '';
  }
</script>

<Toast res={latestRes} />

<form on:submit|preventDefault={submit_job}>

  <LinkField bind:value={url} placeholder="input link here"/>
  <div class="options">
    <button class="optionsButton" on:click={() => showOptions = !showOptions}>{showOptions ? "show less" : "show more"}<ChevronRight/></button>
    {#if showOptions}
      <SmallField bind:value={startTime} placeholder="start time"/>
      <SmallField bind:value={endTime} placeholder="end time"/>
      <Dropdown
        label="volume scale"
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

<p>values: {url}, {startTime} - {endTime}, {format}</p>

<style>

  form {
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 1em;
  }

  .options {
    gap: 1em;
    display: flex;
    white-space: nowrap;
  }

  .optionsButton {
    color: var(--text2);
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>




