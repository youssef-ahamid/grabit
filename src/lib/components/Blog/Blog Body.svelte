<script>
import { createArray } from '$lib/helpers';

  import Button from '../Button/Button.svelte'
  import Go from '../Go/Go.svelte'
  import BlogContent from './Blog Content.svelte'
  import BlogNav from './Blog Nav.svelte'

  export let blog

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
</script>

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
