<script>
  import SEO from '$lib/components/SEO/SEO.svelte'
  import Section from '$lib/Grabit/Sections/Section.svelte'

  export let content

  content.sections.map(s => !s.identifier ? s.identifier = 'CTA' : s.identifier)
</script>

<SEO {...content.seo} />

{#each content.sections as section}
  <Section data={section} />
{/each}
