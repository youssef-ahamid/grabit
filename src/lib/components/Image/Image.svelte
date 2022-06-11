<script>
  /* props */
  export let styleOptions = {}
  export let src = ''
  export let url = ''
  export let type = ''

  if (src.length == 0 && url.length > 0) src = url

  export let alt = ''
  export let clip = false
  export let className = '' // *, custom wrapper classes

  /* styles */
  import { stylus } from '$lib/helpers'
  import Preload from '../Preload/Preload.svelte'
  import { imgWrapper, imgOverlay, img } from './styles'

  $: wrapper = stylus(imgWrapper({ type, ...styleOptions }))
  $: overlay = stylus(imgOverlay({ type, src, ...styleOptions }))
  $: image = stylus(img({ type, ...styleOptions }))
</script>

<Preload {src} />

<div class={`${wrapper.classes} ${className}`} style={wrapper.styles}>
  <!-- svelte-ignore component-name-lowercase -->
  <img {src} {alt} class={image.classes} style={image.styles} />
  {#if !!clip}
    <svelte:component this={clip} className={overlay.classes} />
  {:else}
    <div class={overlay.classes} style={overlay.styles} />
  {/if}
</div>
