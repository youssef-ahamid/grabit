<script>
  import Nav from '$lib/components/Nav/Nav.svelte'
  import Footer from '$lib/components/Footer/Footer.svelte'
</script>

<Nav
  cta={{
    label: 'apply now',
    type: 'secondary',
    shape: 'default',
    link: '/application',
  }}
/>
<div class="pl-12 w-[100vw] overflow-hidden">
  <slot />
  <Footer />
</div>

<div
  class="bg-brand bg-brandLight bg-brandDark bg-neutralLight before:bg-neutralLight before:bg-brand before:bg-neutralLight before:bg-current before:bg-neutralDark bg-neutral bg-neutralDark text-brand text-brandLight text-brandDark text-neutralLight text-neutral text-neutralDark"
/>
