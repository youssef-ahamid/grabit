<script>
  import Karnoosh from '$lib/icons/shape/Karnoosh.svelte'
  import Animateonenterview from '../Animate On Enter View/animate on enter view.svelte'
  import Button from '../Button/Button.svelte'
  import Go from '../Go/Go.svelte'
  import BlogCard from './Blog Card.svelte'

  export let blogs

  const computeKarnooshPosition = index => {
    if (index % 2 !== 0)
      return 'left: 0rem !important; top: -3rem !important;'
    else return 'left: 0rem !important; bottom: -3rem !important;'
  }
</script>

<div
  class="text-center p-6 mt-20 flex flex-col space-y-8 items-center"
>
  <Animateonenterview>
    <h2>Related Posts</h2>
  </Animateonenterview>
  <div
    class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center place-items-center gap-6 items-start py-12"
  >
    {#each blogs as blog, i}
      <Animateonenterview type="flyUp" delay={200 * i}>
        <BlogCard {blog} />
        <Karnoosh
          className="w-32 md:w-40 z-[-1] absolute text-brand -translate-x-1/2"
          styles={computeKarnooshPosition(i)}
        />
      </Animateonenterview>
    {/each}
  </div>
  <Animateonenterview type="flyUp">
    <Go to="/blog" className="w-full flex justify-center">
      <Button label="view all blogs" icon="chevron_right" />
    </Go>
  </Animateonenterview>
</div>
