<svelte:options accessors={true} />

<script>
  export let className = ''
  export let styleOptions = {}
  export let items = []

  import Chevron from '$lib/icons/shape/chevron.svelte'
  import List from '../List/List.svelte'
  import Card from '../Card/Card.svelte'
  import { slide } from 'svelte/transition'

  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let open = 0

  export const select = i => {
    open = i
    dispatch('select', items[i])
  }

  $: select(open)

  /* styles */
  import { stylus } from '$lib/helpers'
  import {
    accordian,
    accordianItem,
    accordianItemContent,
    accordianItemTitleWrapper,
  } from './styles'

  $: wrapper = stylus(accordian(styleOptions))
  $: content = stylus(accordianItemContent(styleOptions))
  $: itemWrapper = stylus(accordianItem(styleOptions))
  $: titleWrapper = stylus(accordianItemTitleWrapper(styleOptions))
</script>

<List
  {items}
  let:item
  let:index
  className={`${wrapper.classes} ${className}`}
>
  <Card
    type="primary"
    className={itemWrapper.classes}
    on:click={() => {
      select(index)
    }}
  >
    <div class={titleWrapper.classes}>
      <h4>{item.title}</h4>
      <Chevron
        className="{open === index
          ? '-rotate-90'
          : 'rotate-90'} text-current w-7 max-w-[3rem] ml-2"
      />
    </div>
    {#if open === index}
      <div
        transition:slide={{ duration: 300 }}
        class={content.classes}
      >
        <p>{item.content}</p>
      </div>
    {/if}
  </Card>
</List>
