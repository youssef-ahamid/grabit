<script>
  export let type = 'fade'
  export let delay = 0
  export let className = ''
  export let styles = ''
  export let noExit = false

  let element
  let intersecting = false

  import { inView } from '$lib/actions'

  import { createEventDispatcher } from 'svelte/internal'
  const dispatch = createEventDispatcher()

  const enter = () => {
    intersecting = true
    dispatch('enter')
  }

  const exit = () => {
    if (noExit) return

    intersecting = false
    dispatch('exit')
  }

  /* styles */
  import { stylus } from '$lib/helpers'
  import { animationWrapper } from './styles'

  $: wrapper = stylus(animationWrapper({ type, intersecting }))
</script>

<div
  use:inView={{ bottom: 20 }}
  style="{styles} {intersecting
    ? `transition-delay: ${delay}ms`
    : ''}"
  on:enter={enter}
  on:exit={exit}
  class={`${wrapper.classes} ${className}`}
>
  <slot />
</div>
