<script>
  import { draw, fade } from 'svelte/transition'

  export let className = ''
  export let value = ''
  export let id = value

  let data
  let copied = false

  function copy() {
    data.select()
    data.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(value)
    copied = true
  }
</script>

<div class="relative">
  <input
    type="text"
    {id}
    bind:value
    class="hidden"
    bind:this={data}
  />
  <div on:click={copy} class="peer cursor-pointer {className}">
    <slot />
  </div>

  <div
    role="tooltip"
    class="{copied
      ? 'bg-opacity-90'
      : 'bg-opacity-75'} opacity-0 delay-100 translate-y-1 flex justify-center items-center scale-95 peer-hover:scale-100 peer-hover:opacity-100 peer-hover:translate-y-0  peer-active:scale-95 left-1/2 -translate-x-1/2 peer-focus-within:scale-100 peer-focus-within:opacity-100 peer-focus-within:translate-y-0 absolute z-10 bottom-full py-2 px-3 bg-brand rounded-lg shadow-sm transition duration-300"
  >
    {#if copied}
      <svg
        class="stroke-current text-neutralLight inline-block rounded-xl w-6 -mt-2 mr-2"
        stroke-width="3"
        stroke-miterlimit="20"
        stroke-dashoffset="0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 40"
        ><path
          fill="none"
          in:draw={{ duration: 500 }}
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        /></svg
      >
      <p
        class="font-bold text-neutralLight leading-none whitespace-nowrap"
        in:fade={{ duration: 300 }}
      >
        copied to clipboard
      </p>
    {:else}
      <p class="font-bold text-neutralLight leading-none">copy</p>
    {/if}
  </div>
</div>
