<svelte:options accessors />

<script>
import { createEventDispatcher } from "svelte";


  export let items = []
  export let selected = 0
  export let value = ''
  export let className = ''

  const dispatch = createEventDispatcher()
  export const select = i => {
    value = items[i]?.value
    selected = i
    dispatch("select", i)
  }

  select(selected)
</script>

<ul class={className}>
  {#each items as item, index}
    <li
      on:click={() => {
        select(index)
      }}
      class="cursor-pointer"
    >
      <slot {item} {index} {selected} />
    </li>
  {/each}
</ul>
