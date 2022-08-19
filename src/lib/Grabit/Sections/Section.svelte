<script>
  import { Sections } from './index'

  export let name = ''
  export let data = {}

  export let className = ''

  if (data.content)
    data = {
      ...data.content,
      ...data,
    }

  delete data.content
  delete data.identifier
</script>

{#await Sections[name]() then module}
  <svelte:component this={module.default} {className} {...data} />
{/await}
