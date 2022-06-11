<script>
  import Button from '../Button/Button.svelte'
  import Go from '../Go/Go.svelte'
  import Image from '../Image/Image.svelte'
  import Preload from '../Preload/Preload.svelte'

  export let className = ''
  export let preheader = ''
  export let title = ''
  export let description = ''
  export let clients = []
  export let image = {}

  if (!image) image = {}

  export let services = []
  export let type = []
  export let reverse = false
  export let shortAndSweet = false

  export let additionalImageData = {}
  export let cta = {}

  if (!preheader && Array.isArray(type))
    preheader = type.join('  ●  ')
  else if (!!type && !Array.isArray(type)) preheader = type

  export let color = 'secondary'

  //   /* styles */
  //   import { stylus } from '$lib/helpers'
  //   import { imgWrapper, imgOverlay, img } from './styles'

  //   $: wrapper = stylus(imgWrapper(styleOptions))
  //   $: overlay = stylus(imgOverlay({ src, ...styleOptions }))
  //   $: image = stylus(img(styleOptions))
</script>

<div
  class="my-6 md:my-20 w-full flex flex-wrap lg:flex-nowrap items-center justify-between text-{color} {className} {reverse
    ? 'flex-row-reverse'
    : ''}"
>
  <div
    class="w-full min-w-fit {image.url || image.src
      ? 'md:w-[47%] md:min-w-min'
      : 'md:w-[70%] md:min-w-fit'} px-8"
  >
    <h3
      class="uppercase {color == 'secondary'
        ? 'text-primary'
        : 'text-neutral-light'}"
    >
      {preheader}
    </h3>
    <h2 class="capitalize">{title}</h2>
    <p
      class="max-w-[64ch] mt-3 md:mt-6 {shortAndSweet
        ? 'line-clamp-4'
        : ''}"
    >
      {description}
    </p>
    {#if !!cta.label}
      <Go
        to={cta.link}
        className="{color == 'secondary'
          ? 'text-primary'
          : 'text-neutral-light'} mt-5 md:mt-10 block"
      >
        <Button {...cta} />
      </Go>
    {/if}
  </div>

  {#if !!image.url || !!image.src}
    <Preload src={image.url || image.src} />
    <div class="w-full md:w-[47%]" {title}>
      <Go to={cta.link}>
        <Image {...image} {...additionalImageData} />
      </Go>
    </div>
  {/if}
</div>
