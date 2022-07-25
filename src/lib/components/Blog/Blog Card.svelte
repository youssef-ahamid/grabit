<script>
  import { getMonthDate } from '$lib/helpers'

  import Button from '../Button/Button.svelte'
  import Go from '../Go/Go.svelte'

  export let blog
  export let detailed = false

  let className = ''
  export { className as class }
</script>

<div
  class="bg-neutralLight rounded-3xl shadow-lg hover:shadow-sm transition-300 w-full {!detailed
    ? 'max-w-md'
    : ''} self-center pt-4 {className}"
>
  <div class="flex flex-col space-y-6 py-3">
    <div class="flex justify-between items-center px-4">
      <div class="flex space-x-1 min-w-[10rem]">
        {#each blog.tags as tag, i}
          {#if i < 1}
            <Go to="/blog?tag={tag.title}"
              className="px-3 py-0.5 bg-brand/25 rounded-full flex items-center justify-center text-brand hover:bg-brand cursor-pointer hover:scale-105 transition-300 hover:text-neutralLight"
            >
              <p class="font-bold uppercase body-sm">{tag.title}</p>
            </Go>
          {:else if i === 1}
            <div
              class="px-3 py-0.5 bg-brand/25 rounded-full flex items-center justify-center text-brand"
            >
              <p class="font-bold uppercase body-sm">
                +{blog.tags.length - i}
              </p>
            </div>
          {/if}
        {/each}
      </div>
      <p class="text-xs md:text-sm font-bold text-gray-500 whitespace-nowrap">
        {getMonthDate(blog.createdAt)}
      </p>
    </div>
    <div class="relative">
      <a
        href="/blog/{blog.slug}"
        class="bg-neutralDark transition-300 hover:opacity-75 opacity-0 w-full h-44 absolute cursor-pointer left-0 top-0"
      >
        <button
          class="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 rounded-xl ring-2 ring-neutralLight bg-transparent text-neutralLight flex px-6 py-3 justify-center items-center hover:bg-neutralLight hover:text-neutralDark transition-300"
          ><p class="text-current font-bold text-xs capitalize">
            read
          </p></button
        >
      </a>
      <img
        src={blog.image?.url}
        alt="{blog.title} | {blog.description}"
        class="w-full h-44 object-cover object-center"
      />
    </div>
    <div class="text-left px-4 flex flex-col space-y-4">
      <h3>{blog.title}</h3>
      {#if detailed}
        <p class="w-full py-2 max-w-3xl">{blog.description}</p>
      {/if}
      <Go to="/blog/{blog.slug}" className="self-end">
        <Button label="read more" icon="chevron_right" />
      </Go>
    </div>
  </div>
</div>
