<script>
  /* props */
  export let to = '' // *, url
  export let download = null // *, true
  export let redirect = false // *, true
  export let className = '' // *, custom wrapper classes

  /* styles */
  import { config } from './styles'
  let classes = config()
</script>

{#if !!download}
  <a
    on:click
    {download}
    href={to}
    class={`${classes.link} ${className}`}
  >
    <slot />
  </a>
{:else if to != ''}
  <a
    on:click
    href={to}
    target={redirect ? '_blank' : '_self'}
    class={`${classes.link} ${className}`}
    sveltekit:prefetch
  >
    <slot />
  </a>
{:else}
  <span
    class={`${classes.link} ${classes.pseudoLink} ${className}`}
    on:click
  >
    <slot />
  </span>
{/if}
