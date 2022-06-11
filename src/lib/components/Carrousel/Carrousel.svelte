<script>
  /* props */
  export let items = [] // *, array of carrousel items
  export let currentStep = 0
  export let loop = false
  export let autoplay = false
  export let noControls = false
  export let numPreviewedEachStep = 1
  export let className = '' // *, custom wrapper classes
  export let styleOptions = {}

  let autoplayInterval

  import List from '$lib/components/List/List.svelte'
  import Stepper from '$lib/components/Stepper/Stepper.svelte'
  import Button from '$lib/components/Button/Button.svelte'

  /* events */
  import { createEventDispatcher, onMount } from 'svelte/internal'
  const dispatch = createEventDispatcher()

  /* methods */
  let carrouselItems = []
  export const select = num => {
    currentStep = num
    if (!carrouselItems[currentStep]) return
    if (num == items.length - 1)
      setTimeout(() => {
        dispatch('complete')
      }, 500)
    else dispatch('rewatch')
  }

  export const next = () => {
    if (currentStep < items.length - numPreviewedEachStep) {
      select(currentStep + numPreviewedEachStep)
      dispatch('next')
    } else {
      dispatch('finish')
      if (loop) {
        select(0)
        dispatch('next')
      }
    }
    if (autoplay) {
      clearInterval(autoplayInterval)
      autoplayInterval = setInterval(next, 3000)
    }
  }
  export const prev = () => {
    if (currentStep < numPreviewedEachStep && loop) {
      select(items.length - numPreviewedEachStep)
      dispatch('prev')
    } else if (currentStep >= numPreviewedEachStep) {
      select(currentStep - numPreviewedEachStep)
      dispatch('prev')
    } else select(0)
    if (autoplay) {
      clearInterval(autoplayInterval)
      autoplayInterval = setInterval(next, 3000)
    }
  }

  if (autoplay) autoplayInterval = setInterval(next, 3000)

  $: select(currentStep)

  /* styles */
  import { stylus } from '$lib/helpers'
  import {
    carrouselWrapper,
    carrouselItem,
    carrouselControls,
    carrouselStepper,
    carrouselButtons,
    carrouselButton,
    carrousel,
  } from './styles'

  $: wrapper = stylus(carrouselWrapper(styleOptions))
  $: carr = stylus(carrousel(styleOptions))
  $: cItem = stylus(
    carrouselItem({ number: numPreviewedEachStep, ...styleOptions })
  )
  $: controls = stylus(carrouselControls(styleOptions))
  $: stepper = stylus(carrouselStepper(styleOptions))
  $: buttons = stylus(carrouselButtons(styleOptions))
  $: button = stylus(carrouselButton(styleOptions))

  onMount(() => {
    dispatch('rewatch')
  })
</script>

<div
  class={`${wrapper.classes} ${className} relative h-80 md:h-96 overflow-hidden`}
  style={wrapper.styles}
>
  <List
    {items}
    let:prop={item}
    let:index
    className={`${carr.classes} absolute top-4`}
    styles={carr.classes}
  >
    <div
      bind:this={carrouselItems[items.indexOf(item)]}
      class={cItem.classes}
    >
      <slot
        {item}
        previewed={index < currentStep + numPreviewedEachStep &&
          index >= currentStep}
      />
    </div>
  </List>
  {#if !noControls}
    <div
      class={`${controls.classes} absolute bottom-0 -translate-y-1/2 -translate-x-1/2 left-1/2`}
    >
      <Stepper
        direction="horizontal"
        steps={items.length}
        bind:active={currentStep}
        className={stepper.classes}
      />
      <div class={buttons.classes}>
        <Button
          icon="chevron_left"
          type="primary"
          reverse
          shape="icon"
          on:click={prev}
        />
        <Button
          icon="chevron_right"
          type="primary"
          shape="icon"
          on:click={next}
        />
      </div>
    </div>
  {/if}
</div>
