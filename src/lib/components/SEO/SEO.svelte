<script>
  import { site } from '$lib/config'

  export let descriptionText = ''
  export let title = ''
  export let previewImage
  if (!previewImage)
    previewImage = {
      url: site.mainImage,
    }

  const pageTitle = `${site.title} ${
    title != '' && !!title ? `| ${title}` : ''
  }`
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={descriptionText} />
  <meta name="title" content={pageTitle} />
  <meta name="image" content={previewImage.url} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="<{site.url}>" />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={descriptionText} />
  <meta property="og:image" content={previewImage.url} />

  <meta
    name="robots"
    content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  />
</svelte:head>
