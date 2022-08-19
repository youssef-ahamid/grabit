<script>
  import { beforeNavigate } from '$app/navigation'
  import Logo from '$lib/components/Logo/Logo.svelte'
  import { logoSmall } from '$lib/config'
  import { onMount } from 'svelte'
  import { fade, slide } from 'svelte/transition'
  import Image from '../Image/Image.svelte'

  let start = false
  let show = false
  let showLogoText = false
  beforeNavigate(() => {
    start = true
  })

  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  const loadingend = () => dispatch('loadend')

  let isPageLoaded = false
  onMount(() => {
    isPageLoaded = true
    start = false
    showLogoText = false
  })
</script>

{#if !isPageLoaded || start}
  <div
    class="fixed w-screen h-screen inset-0 z-[9999] bg-brandDark flex flex-col items-center justify-center"
    in:slide={{ duration: 300 }}
    out:fade={{ duration: 300, delay: 2400 }}
    on:outrostart={loadingend}
  >
    <div class="flex justify-center items-center">
      <div
        class="py-2 h-12 md:h-28 my-8"
        in:fade={{ duration: 400, delay: 800 }}
        out:fade={{ duration: 600, delay: 1000 }}
      >
        <Image src="images/emblem.png" />
      </div>
      <div
        class="py-2 h-12 md:h-28 my-8"
        in:fade={{ duration: 600, delay: 1300 }}
        out:fade={{ duration: 600, delay: 1000 }}
      >
        <Image src="images/logo_text.png" />
      </div>
    </div>
    <span
      class="rounded-full border-x-4 border-neutralLight animate-pulse animate-spin w-12 h-12 bg-transparent pb-12 mt-6 md:mt-2"
      out:slide={{ duration: 400, delay: 200 }}
      in:fade={{ duration: 400, delay: 1200 }}
    />
    <div
      class="h-4 w-full flex justify-center transition duration-300 ease-out mt-12"
    >
      <h2
        class="animate-pulse text-neutralLight text-center mx-auto max-w-[90%] md:max-w-md"
      >
        <slot />
      </h2>
    </div>
  </div>
{/if}
