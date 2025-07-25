<script>
  import '../app.css'
  import { status } from '../store/status.ts';
  import { modal } from '../store/modal.ts';
  import Toast from "../lib/Toast.svelte"
  import Modal from "../lib/Modal.svelte"
</script>

<Modal bind:show={$modal}/>
<Toast res={$status}/>
<div class="inner">
  <slot />
</div>

