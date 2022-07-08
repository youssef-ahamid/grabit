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

  let y, h, w
  $: showToTop = y > h * 2

  $: mobile = w < 650

  export const toTop = () => {
    window.scrollTo(0, 0)
  }

  if (!styleOptions.type) styleOptions.type = 'neutralLight'

  import List from '$lib/components/List/List.svelte'
  import NavLink from '$lib/components/Nav Link/Nav Link.svelte'
  import Go from '../Go/Go.svelte'
  import { activePageSlug } from '$lib/stores'
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
import ChevronRight from '$lib/icons/shape/chevron_right.svelte'
  $: classes = config({ active, ...styleOptions })
</script>

<svelte:window bind:scrollY={y} bind:innerHeight={h} bind:innerWidth={w} />

{#if !!cta && mounted && (!mobile || !active) }
<div
  in:fly={{ x: 200, delay: 1000, opacity: 1, duration: 600 }}
  out:fly={{ x: 200, opacity: 1, duration: 600 }}
  class="fixed top-5 right-[3%] z-[999]"
  >
  <Go to={cta.link}>
  <Button {...cta} className="ring-neutral ring-2"/>
</Go>
</div>
{/if}

<div class="z-[998] ring-1 fixed w-12 bg-brandDark left-0 top-0 bottom-0 transition-300 max-w-[100vw] max-h-[100vh] overflow-hidden ring-neutral">
  <div class="relative h-screen w-12" use:clickOutside on:outclick={() => { if(active) active = false }}>
    <div class={classes.iconWrapper} on:click={toggle} id="menu-icon">
      <svelte:component this={icon} className={classes.icon} {active} />
    </div>
    <Go to=/ >
    <img {...logoSmall} class="right-1/2 translate-x-1/2 absolute bottom-1/2 translate-y-1/2">
  </Go>
  
    <Go to=tel:+201023680518 className="-rotate-90 bottom-20 absolute right-1/2 translate-x-1/2">
      <Button label="contact us" reverse icon=phone type=secondary nowrap />
    </Go>
  </div>
</div>

<div class="relative h-8 -mt-8 pt-8 max-w-[100vw] overflow-hidden">
  <nav class={`${classes.nav} ${className}`} >
    <div class="relative w-full h-full">
      
      <div class="flex flex-col text-neutral items-stretch md:justify-between h-screen md:pt-20">
        <div class="">
          <List
            items={links.filter(link => link.group === 'info')}
            let:item={link}
            className="flex flex-col"
            let:index
          >
            <Animateonenterview type="flyUp" delay={100 * index} className="-my-1 py-0 pr-1">
              <Go
                to={link.to}
                redirect={link.redirect}
                className="{classes.link} flex items-center justify-between p-3 md:p-4 bg-neutral/20 w-full min-w-full group hover:bg-neutral/50 transition-300"
              >
              <p class="text-neutral text-sm font-bold group-hover:text-brandLight transition-300 max-w-fit whitespace-nowrap">{link.text}</p>
              <ChevronRight className="w-6 md:w-8 text-neutral group-hover:text-brandLight group-hover:translate-x-2" />
            </Go>
            </Animateonenterview>
          </List>
        </div>
        <div class="md:px-4 md:pt-8">
          <List
            items={links.filter(link => link.group === 'useful')}
            let:item={link}
            className="grid grid-cols-1 md:grid-cols-2 md:gap-x-6 gap-y-0"
            let:index
          >
            <Animateonenterview type="flyUp" className="-my-1 md:my-0 py-0 pr-1" delay={links.filter(link => link.group === 'info').length * 100 + 100 * index}>
              <Go
              to={link.to}
              redirect={link.redirect}
              className="{classes.link} flex items-center justify-between p-3 md:p-4 bg-neutral/20 w-full min-w-full group hover:bg-neutral/50 transition-300"
            >
            <p class="text-neutral text-sm font-bold group-hover:text-brandLight transition-300 max-w-fit whitespace-nowrap">{link.text}</p>
            <ChevronRight className="w-6 md:w-8 text-neutral group-hover:text-brandLight group-hover:translate-x-2" />
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
