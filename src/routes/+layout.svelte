<script>
  import '../app.css'
  import { status } from '../store/status.ts';
  import Toast from "../lib/Toast.svelte"
</script>


<Toast res={$status}/>
<div class="inner">
  <slot />
</div>

