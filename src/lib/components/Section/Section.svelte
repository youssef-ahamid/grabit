<svelte:options accessors={true} />

<script>
  export let className = ''
  export let title = ''
  export let text = ''
  export let boldDescription = false
  export let button = null
  export let identifier = title
  export let backgroundColor = ''
  export let textColor = ''
  export let backgroundImage = ''
  export let layout = 'default'
  export let contentLayout = 'default'
  export let gradient = ''
  export let noContain = false
  export let fullHeight = false
  export let content = {}

  import { getComponentData, stylus } from '$lib/helpers'
  export const get = key => {
    return getComponentData(content, key)
  }

  import { inView } from '$lib/actions'

  import { createEventDispatcher } from 'svelte/internal'
  const dispatch = createEventDispatcher()

  const enter = () => {
    dispatch('enter')
  }

  import Title from '$lib/components/Title/Title.svelte'
  import Go from '$lib/components/Go/Go.svelte'
  import Button from '$lib/components/Button/Button.svelte'

  /* styles */
  import {
    section,
    mainContent,
    slotContent,
    ctaContainer,
    textContent,
  } from './styles'
  import Animateonenterview from '../Animate On Enter View/animate on enter view.svelte'
  $: wrapper = stylus(
    section({
      backgroundColor,
      textColor,
      backgroundImage,
      gradient,
      noContain,
      fullHeight,
      layout,
    })
  )
  $: content = stylus(
    mainContent({
      layout,
      textColor,
    })
  )
  $: slot_content = stylus(
    slotContent({
      layout,
      contentLayout,
    })
  )
  $: cta_container = stylus(
    ctaContainer({
      layout,
    })
  )
  $: text_content = stylus(
    textContent({
      layout,
      boldDescription,
    })
  )

  let height = 0
</script>

<svelte:window bind:innerHeight={height} />

<!-- svelte-ignore component-name-lowercase -->
<section
  use:inView={{ bottom: height }}
  on:enter={enter}
  class={`${wrapper.classes} ${className}`}
  style={wrapper.styles}
  id={identifier}
>
  <div class={content.classes}>
    <Animateonenterview type="flyRight">
      <Title
        {layout}
        lineColor={backgroundColor == 'neutral' ||
        backgroundColor == 'neutralLight'
          ? 'brand'
          : 'current'}
        line={title.length > 0}>{title}</Title
      >
    </Animateonenterview>
    {#if !!text}
      <Animateonenterview type="flyRight" delay={200}>
        <p class={text_content.classes}>{text}</p>
      </Animateonenterview>
    {/if}
    {#if button}
      <Animateonenterview type="flyUp" delay={600}>
        <div class={cta_container.classes}>
          <Go to={button.link}>
            <Button
              label={button.label}
              type={button.type}
              shape={button.shape}
              icon={button.icon}
              reverse={button.reverse}
              className={button.className}
            />
          </Go>
        </div>
      </Animateonenterview>
    {/if}
  </div>
  <div class={slot_content.classes}>
    <slot {get} {layout} />
  </div>
</section>
