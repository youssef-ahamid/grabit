<script>
  import { getComponentData } from '$lib/helpers'

  /* props */
  export let links = []
  export let content

  let contactInformation = getComponentData(
    content,
    'ContactInformation'
  ).contact

  export let copyright =
    'Copyright forever and ever by Samurai Software House'
  export let className = '' // *, custom wrapper classes

  import Section from '$lib/components/Section/Section.svelte'
  import List from '$lib/components/List/List.svelte'
  import NavLink from '$lib/components/Nav Link/Nav Link.svelte'
  import Go from '$lib/components/Go/Go.svelte'

  /* styles */
  import { config } from './styles'
  import Copyable from '../Copyable/Copyable.svelte'
  import Image from '../Image/Image.svelte'
  import Animateonenterview from '../Animate On Enter View/animate on enter view.svelte'
  $: classes = config()
</script>

<Section id="footer" noContain className="bg-neutral">
  <footer class={`${classes.footer} ${className}`}>
    <nav class={classes.links}>
      <List
        items={links}
        let:prop={link}
        className={classes.list}
        let:index
      >
        <Animateonenterview type="flyUp" delay={100 * index}>
          <NavLink {...link} noList className={classes.link} />
        </Animateonenterview>
      </List>
      <div class="flex flex-wrap">
        <Animateonenterview type="flyUp" delay="200">
          <div class="mx-3 my-2">
            <p class="font-bold body-sm">Email</p>
            <Copyable value={contactInformation.email}>
              <p class="body-sm">{contactInformation.email}</p>
            </Copyable>
          </div>
        </Animateonenterview>
        <Animateonenterview type="flyUp" delay="400">
          <div class="mx-3 my-2">
            <p class="font-bold body-sm">Phone</p>
            <Go to="tel:{contactInformation.phoneNumber}" redirect>
              <p class="body-sm">{contactInformation.phoneNumber}</p>
            </Go>
          </div>
        </Animateonenterview>
        <Animateonenterview type="flyUp" delay="600">
          <div class="mx-3 my-2">
            <p class="font-bold body-sm">Address</p>
            <p class="body-sm whitespace-pre-line">
              {contactInformation.address}
            </p>
          </div>
        </Animateonenterview>
      </div>
    </nav>
    <div class={classes.copyright}>{copyright}</div>
  </footer>
</Section>