<script context="module">
  // export const prerender = true
  import { getPage, graphcms } from '$lib/gql'

  export async function load({ url }) {
    let slug = url.pathname.substring(1)
    if (slug === '') slug = 'home'

    let page = await getPage(slug)
    return {
      props: {
        page,
        slug,
      },
    }
  }
</script>

<script>
  export let page, slug

  import { pages } from '$lib/stores'
  $pages[slug] = page

  import '../lib/styles/app.css'
  import SEO from '$lib/components/SEO/SEO.svelte'
  import Nav from '$lib/components/Nav/Nav.svelte'
  import Footer from '$lib/components/Footer/Footer.svelte'
</script>

<SEO {...page.seo} />
<Nav />
<slot sections={page.sections} />
<Footer />

<div
  class="bg-brand bg-brandLight bg-brandDark bg-neutralLight before:bg-neutralLight before:bg-brand before:bg-neutralLight before:bg-current before:bg-neutralDark bg-neutral bg-neutralDark text-brand text-brandLight text-brandDark text-neutralLight text-neutral text-neutralDark"
/>
