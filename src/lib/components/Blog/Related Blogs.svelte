<script>
  import BlogCard from './Blog Card.svelte'

  export let blogs
</script>

<div class="text-center p-6 mt-8 flex flex-col space-y-8">
  <h2>Related Posts</h2>
  <div
    class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center place-items-center gap-6 items-start"
  >
    {#each blogs as blog}
      <BlogCard {blog} />
    {/each}
  </div>
</div>
