<script>
  export let className = ''
  export let steps = []
  export let current = 0

  import Go from '$lib/components/Go/Go.svelte'

  $: current === steps.length ? (current = current - 1) : ''
  $: nextStep = `#${steps[current + 1]}`
</script>

<Go bind:to={nextStep}>
  <slot />
</Go>
