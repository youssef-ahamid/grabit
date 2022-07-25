<script>
  import { getMonthDate } from '$lib/helpers'
  import BlogTag from './Blog Tag.svelte'

  export let blog
</script>

<div
  class="pt-32 md:min-h-screen w-full md:pt-8 md:px-[3%] flex items-center justify-between flex-wrap md:flex-nowrap"
>
  <div
    class="flex flex-col space-y-4 max-w-[90%] mx-auto md:m-1 md:max-w-[50%]"
  >
    <div class="flex space-x-2">
      {#each blog.tags as tag}
        <BlogTag {tag} />
      {/each}
    </div>
    <h1>{blog.title}</h1>
    <p class="body-lg py-2">{blog.description}</p>
    <div class="flex justify-between items-center py-6">
      <div class="flex space-x-2 items-center">
        <img
          src={blog.author.image?.url}
          alt="{blog.author.name} | {blog.author
            .role} - NewCastle School"
          class="rounded-full object-cover object-center w-8 h-8 md:w-12 md:h-12"
        />
        <div class="flex flex-col">
          <p
            class="font-bold text-xs -mb-1 md:mb-0 md:text-sm capitalize"
          >
            {blog.author.name}
          </p>
          <p class="font-light text-[10px] md:text-sm capitalize">
            {blog.author.role}
          </p>
        </div>
      </div>

      <p class="text-xs md:text-sm font-bold text-brand">
        {getMonthDate(blog.createdAt)}
      </p>
    </div>
  </div>
  <div
    class="md:absolute md:right-0 md:top-0 md:bottom-0 md:w-1/3 w-full h-48 md:h-auto bg-cover bg-center bg-no-repeat"
    style="background-image: url({blog.image?.url}) !important;"
  />
</div>
