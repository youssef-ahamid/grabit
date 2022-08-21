<script>
  import { getMonthDate } from '$lib/helpers'

  import Button from '../Button/Button.svelte'
  import Go from '../Go/Go.svelte'

  export let blog
  export let detailed = false

  let className = ''
  export { className as class }
</script>

<Go to="/blog/{blog.slug}" redirect className="min-w-[100%]">
  <div
    class="bg-neutralLight mx-auto rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-300 w-full relative h-44 md:h-60 bg-cover bg-center bg-no-repeat {!detailed
      ? 'max-w-md'
      : ''} self-center pt-4 {className}"
    style="background-image: url({blog.image?.url}) !important;"
    title="{blog.title} | {blog.description}"
  >
    <div
      class="absolute inset-0 rounded-3xl bg-gradient-to-t from-neutralDark flex flex-col justify-end px-6 py-2 text-neutralLight"
    >
      <h3>{blog.title}</h3>
      <div class="flex justify-between">
        <div class="flex flex-col space-y-0.5">
          <p
            class="text-sm font-bold capitalize text-neutralLight opacity-75"
          >
            {blog.author.name}
          </p>
          <p
            class="text-xs md:text-sm font-bold opacity-50 whitespace-nowrap"
          >
            {getMonthDate(blog.createdAt)}
          </p>
        </div>
        <Go to="/blog/{blog.slug}" redirect>
          <Button shape="ghost" type="secondary" label="read more" />
        </Go>
      </div>
    </div>
  </div>
</Go>
