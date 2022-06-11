<script>
  export let className = ''
  export let to = ''
  export let text = ''
  export let download = false
  export let redirect = false
  export let noList = false
  export let active = false
  export let sublinkOpen = false
  export let activeSub = 0
  export let links = []
  export let styleOptions = {}

  import Go from '$lib/components/Go/Go.svelte'
  import List from '$lib/components/List/List.svelte'

  import { slide } from 'svelte/transition'

  /* styles */
  import { stylus } from '$lib/helpers'
  import {
    navLinkWrapper,
    navSublinkList,
    navSublink,
    navSublinkActive,
    navSublinkInactive,
  } from './styles'
  import Button from '../Button/Button.svelte'
  import Chevron from '$lib/icons/shape/chevron.svelte'
  import ChevronRight from '$lib/icons/shape/chevron_right.svelte'
  import Arrow from '$lib/icons/shape/arrow.svelte'

  $: wrapper = stylus(navLinkWrapper({ active, ...styleOptions }))
  $: list = stylus(
    navSublinkList({ active, sublinkOpen, ...styleOptions })
  )
  $: sublink = stylus(navSublink({ active, ...styleOptions }))
</script>

<Go
  {to}
  {redirect}
  {download}
  on:click={() => {
    sublinkOpen = !sublinkOpen
  }}
>
  <p class={`${wrapper.classes} ${className}`}>
    {text}
    <slot />
    {#if links.length > 0 && !noList}
      <span class="chevron">
        <Chevron
          className="{sublinkOpen
            ? '-rotate-90'
            : 'rotate-90'} text-current w-7 ml-2"
        />
      </span>
    {/if}
  </p>

  {#if links.length > 0}
    <List items={links} let:prop={link} className={list.classes}>
      <Go {...link}>
        <p class={`${sublink.classes}`}>
          {link.text}
          <Arrow className="text-neutral-light w-5" />
        </p>
      </Go>
    </List>
  {/if}
</Go>
