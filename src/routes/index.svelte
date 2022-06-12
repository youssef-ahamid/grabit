<script>
  import Button from '$lib/components/Button/Button.svelte'
  import Go from '$lib/components/Go/Go.svelte'
  import Image from '$lib/components/Image/Image.svelte'
  import Quote from '$lib/components/Quote/Quote.svelte'

  import Section from '$lib/components/Section/Section.svelte'

  import { pages } from '$lib/stores'

  let page = $pages.home
  console.log(page.sections)
</script>

{#each page.sections as section, i}
  <Section {...section}>
    {#each section.content as component}
      {#if component.__typename == 'Image'}
        <Image
          alt={component.alt}
          src={component.image.url}
          className="mx-auto"
        />
      {:else if component.__typename == 'Button'}
        <Go to={component.link} redirect={component.redirect}>
          <Button {...component} />
        </Go>
      {:else if component.__typename == 'Quote'}
        <Quote {...component} />
      {/if}
    {/each}
  </Section>
{/each}

<div
  class="bg-brand bg-brandLight bg-brandDark bg-neutralLight before:bg-neutralLight before:bg-brand before:bg-neutralDark bg-neutral bg-neutralDark text-brand text-brandLight text-brandDark text-neutralLight text-neutral text-neutralDark"
/>
