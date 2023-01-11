<script>
  import BlogHero from '$lib/components/Blog/Blog Hero.svelte'
  import RelatedBlogs from '$lib/components/Blog/Related Blogs.svelte'
  import Seo from '$lib/components/SEO/SEO.svelte'
  import BlogBody from './Blog Body.svelte'

  export let blog

  blog.body = blog.content
    .filter(c => c.__typename === 'BlogSection')
    .map(c => c.content.text)
    .join(`\n`)
</script>

<Seo
  title="Grabit | {blog.title}"
  description={blog.description}
  image={blog.image}
  ld={{ name: 'article', data: blog }}
/>

<BlogHero {blog} />
<BlogBody {blog} />

{#if blog.related?.length > 0}
  <RelatedBlogs blogs={blog.related} />
{/if}
