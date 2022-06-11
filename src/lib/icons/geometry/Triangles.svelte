<script>
  import { draw } from 'svelte/transition'

  export let className = ''
  export let active = false
</script>

<svg
  class={`transition duration-300 ease-out w-full h-auto ${className}`}
  viewBox="0 0 52 530"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  {#if active}
    <path
      transition:draw
      d="M6.12891 46.2434L20.0477 24"
      class="stroke-current"
    />
    <path
      transition:draw
      d="M6.5 0.5L50 72L6.5 143.5"
      class="stroke-current"
    />
    <path
      transition:draw
      d="M7 193.5L50.5 265L7 336.5"
      class="stroke-current"
    />
    <path
      transition:draw
      d="M6 97L49.5 168.5L6 240"
      class="stroke-current"
    />
    <path
      transition:draw
      d="M6.5 290L50 361.5L6.5 433"
      class="stroke-current"
    />
    <path
      transition:draw
      d="M7 483L20.5 505.5"
      class="stroke-current"
    />
    <path
      transition:draw
      d="M6 386L49.5 457.5L6 529"
      class="stroke-current"
    />
  {/if}
</svg>
