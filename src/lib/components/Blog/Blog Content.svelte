<script>
  import inView from '$lib/actions/inView'
  import { slugify } from '$lib/helpers'
  import { createEventDispatcher } from 'svelte'
  import Animateonenterview from '../Animate On Enter View/animate on enter view.svelte'

  const dispatch = createEventDispatcher()
  export const activate = () => dispatch('active', title)
  export const inactivate = () => dispatch('inactive', title)

  export let content = {}
  export let title = ''
</script>

<section
  id={!!title ? slugify(title) : ''}
  class="blog-content py-2 scroll-mt-4"
  use:inView={{ bottom: 50 }}
  on:enter={activate}
  on:exit={inactivate}
>
  {#if !!title}
    <h2 class="py-2">{title}</h2>
  {/if}
  <Animateonenterview className="whitespace-pre-line">
    {@html content.html}
  </Animateonenterview>
</section>
