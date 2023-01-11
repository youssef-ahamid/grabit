<script>
  import BlogCard from '$lib/components/Blog/Blog Card.svelte'

  import Section from '$lib/components/Section/Section.svelte'

  export let title
  export let text
  export let blogs = []
</script>

<Section>
  <div class="flex flex-col items-center w-full pb-6">
    <h2>{title}</h2>
    {#if text}
      <p>{text}</p>
    {/if}
  </div>
  <div
    class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center place-items-center"
  >
    {#each blogs as blog}
      <BlogCard {blog} />
    {/each}
  </div>
</Section>
