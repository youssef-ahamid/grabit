<script>
  /* props */
  export let text = ''
  export let client = {}
  export let person = {}
  export let className = '' // *, custom wrapper classes
  export let styleOptions = {}

  if (!!person.name) person = client

  /* styles */
  import { stylus } from '$lib/helpers'
  import { TestimonialWrapper, Quote } from './styles'
  import Person from '../Person/Person.svelte'

  $: wrapper = stylus(TestimonialWrapper(styleOptions))
  $: quote = stylus(Quote(styleOptions))
</script>

<div class={`${wrapper.classes} ${className}`}>
  <q class={quote.classes}>{text}</q>
  <Person {...client} />
</div>
