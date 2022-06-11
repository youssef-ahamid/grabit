<script>
  export let src
</script>

<svelte:head>
  <link rel="preload" as="image" href={src} />
</svelte:head>
