<script>
  import BlogCard from '$lib/components/Blog/Blog Card.svelte'
  import BlogTag from '$lib/components/Blog/Blog Tag.svelte'
  import Section from '$lib/components/Section/Section.svelte'

  export let blogs
  export let tags
  export let tag

  let titles = {}
  tags.map(t => (titles[t.title] = false))
  if (tag) titles[tag] = true
</script>

<Section>
  <h1>Blogs</h1>
  <p class="body-lg pt-2">Lorem ipsum dolor sit amit connectsur.</p>

  <div class="py-6">
    <h2>Browse Tags</h2>
    <div class="flex flex-wrap mt-2">
      {#each tags as t}
        <BlogTag tag={t} bind:active={titles[t.title]} deselects />
      {/each}
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
    <BlogCard blog={blogs[0]} class="md:col-span-3" detailed />
    {#each blogs as blog}
      <BlogCard {blog} />
    {/each}
  </div>
</Section>
