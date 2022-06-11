<script>
  import Burger from '$lib/icons/burger.svelte'
  /* props */
  export let links = [] // *, list items
  export let activeLink
  export let activeSub = 0
  export let icon = Burger
  export let className = '' // *, custom wrapper classes
  export let styleOptions = {}

  let y, h
  $: showToTop = y > h * 2

  export const toTop = () => {
    window.scrollTo(0, 0)
  }

  if (!styleOptions.type) styleOptions.type = 'neutral-light'

  import List from '$lib/components/List/List.svelte'
  import NavLink from '$lib/components/Nav Link/Nav Link.svelte'
  import Go from '../Go/Go.svelte'
  import { activePageSlug, mobile } from '$lib/stores'
  import Logo from '../Logo/Logo.svelte'
  import Button from '../Button/Button.svelte'

  let active = false
  const toggle = () => (active = !active)

  /* styles */
  import { config } from './styles'
  import { scale } from 'svelte/transition'
  import { elasticOut } from 'svelte/easing'
  $: classes = config({ active, ...styleOptions })
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={h} />

<div class="relative h-8 -mt-8 pt-8">
  <div class={classes.iconWrapper} on:click={toggle} id="menu-icon">
    <svelte:component this={icon} className={classes.icon} {active} />
  </div>
  <nav class={`${classes.nav} ${className}`}>
    <Go to="/">
      <Logo
        color={'primary'}
        className="my-8 lg:my-0 w-20 pt-5 left-8 lg:fixed lg:top-4 lg:left-[5%]"
      />
    </Go>
    <List items={links} let:prop={item} className={classes.links}>
      <NavLink
        {...item}
        active={$activePageSlug == item.text.toLowerCase()}
        {activeSub}
        on:click={() => {
          activeLink = links.indexOf(item)
          active = false
        }}
        className={classes.link}
        styleOptions={{ type: 'primary' }}
      />
    </List>
  </nav>

  {#if showToTop}
    <div
      transition:scale={{ duration: 800, easing: elasticOut }}
      class="fixed bottom-5 right-5 z-[997]"
    >
      <Button
        on:click={toTop}
        icon="chevron_up"
        shape="icon"
        type="primary"
      />
    </div>
  {/if}
</div>
