<script context="module">
    export const prerender = true
    import { getPage, graphcms } from '$lib/gql';

  export async function load({ url }) {
    let slug = url.pathname.substring(1)
    if (slug === "") slug = "home"
    
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

    import { pages } from '$lib/stores';
    $pages[slug] = page

    import '../lib/styles/app.css'
    import SEO from '$lib/components/SEO/SEO.svelte';
</script>

<SEO {...page.seo} />

<slot sections={page.sections} />