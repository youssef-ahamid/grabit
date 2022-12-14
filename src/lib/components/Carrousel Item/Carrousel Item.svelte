<script>
  /* props */
  export let thumbnail = {} // *, thumbnail component
  export let text = '' // *, body text
  export let videoUrl // *, video url
  export let title = '' // *, title text
  export let images = [] // *, logo/images url
  export let selected = false // *, selection state
  export let mobile = false // *, selection state
  export let remaining = 0 // *, carrousel steps to reach item
  export let className = '' // *, custom wrapper classes
  export let styleOptions = {}

  import Go from '$lib/components/Go/Go.svelte'
  import Button from '$lib/components/Button/Button.svelte'
  import Image from '$lib/components/Image/Image.svelte'
  import Arrow from '$lib/icons/arrow.svelte'

  $: previewed = remaining === 0

  /* events */
  import { createEventDispatcher } from 'svelte/internal'
  const dispatch = createEventDispatcher()

  /* methods */
  export const toggleSelected = isSelected => {
    // toggle/set selected state
    selected = isSelected || !selected
    if (selected) dispatch('select')
    else dispatch('deselect')
  }
  export const togglePreviewed = isPreviewed => {
    previewed = isPreviewed || !previewed // toggle/set previewed state
    if (previewed) dispatch('preview')
    else dispatch('depreview')
  }

  /* styles */
  import { stylus } from '$lib/helpers'
  import {
    carrouselWrapper,
    carrouselItemThumbnail,
    carrouselItemInfoContainer,
    carrouselItemLogos,
    carrouselItemLogo,
  } from './styles'

  $: wrapper = stylus(carrouselWrapper(styleOptions))
  $: thumb = stylus(carrouselItemThumbnail(styleOptions))
  $: infoContainer = stylus(carrouselItemInfoContainer(styleOptions))
  $: logos = stylus(carrouselItemLogos(styleOptions))
  $: logo = stylus(carrouselItemLogo(styleOptions))
</script>

<div class={`${wrapper.classes} ${className}`}>
  <Image {...thumbnail} {type} className={thumb.classes} />

  <div class={infoContainer.classes}>
    <div class={logos.classes}>
      {#if images.length > 0}
        {#each images as img}
          <img src={img.url} alt={title} class={logo.classes} />
        {/each}
      {/if}
    </div>

    <h2>{title}</h2>
    {#if !!text}
      <p>{text}</p>
    {/if}

    {#if videoUrl}
      <Go to={videoUrl} redirect className="mx-2.5">
        <Button
          shape="round"
          icon={Arrow}
          label="watch"
          className="-ml-2"
        />
      </Go>
    {/if}
  </div>
</div>
