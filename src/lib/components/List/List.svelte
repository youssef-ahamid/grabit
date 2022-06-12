<script>
  /* props */
  export let items = [] // *, list items
  if (!items || items.length == 0) items = []

  export let className = '' // *, custom wrapper classes
  export let styleOptions = {}
  export let horizontal = false // *, true
  export let grid = null // *, true
  export let type = "none" // *, true

  /* styles */
  import { stylus } from '$lib/helpers'
  import { list, listItem } from './styles'

  $: wrapper = stylus(list({ horizontal, grid, type, ...styleOptions }))
  $: list_item = stylus(listItem({ horizontal, grid, type, ...styleOptions }))
</script>

<ul
  class={`${wrapper.classes} ${className}`}
  style={wrapper.styles}
  on:scroll
>
  {#each items as item, index}
    <li class={list_item.classes}>
      <slot {item} {index} />
    </li>
  {/each}
</ul>
