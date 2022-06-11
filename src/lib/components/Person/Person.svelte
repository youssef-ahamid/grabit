<script>
  /* props */
  export let avatar = {}
  export let logo = {}
  export let name = ''
  export let caption = ''
  export let role = ''
  if (caption.length == 0 && !!role && role.length > 0) caption = role
  export let className = '' // *, custom wrapper classes
  export let styleOptions = {}

  /* styles */
  import { stylus } from '$lib/helpers'
  import Image from '../Image/Image.svelte'
  import { TextWrapper, PersonWrapper } from './styles'

  $: wrapper = stylus(PersonWrapper(styleOptions))
  $: textWrapper = stylus(TextWrapper(styleOptions))
</script>

<div class={`${wrapper.classes} ${className}`}>
  {#if !!avatar && (!!avatar.src || !!avatar.url)}
    <Image type="avatar" {...avatar} alt={name} />
  {:else if !!logo && (!!logo.src || !!logo.url)}
    <Image type="logo" size="sm" {...logo} alt={name} />
  {/if}
  <div class={textWrapper.classes}>
    <p class="body-sm md:one-liner font-bold">{name}</p>
    <p class="body-sm md:one-liner font-medium">{caption}</p>
  </div>
</div>
