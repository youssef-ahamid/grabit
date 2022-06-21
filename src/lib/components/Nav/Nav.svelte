<script>
  import Burger from '$lib/icons/burger.svelte'
  /* props */
  // export let links = [] // *, list items
  export let activeLink
  export let activeSub = 0
  export let cta 
  export let icon = Burger
  export let className = '' // *, custom wrapper classes
  export let styleOptions = {}

  import { links, logoSmall } from '$lib/config';

  let y, h
  $: showToTop = y > h * 2

  export const toTop = () => {
    window.scrollTo(0, 0)
  }

  if (!styleOptions.type) styleOptions.type = 'neutralLight'

  import List from '$lib/components/List/List.svelte'
  import NavLink from '$lib/components/Nav Link/Nav Link.svelte'
  import Go from '../Go/Go.svelte'
  import { activePageSlug, mobile } from '$lib/stores'
  import Logo from '../Logo/Logo.svelte'
  import Button from '../Button/Button.svelte'

  let active = false
  const toggle = () => (active = !active)
  
  import { onMount } from 'svelte';
  let mounted = false
  onMount(() => {
    mounted = true
  })
  
  import clickOutside from '$lib/actions/clickOutside';
  /* styles */
  import { config } from './styles'
  import { fly, scale } from 'svelte/transition'
  import { elasticOut } from 'svelte/easing'
import Animateonenterview from '../Animate On Enter View/animate on enter view.svelte'
  $: classes = config({ active, ...styleOptions })
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={h} />

{#if !!cta && mounted }
<div
  transition:fly={{ duration: 800, delay: 1000, y: -80 }}
  class="fixed top-5 right-[3%] z-[999]"
  >
  <Go to={cta.link}>
  <Button {...cta} className="ring-neutral ring-2"/>
</Go>
</div>
{/if}

<div class="relative h-8 -mt-8 pt-8">
  <div class={classes.iconWrapper} on:click={toggle} id="menu-icon">
    <svelte:component this={icon} className={classes.icon} {active} />
  </div>
  <nav class={`${classes.nav} ${className}`} use:clickOutside on:outclick={() => { if(active) active = false }}>
    <div class="relative w-full h-full">
      <img on:click={toggle} {...logoSmall} class="right-0 translate-x-1/2 fixed top-4 cursor-pointer">
      <div class="flex-col text-neutral space-y-12 md:space-y-0 items-start justify-start pr-6 overflow-y-scroll pt-8">
        <div class="px-2 md:px-4">
          <Animateonenterview>
          <p class="font-bold pb-8 opacity-50">School Info</p>
        </Animateonenterview>
          <List
            items={links.filter(link => link.group === 'info')}
            let:item={link}
            className="grid grid-cols-2 gap-x-6 gap-y-0"
            let:index
          >
            <Animateonenterview type="flyUp" delay={100 * index} className="-my-3">
              <Go
                to={link.to}
                redirect={link.redirect}
                className={classes.link}
              >
              <p class="text-neutral text-sm font-bold hover:text-brandLight transition-300 slide-underline max-w-fit md:whitespace-nowrap">{link.text}</p>
              </Go>
            </Animateonenterview>
          </List>
        </div>
        <div class="px-2 md:px-4 pt-8">
          <Animateonenterview delay={links.filter(link => link.group === 'info').length * 100}>
          <p class="font-bold pb-8 opacity-50">Useful Links</p>
          </Animateonenterview>
          <List
            items={links.filter(link => link.group === 'useful')}
            let:item={link}
            className="grid grid-cols-2 gap-x-6 gap-y-0"
            let:index
          >
            <Animateonenterview type="flyUp" delay={links.filter(link => link.group === 'info').length * 100 + 100 * index}>
              <Go
              to={link.to}
              redirect={link.redirect}
              className={classes.link}
            >
            <p class="text-neutral text-sm font-bold hover:text-brandLight transition-300 slide-underline max-w-fit md:whitespace-nowrap">{link.text}</p>
            </Go>
            </Animateonenterview>
          </List>
        </div>
      </div>
    </div>
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
