<script>
  import { Sections } from './index'

  export let name = ''
  export let data = {}

  export let className = ''

  if (!name) name = data.identifier
  if (!name) name = 'CTA'
  console.log({name, data})

  if (data.content)
    data = {
      ...data.content,
      ...data,
    }

  delete data.content
  delete data.identifier
</script>

{#if name}
  {#await Sections[name]() then module}
    <svelte:component this={module.default} {className} {...data} />
  {/await}
{/if}
