<svelte:options accessors />

<script>
  /* props */
  export let className = '' // *, custom wrapper classes
  export let label = '' // *, button text
  export let active = ''
  export let filters = [] // *, true
  export let styleOptions = {}

  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export const select = filter => (active = filter)
  $: active = active.toLowerCase()

  /* styles */
  import { stylus } from '$lib/helpers'
  import {
    filterTag,
    filterTagsContainer,
    activeTag,
    inactiveTag,
  } from './styles'

  $: tag = stylus(filterTag({ ...styleOptions }))
  $: selected = stylus(activeTag({ ...styleOptions }))
  $: notSelected = stylus(inactiveTag({ ...styleOptions }))
  $: wrapper = stylus(filterTagsContainer({ ...styleOptions }))
</script>

<div class="${wrapper.classes} ${className}">
  <!-- svelte-ignore component-name-lowercase -->
  {#each filters as filter}
    <button
      on:click={() => {
        active = filter.toLowerCase()
        dispatch('filter', filter.toLowerCase())
      }}
      class={`${tag.classes} ${
        active == filter ? selected.classes : notSelected.classes
      }`}
      style={tag.styles}
      type="button"
      data-text={label}
    >
      {filter}
    </button>
  {/each}
</div>
