<script>
  /* props */
  export let features = []
  export let zigzag = false
  export let className = '' // *, custom wrapper classes

  import List from '$lib/components/List/List.svelte'
  import Feature from '$lib/components/Feature/Feature.svelte'
  import Button from '$lib/components/Button/Button.svelte'
  import Go from '$lib/components/Go/Go.svelte'

  /* styles */
  import { config } from './styles'
  import Animateonenterview from '../Animate On Enter View/animate on enter view.svelte'
  $: classes = config()
</script>

<List
  items={features}
  let:prop={feature}
  className={`${classes.list} ${className}`}
>
  <Animateonenterview
    type={features.indexOf(feature) % 2 === 1 && zigzag
      ? 'flyLeft'
      : 'flyRight'}
  >
    <Feature
      reverse={features.indexOf(feature) % 2 === 1 && zigzag}
      className={classes.feature}
      images={feature.images}
      title={feature.title}
      image={feature.preview}
    >
      {#if feature.body}
        <p>{feature.body}</p>
      {/if}
      {#if !!feature.cta}
        <Go to={feature.cta.link} slot="cta">
          <Button
            label={feature.cta.label}
            type={feature.cta.type}
            shape={feature.cta.shape}
            icon={feature.cta.icon}
            reverse={feature.cta.reverse}
            className={feature.cta.className}
          />
        </Go>
      {/if}
    </Feature>
  </Animateonenterview>
</List>
