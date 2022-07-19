<script>
  import { site } from '$lib/config'
  import { getTemplate } from './templates'

  export let description = ''
  export let title = ''
  export let image
  export let ld = null

  if (!image)
    image = {
      url: site.mainImage,
    }

  const pageTitle = title || site.title
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={description} />
  <meta name="title" content={pageTitle} />
  <meta name="image" content={image.url} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="<{site.url}>" />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image.url} />

  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  />
  {#if !!ld}
    {@html getTemplate(ld.name, ld.data)}
  {/if}
</svelte:head>
