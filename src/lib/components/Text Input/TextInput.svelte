<svelte:options accessors />

<script>
  /* helpers */
  import {assert} from "$lib/validate";
  /* props */
  export let type = 'text' // *, text area
  export let trim = false // *, true
  export let validations = [] // *, array of validation objects
  export let validation = false;
  export let validateOnChange = false // *, true
  export let className = '' // *, custom wrapper classes
  export let label = '' // *, label text
  export let placeholder = '' // *, placeholder text
  export let cta = {}
  export let value = '' // *, bound value
  export let styleOptions = {}

  /* data */
  $: validation = assert(validations, value)
  $: value = trim ? value.trim() : value
  let clean = true
  let err = ''
  export const validate = () => {
    clean = validation.success
    err = clean ? '' : validation.message
    if (clean) valid()
    else invalid()
  }

  /* styles */
  import { stylus } from '$lib/helpers'
  import {
    textInputWrapper,
    textInput,
    textInputName,
    textInputError,
    textInputCTA,
  } from './styles'

  $: lbl = stylus(textInputWrapper({ type, clean, ...styleOptions }))
  $: input = stylus(textInput({ type, clean, ...styleOptions }))
  $: name = stylus(textInputName({ type, clean, ...styleOptions }))
  $: error = stylus(textInputError({ type, clean, ...styleOptions }))
  $: CTA = stylus(textInputCTA({ type, clean, ...styleOptions }))

  /* transitions */
  import { scale, slide } from 'svelte/transition'

  /* events */
  import { createEventDispatcher } from 'svelte/internal'
  import Button from '$lib/components/Button/Button.svelte'
  const dispatch = createEventDispatcher()
  const valid = () => dispatch('valid', value)
  const invalid = () => dispatch('invalid', value)
  const blur = () => {
    validate()
    dispatch('blur', value)
  }
  const focus = () => dispatch('focus', value)
  const submit = () => dispatch('submit', value)
  const change = () => {
    if (validateOnChange) validate()
    dispatch('change', value)
  }
</script>

<label for={label} class={`${lbl.classes} + ${className}`}>
  <p class={name.classes}>
    {label}
    {#if validations && validations
        .map(_ => _.type)
        .includes('required')}
      *
    {/if}
  </p>
  {#if type === 'text'}
    <input id={label}
      bind:value
      {placeholder}
      name={label}
      class={input.classes}
      on:focus={focus}
      on:input={change}
      on:change={change}
      on:blur={blur}
    />
  {:else if type === 'text area'}
    <textarea
      bind:value
      {placeholder}
      name={label}
      class={input.classes}
      on:input={change}
      on:focus={focus}
      on:blur={blur}></textarea>
  {/if}
  {#key clean}
    {#if !!cta.type && clean}
      <div
        transition:scale={{ duration: 300 }}
        class="absolute top-1/2 -translate-y-1/2 right-1"
      >
        <Button {...cta} className={CTA.classes} on:click={submit} />
      </div>
    {/if}
    {#if !clean}
      <p transition:slide={{ duration: 300 }} class={error.classes}>
        {err}
      </p>
    {/if}
  {/key}
</label>
