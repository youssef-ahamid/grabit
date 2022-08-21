<script>
  import Accordian from '$lib/components/Accordian/Accordian.svelte'
  import Section from '$lib/components/Section/Section.svelte'

  export let items
  export let title
  export let text
</script>

<Section layout="center">
  <div class="flex flex-col items-center w-full pb-6">
    <h2>{title}</h2>
    {#if text}
      <p>{text}</p>
    {/if}
  </div>
  <Accordian {items} />
</Section>
