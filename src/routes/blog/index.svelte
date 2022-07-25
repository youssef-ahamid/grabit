<script>
  import BlogCard from '$lib/components/Blog/Blog Card.svelte'
  import BlogTag from '$lib/components/Blog/Blog Tag.svelte'
  import Section from '$lib/components/Section/Section.svelte'
  import DynamicSection from '$lib/components/Section/Dynamic Section.svelte'

  export let blogs
  export let tags
  export let tag

  import { pages } from '$lib/stores'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  const page = $pages.blog
  console.log(page)

  let titles = {}
  tags.map(t => (titles[t.title] = false))
  if (tag) titles[tag] = true
</script>

<Section>
  <Animateonenterview type="flyLeft">
    <h1>{page.hero.title}</h1>
  </Animateonenterview>
  <Animateonenterview type="flyLeft" delay={200}>
    <p class="body-lg pt-2">{page.hero.text}</p>
  </Animateonenterview>

  <div class="py-6">
    <Animateonenterview delay={400}>
      <h2>Browse Tags</h2>
    </Animateonenterview>
    <div class="flex flex-wrap mt-2">
      {#each tags as t, i}
        <Animateonenterview type="flyUp" delay={400 + 200 * i}>
          <BlogTag tag={t} bind:active={titles[t.title]} deselects />
        </Animateonenterview>
      {/each}
    </div>
  </div>

  <div
    class="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 place-items-stretch justify-items-stretch items-stretch justify-stretch content-stretch"
  >
    <Animateonenterview
      type="flyUp"
      delay={200}
      className="md:col-span-3 w-full"
    >
      <BlogCard blog={blogs[0]} detailed />
    </Animateonenterview>
    {#each blogs as blog, i}
      <Animateonenterview type="flyUp" delay={200 * (i / 3)}>
        <BlogCard {blog} />
      </Animateonenterview>
    {/each}
  </div>
</Section>

{#each page?.sections as section}
  <DynamicSection {section} />
{/each}
