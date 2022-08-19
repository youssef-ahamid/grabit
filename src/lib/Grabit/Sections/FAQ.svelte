<script>
  import Accordian from '$lib/components/Accordian/Accordian.svelte'
  import Section from '$lib/components/Section/Section.svelte'

  export let items
  export let title
  export let text
</script>

<Section {title} {text} layout="center">
  <Accordian {items} />
</Section>
