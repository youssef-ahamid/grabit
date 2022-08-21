<script>
  import Blog from '$lib/components/Blog/Blog.svelte'
import Section from '$lib/Grabit/Sections/Section.svelte';

  export let blog
</script>

<Blog {blog} />
<Section name="CTA" data={{
  title: "Get Your Order Now!"
}}/>
