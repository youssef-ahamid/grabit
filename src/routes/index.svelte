<script>
  export let content

  import FAQ from '$lib/Grabit/Sections/FAQ.svelte'
  import CTA from '$lib/Grabit/Sections/CTA.svelte'
import HomeHero from '$lib/Grabit/Sections/HomeHero.svelte';
</script>

<HomeHero {...content.Hero} />
<FAQ {...content.FAQ} />
<CTA {...content.CTA} />
