<script lang="ts">
  // imports
  import Dropdown from "../lib/Dropdown.svelte"
  import LinkField from "../lib/LinkField.svelte"
  import SmallField from "../lib/SmallField.svelte"

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
		const data = {
			url,
			format,
			volumeScale,
			startTime,
			endTime
		};
    const res = await fetch('http://localhost:8080/videos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });     
    const json = await res.json(); 
    if (!res.ok) {
      status = json.error || "unknown error";
      return;
    }
    status = json.message;
    jobId = json.id;
  }
</script>


<form on:submit|preventDefault={submit_job}>
  <LinkField bind:url={url} placeholder="input link here"/>
  <SmallField bind:input={startTime} placeholder="start time"/>
  <SmallField bind:input={endTime} placeholder="end time"/>
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
</form>







