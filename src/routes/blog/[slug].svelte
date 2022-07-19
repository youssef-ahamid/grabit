<script>
  import BlogContent from '$lib/components/Blog Content/Blog Content.svelte'
  import BlogNav from '$lib/components/Blog Nav/Blog Nav.svelte'
  import Button from '$lib/components/Button/Button.svelte'
  import Go from '$lib/components/Go/Go.svelte'
  import Seo from '$lib/components/SEO/SEO.svelte'
  import { createArray } from '$lib/helpers'

  export let slug
  export let blog

  blog.content = blog.content.reverse()
  blog.body = blog.content
    .filter(c => c.__typename === 'BlogSection')
    .map(c => c.content.text)
    .join(`\n`)

  let sections = blog.content.filter(
    c => c.__typename === 'BlogSection' && !!c.title
  )

  let activeSections = createArray(sections.length, n => {
    return false
  })
  $: activeSection = activeSections.lastIndexOf(true)
  const activate = e => {
    activeSections[
      sections.indexOf(
        sections.filter(section => section.title === e.detail)[0]
      )
    ] = true
  }

  const inactivate = e => {
    activeSections[
      sections.indexOf(
        sections.filter(section => section.title === e.detail)[0]
      )
    ] = false
  }

  const getDate = timestamp => {
    let date = new Date(timestamp)
    return `${date.toLocaleString('default', {
      month: 'long',
    })} ${date.getDate()}, ${date.getFullYear()}`
  }
</script>

<Seo
  title={blog.title}
  description={blog.description}
  image={blog.image}
  ld={{ name: 'article', data: blog }}
/>

<div
  class="pt-32 md:min-h-screen w-full md:pt-8 md:px-[3%] flex items-center justify-between flex-wrap md:flex-nowrap"
>
  <div
    class="flex flex-col space-y-4 max-w-[90%] mx-auto md:m-1 md:max-w-[50%]"
  >
    <div class="flex space-x-2">
      {#each blog.tags as tag}
        <div
          class="px-5 py-1 bg-brand/25 rounded-full flex items-center justify-center text-brand hover:bg-brand cursor-pointer hover:scale-105 transition-300 hover:text-neutralLight"
        >
          <p class="font-bold uppercase">{tag.title}</p>
        </div>
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
        {getDate(blog.createdAt)}
      </p>
    </div>
  </div>
  <div
    class="md:absolute md:right-0 md:top-0 md:bottom-0 md:w-1/3 w-full h-48 md:h-auto bg-cover bg-center bg-no-repeat"
    style="background-image: url({blog.image?.url}) !important;"
  />
</div>
<div class="flex items-stretch justify-between relative">
  <div
    class="flex flex-col py-12 w-full md:px-[3%] md:max-w-[70%] lg:max-w-4xl"
  >
    {#each blog.content as content}
      {#if content.__typename === 'BlogSection'}
        <BlogContent
          {...content}
          on:active={activate}
          on:inactive={inactivate}
        />
      {:else if content.__typename === 'Button'}
        <Go to={content.link} className="max-w-fit mx-auto my-4">
          <Button {...content} />
        </Go>
      {/if}
    {/each}
  </div>
  <BlogNav {sections} bind:active={activeSection} />
</div>
