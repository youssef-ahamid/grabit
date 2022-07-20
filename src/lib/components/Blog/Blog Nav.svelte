<script>
  import inView from '$lib/actions/inView'

  import { slugify } from '$lib/helpers'
  import Go from '../Go/Go.svelte'

  let inside = false
  let h

  export let sections = []
  export let active = 0
</script>

<svelte:window bind:innerHeight={h} />

<div
  class="hidden md:block w-80 min-h-full"
  use:inView={{ bottom: h }}
  on:enter={() => {
    inside = true
  }}
  on:exit={() => {
    inside = false
  }}
>
  <div
    class="py-12 right-0 top-0 {inside
      ? 'fixed'
      : 'absolute'} w-80 flex flex-col space-y-2"
  >
    {#each sections as section, i}
      <Go
        to="#{slugify(section.title)}"
        className="transition-300 flex items-center space-x-2 origin-left text-neutralDark hover:text-brand hover:opacity-90 {active ===
        i
          ? ''
          : 'opacity-50 scale-75 hover:scale-[85%]'}"
      >
        <div
          class="h-2 w-16 rounded-full transition-300 bg-current"
        />
        <p class="font-bold">{section.title}</p>
      </Go>
    {/each}
  </div>
</div>
