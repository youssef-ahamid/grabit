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

<div class="z-[998] ring fixed w-12 bg-brandDark left-0 top-0 bottom-0 transition-300" class:ring-neutral={active} class:ring-transparent={!active}>
  <div class="relative h-screen w-12" use:clickOutside on:outclick={() => { if(active) active = false }}>
    <div class={classes.iconWrapper} on:click={toggle} id="menu-icon">
      <svelte:component this={icon} className={classes.icon} {active} />
    </div>
    <img {...logoSmall} class="right-1/2 translate-x-1/2 absolute bottom-1/2 translate-y-1/2">
  
    <Go to=tel:+201023680518 className="-rotate-90 bottom-20 absolute right-1/2 translate-x-1/2">
      <Button label="contact us" reverse icon=phone type=secondary />
    </Go>
  </div>
</div>

<div class="relative h-8 -mt-8 pt-8">
  <nav class={`${classes.nav} ${className}`} >
    <div class="relative w-full h-full">
      
      <div class="flex-col text-neutral space-y-12 md:space-y-0 items-start justify-start overflow-y-scroll pt-8">
        <div class="">
          <Animateonenterview>
          <p class="font-bold pb-8 opacity-50">School Info</p>
        </Animateonenterview>
          <List
            items={links.filter(link => link.group === 'info')}
            let:item={link}
            className="flex flex-col"
            let:index
          >
            <Animateonenterview type="flyUp" delay={100 * index} className="-my-3">
              <Go
                to={link.to}
                redirect={link.redirect}
                className="{classes.link} flex items-center p-4 bg-neutral/20 w-full"
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
