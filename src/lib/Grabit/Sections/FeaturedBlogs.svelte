<script>
  import BlogCard from '$lib/components/Blog/Blog Card.svelte'

  import Section from '$lib/components/Section/Section.svelte'

  export let title
  export let text
  export let blogs = []
</script>

<Section {title} {text} layout="center">
  <div class="grid grid-cols-1 md:grid-cols-2">
    {#each blogs as blog}
      <BlogCard {blog} />
    {/each}
  </div>
</Section>
