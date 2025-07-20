<script lang="ts">
  // imports
  import Dropdown from "../lib/Dropdown.svelte"
  import LinkField from "../lib/LinkField.svelte"
  import SmallField from "../lib/SmallField.svelte"
  import { postJob } from "../api/post.ts"
  import type { JobRequest } from "../api/post.ts";

  // dropdown options
  const volumeOptions = ["0.0", "0.5", "1.0", "1.5", "2"];
  const formatOptions = ["mp4", "mp3", "wav"];

  // job data
	let url = '';
	let format = 'mp4';
	let volumeScale = '1.0';
	let startTime = '';
	let endTime = '';

  // status info
	let status = ''; 
	let jobId = '';
  
  async function submit_job() {
    status = "submitting"

    const data: JobRequest = {
      url,
      format,
      volumeScale,
      startTime,
      endTime
    };

    const res = await postJob(data);
    console.log(res);

    if (res.error) {
      status = res.error;
      return;
    }

    status = res.message || "job submitted";
    jobId = res.id || '';
  }
</script>


<form on:submit|preventDefault={submit_job}>
  <LinkField bind:value={url} placeholder="input link here"/>
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
  <button type="submit" style="display: none;"></button>
</form>

<p>status: {status}</p>
<p>value: {url}, {startTime} - {endTime}, {format}</p>






