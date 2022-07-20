<script>
  import Karnoosh from '$lib/icons/shape/Karnoosh.svelte'
  import BlogCard from './Blog Card.svelte'

  export let blogs

  const computeKarnooshPosition = index => {
    if (index % 2 !== 0)
      return 'left: 0rem !important; top: -3rem !important;'
    else return 'left: 0rem !important; bottom: -3rem !important;'
  }
</script>

<div class="text-center p-6 mt-20 flex flex-col space-y-8">
  <h2>Related Posts</h2>
  <div
    class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center place-items-center gap-6 items-start py-12"
  >
    {#each blogs as blog, i}
      <div class="relative">
        <BlogCard {blog} />
        <Karnoosh
          className="w-32 md:w-40 z-[-1] absolute text-brand -translate-x-1/2"
          styles={computeKarnooshPosition(i)}
        />
      </div>
    {/each}
  </div>
</div>
