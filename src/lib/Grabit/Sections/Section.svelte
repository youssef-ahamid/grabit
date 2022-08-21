<script>
  import { loading } from '$lib/stores'

  import { createEventDispatcher } from 'svelte'

  import { Sections } from './index'

  export let name
  export let data

  export let className = ''

  if (!name) name = data.identifier

  console.log({ name, data })

  if (data.content)
    data = {
      ...data.content,
      ...data,
    }

  delete data.content
  delete data.identifier

  const dispatch = createEventDispatcher()

  dispatch('loading')

  $loading.push(name)

  let section
  const resolve = Sections[name]().then(module => {
    $loading.filter(l => l != name)
    section = {
      this: module.default,
      className,
      ...data,
    }
    dispatch('load', section)
  })
</script>

{#if section}
  <svelte:component this={section.this} {...section} />
{/if}
