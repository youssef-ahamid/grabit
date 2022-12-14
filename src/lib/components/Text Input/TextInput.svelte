<svelte:options accessors />

<script>
  /* helpers */
  import { assert } from '$lib/validate'
  /* props */
  export let type = 'text' // *, text area, date
  export let trim = false // *, true
  export let validations = [] // *, array of validation objects
  export let validation = false
  export let validateOnChange = false // *, true
  export let className = '' // *, custom wrapper classes
  export let label = '' // *, label text
  export let placeholder = '' // *, placeholder text
  export let cta = {}
  export let value = '' // *, bound value
  export let options = []
  export let styleOptions = {}

  /* data */
  $: validation = assert(validations, value)
  $: value = trim ? value.trim() : value
  let clean = true
  export let error = ''
  export const validate = () => {
    clean = validation.success
    error = clean ? '' : validation.message
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

  let focused = false
  $: empty = !!!value

  $: lbl = stylus(textInputWrapper({ type, clean, ...styleOptions }))
  $: input = stylus(textInput({ type, clean, ...styleOptions }))
  $: name = stylus(
    textInputName({
      type,
      clean,
      focus: focused,
      empty,
      ...styleOptions,
    })
  )
  $: errorStyles = stylus(
    textInputError({ type, clean, ...styleOptions })
  )
  $: CTA = stylus(textInputCTA({ type, clean, ...styleOptions }))

  /* transitions */
  import { scale, slide } from 'svelte/transition'

  /* events */
  import { createEventDispatcher } from 'svelte/internal'
  import Button from '$lib/components/Button/Button.svelte'
  import Chevron from '$lib/icons/shape/chevron.svelte'
  const dispatch = createEventDispatcher()
  const valid = () => dispatch('valid', value)
  const invalid = () => dispatch('invalid', value)
  const blur = () => {
    focused = false
    validate()
    dispatch('blur', value)
  }
  const focus = () => {
    focused = true
    dispatch('focus', value)
  }
  const submit = () => dispatch('submit', value)
  const change = () => {
    if (validateOnChange) validate()
    dispatch('change', value)
  }
</script>

<label for={label} class={`${lbl.classes} + ${className}`}>
  <p class={name.classes}>
    {label}
    {#if validations && validations.includes('required')}
      <span transition:scale class="inline-block">*</span>
    {/if}
  </p>
  {#if type === 'text'}
    <input
      id={label}
      bind:value
      {placeholder}
      type="text"
      name={label}
      class={input.classes}
      on:focus={focus}
      on:input={change}
      on:change={change}
      on:blur={blur}
    />
  {:else if type === 'email'}
    <input
      id={label}
      bind:value
      {placeholder}
      type="email"
      name={label}
      class={input.classes}
      on:focus={focus}
      on:input={change}
      on:change={change}
      on:blur={blur}
    />
  {:else if type === 'slotted'}
    <slot {value} />
  {:else if type === 'dropdown'}
    <select
      bind:value
      {placeholder}
      name={label}
      class={input.classes}
      on:focus={focus}
      on:input={change}
      on:change={change}
      on:blur={blur}
    >
      {#each options as option}
        <option value={option}>
          {option}
        </option>
      {/each}
    </select>
    <Chevron
      className="absolute right-4 top-1/2 text-brand w-6 md:w-8 rotate-90 peer-focus:-rotate-90"
    />
  {:else if type === 'date'}
    <input
      id={label}
      bind:value
      {placeholder}
      type="date"
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
      on:blur={blur}
    />
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
      <p
        transition:slide={{ duration: 300 }}
        class={errorStyles.classes}
      >
        {error}
      </p>
    {/if}
  {/key}
</label>
