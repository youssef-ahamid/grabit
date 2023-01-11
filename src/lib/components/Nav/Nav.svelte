<script>
  import { logo } from '$lib/config'
  import Go from '../Go/Go.svelte'
</script>

<div
  class="w-full absolute top-0 inset-x-o  z-[999]"
>
  <div class="flex px-4 justify-between items-center">
    <Go to="/">
      <img {...logo} class="w-24" />
    </Go>
  </div>
</div>
