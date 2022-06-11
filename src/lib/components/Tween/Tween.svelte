<svelte:options accessors />

<script>
  export let val
  export let duration = 500
  export let easing
  export let tweenedValue
  import { tweened } from 'svelte/motion'
  import { quartOut } from 'svelte/easing'

  const progress = tweened(0, {
    duration,
    easing: easing || quartOut,
  })

  export const set = decimal => progress.set(decimal)

  $: tweenedValue = Math.round(val * $progress)
</script>

{tweenedValue}
