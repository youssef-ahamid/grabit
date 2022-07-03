<svelte:options accessors />

<script>
  export let active = false
  export let value = active
  $: value = active
  export let label = ''
  export let text = ''
  export let className = ''
  export let validations = []
  export let styleOptions = {}

  import { createEventDispatcher } from 'svelte/internal'
  const dispatch = createEventDispatcher()

  let clean = true
  let error = ''
  let checked = false

  $: checked? validate(active): null

  export const validate = (state = active) => {
    checked = true
    if (validations.includes('required')) {
      error = state? null : "This field is required"
      clean = state
    }
  }

  import { stylus } from '$lib/helpers'
  import { checkboxWrapper, checkboxInput } from './styles'

  $: wrapper = stylus(checkboxWrapper({ active, error, ...styleOptions }))
  $: checkbox = stylus(checkboxInput({ active, error, ...styleOptions }))

</script>

<label class="{wrapper.classes} {className}" >
  <input
    bind:checked={active}
    type="checkbox"
    name={label}
    class={checkbox.classes}
  />
  <p on:click={(active = !active)}>
    {text}
  </p>
  <slot />
</label>

