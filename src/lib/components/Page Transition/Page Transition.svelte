<script>
  import { beforeNavigate } from '$app/navigation'
  import Logo from '$lib/components/Logo/Logo.svelte'
  import { afterUpdate, beforeUpdate, onMount } from 'svelte'
  import { fade, slide } from 'svelte/transition'

  let start = false
  beforeNavigate(() => {
    start = true
  })

  let isPageLoaded = false
  onMount(() => {
    isPageLoaded = true
    start = false
  })
</script>

{#if !isPageLoaded || start}
  <div
    class="fixed w-screen h-screen inset-0 z-[9999] bg-neutral-light flex flex-col items-center justify-center"
    in:slide={{ duration: 300 }}
    out:slide={{ duration: 500, delay: 1400 }}
  >
    <div class="flex justify-center items-center">
      <span
        class="py-2 w-24 md:w-80 my-8"
        in:slide={{ duration: 200 }}
        out:fade={{ duration: 300, delay: 1000 }}
      >
        <Logo color="primary" />
      </span>
    </div>
    <span
      class="rounded-full border-x-2 border-primary animate-pulse animate-spin w-12 h-12 bg-transparent pb-12"
      transition:slide={{ duration: 400, delay: 200 }}
    />
    <div
      class="h-4 w-full flex justify-center transition duration-300 ease-out mt-6"
    >
      <h2
        class="animate-pulse text-neutral-dark text-center mx-auto max-w-[90%] md:max-w-md"
      >
        <slot />
      </h2>
    </div>
  </div>
{/if}
