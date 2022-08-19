<script>
  import '../lib/styles/app.css'
  import Nav from '$lib/components/Nav/Nav.svelte'
  import Footer from '$lib/components/Footer/Footer.svelte'
</script>

<!-- <Nav /> -->

<div class="overflow-hidden">
  <slot />
  <Footer />
</div>

<div
  class="bg-brand bg-brandLight bg-brandDark bg-neutralLight before:bg-neutralLight before:bg-brand before:bg-neutralLight before:bg-current before:bg-neutralDark bg-neutral bg-neutralDark text-brand text-brandLight text-brandDark text-neutralLight text-neutral text-neutralDark"
/>
