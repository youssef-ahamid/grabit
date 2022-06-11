<script>
  import Image from '$lib/components/Image/Image.svelte'
  import Preload from '../Preload/Preload.svelte'

  /* props */
  export let title = ''
  export let images = []
  export let image = {}
  export let reverse = false // *, true
  export let active = false // *, true
  export let className = '' // *, custom wrapper classes

  /* styles */
  import { config } from './styles'
  $: classes = config({ reverse, active })
</script>

<Preload src={image.url} />

<button
  class={`${classes.feature} ${className}`}
  on:focus
  on:click
  on:blur
>
  {#if images.length > 0}
    <div class={classes.left}>
      <Image {...images[0]} className={classes.image} />
    </div>
  {:else if !!image}
    <div
      class="w-full h-full opacity-100 rounded-2xl md:rounded-[60px] bg-gradient-to-t from-secondary z-20 absolute pointer-events-none transition duration-300 ease-out"
    />
    <Image {...image} className={classes.image} type="feature" />
  {/if}
  <div class={classes.right} on:click>
    <slot />
    <h4 class={classes.title}>{title}</h4>
    <div class={classes.content}>
      <div class={classes.description}>
        <slot name="description" />
      </div>
      <div class={classes.cta}><slot name="cta" /></div>
    </div>
  </div>
</button>
