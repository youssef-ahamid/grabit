<script>
  import Section from '$lib/components/Section/Section.svelte'
  import Download from '../components/download.svelte'

  export let title
  export let text
  export let downloadLinkIos
  export let downloadLinkAndroid
  // export let image
  // export let downloadIOS
  // export let downloadGooglePlay
</script>

<Section
  {title}
  {text}
  layout="center"
  backgroundColor="brand"
  textColor="neutralLight"
>
  <!-- Download buttons -->
  <Download ios={downloadLinkIos} android={downloadLinkAndroid} />
</Section>
