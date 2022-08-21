<script>
  /* props */
  export let className = '' // *, custom wrapper classes
  export let line = false
  export let lineColor = 'brand'
  export let layout = 'default'

  /* styles */
  import { stylus } from '$lib/helpers'
  import { titleText } from './styles'
  $: tit = stylus(titleText({ line, layout, lineColor }))
</script>

<h2 class={`${tit.classes} ${className}`}><slot /></h2>
