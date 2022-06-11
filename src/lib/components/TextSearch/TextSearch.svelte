<script>
  export let className = ''
  export let path = ''
  export let query = ''
  export let api
  export let method = 'get'
  export let itemsKey = ''
  export let options = {}
  export let styleOptions = {}

  import List from '$lib/components/List/List.svelte'
  import TextInput from '$lib/components/Text Input/TextInput.svelte'

  let items = []
  export const get = async q => {
    if (method === 'get') items = await api.get(path + q, options)
    if (method === 'post') items = await api.post(path + q, options)

    if (itemsKey) items = items[itemsKey]
  }

  let selected = false
  $: selected ? null : get(query)

  const select = item => {
    query = item
    items = []
    selected = true
  }
  const deselect = () => (selected = false)

  /* styles */
  import { stylus } from '$lib/helpers'
  import {
    searchDropdownWrapper,
    searchDropdown,
    dropdownItem,
  } from './styles'

  $: wrapper = stylus(searchDropdownWrapper(styleOptions))
  $: dropdown = stylus(searchDropdown(styleOptions))
  $: result = stylus(dropdownItem(styleOptions))
</script>

<div class={wrapper}>
  <TextInput
    label="hamada"
    bind:value={query}
    on:change={deselect}
    className="z-50"
  />
  {#if !selected && !!query}
    <List bind:items let:item let:index className={dropdown.classes}>
      <p
        class={result.classes}
        on:click={() => {
          select(item)
        }}
      >
        {item}
      </p>
    </List>
  {/if}
</div>
