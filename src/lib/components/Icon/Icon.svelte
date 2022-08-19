<script>
  import { resolve } from '$lib/icons'
  export let name = ''
  export let className = ''
</script>

{#await resolve[name]() then module}
  <svelte:component this={module.default} {className} />
{/await}
