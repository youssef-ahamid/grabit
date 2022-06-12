<script>
  export let className = ''
  export let type = ''
  export let icon = ''
  export let title = ''
  export let styleOptions = {}
  
  import { resolve } from '$lib/icons'

  /* styles */
  import { stylus } from '$lib/helpers'
  import { card, cardIcon, cardHeader } from './styles'

  $: wrapper = stylus(card({ type, ...styleOptions }))
  $: header = stylus(cardHeader({ type, ...styleOptions }))
  $: cIcon = stylus(cardIcon({ type, ...styleOptions }))
</script>

<div class={`${wrapper.classes} ${className}`} on:click>
  {#if !!title}
    <div class={header.classes}>
      {#if !!icon}
        <span class={cIcon.classes} style={cIcon.styles}>
          {#if typeof icon === 'string'}
            {#await resolve[icon]() then module}
              <svelte:component this={module.default} />
            {/await}
          {:else}
            <svelte:component this={icon} />
          {/if}
        </span>
      {/if}
      <h3>{title}</h3>
    </div>
  {/if}
  <slot />
  <slot name="action" />
</div>
