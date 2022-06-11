<script>
  /* props */
  export let fullHeight = false // *, true
  export let reverse = false // *, true
  export let className = '' // *, custom wrapper classes

  import Go from '$lib/components/Go/Go.svelte'
  import Animateonenterview from '../Animate On Enter View/animate on enter view.svelte'

  /* styles */
  import { config } from './styles'
  $: classes = config({ fullHeight, reverse })
</script>

<div class={`${classes.hero} ${className}`}>
  {#if $$slots.cta}
    <div class={classes.cta}>
      <slot name="cta" />
    </div>
  {/if}
  {#if $$slots.left}
    <div class={classes.left}>
      <slot name="left" />
    </div>
  {/if}
  <slot />
  {#if $$slots.right}
    <div class={classes.right}>
      <slot name="right" />
    </div>
  {/if}
</div>
