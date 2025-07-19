<script lang="ts">
  // imports
  import Dropdown from "../lib/Dropdown.svelte"

  // volume options
  const volumeOptions = ["0.0", "0.5", "1.0", "1.5", "2"];

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



<p>clip</p>
<button on:click={submit_job}>send job</button>
<p>volume scale: {volumeScale}</p>
<Dropdown
  label="volume scale"
  options={volumeOptions}
  bind:selected={volumeScale}
/>


