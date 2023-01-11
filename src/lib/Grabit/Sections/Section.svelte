<script>
  import Sections from './index'

  export let data
  export let className = ''

  const component = Sections[data.identifier]

  if (data.content) {
    data = {
      ...data.content,
      ...data,
    }
    delete data.content
  }

  delete data.identifier
</script>

<svelte:component this={component} {...data} {className} />
