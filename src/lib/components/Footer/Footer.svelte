<script>
  /* props */
  export let contactInformation = {
    phoneNumber: "+201200525233",
    email: "zaagel@samuraisoftware.house",
    address: "4517 Washington Ave. Manchester, Kentucky 39495",
    location: "",
  }

  export let copyright =
    'Copyright forever and ever by Samurai Software House'
  export let className = '' // *, custom wrapper classes

  import Section from '$lib/components/Section/Section.svelte'
  import List from '$lib/components/List/List.svelte'
  import NavLink from '$lib/components/Nav Link/Nav Link.svelte'
  import Go from '$lib/components/Go/Go.svelte'

  /* styles */
  import { config, link } from './styles'
  import Copyable from '../Copyable/Copyable.svelte'
  import { groups, links } from '$lib/config'
  console.log(groups, links)
  import Image from '../Image/Image.svelte'
  import Animateonenterview from '../Animate On Enter View/animate on enter view.svelte'
import Emailattachment from '$lib/icons/social/email attachment.svelte'
import Location from '$lib/icons/location.svelte';
import Phone from '$lib/icons/social/phone.svelte';
  $: classes = config()
</script>

<Section id="footer" noContain className="bg-neutral">
  <footer class={`${classes.footer} ${className}`}>
    <nav class={classes.links}>
      <div class="flex flex-wrap md:flex-nowrap space-y-12 items-start justify-start">
        <div class="h-full">
          <p class="font-bold pb-4 px-2 md:px-4">School Info</p>
          <List
            items={links.filter(link => link.group === 'info')}
            let:item={link}
            className="grid grid-cols-2 gap-8"
            let:index
          >
            <Animateonenterview type="flyUp" delay={100 * index}>
              <NavLink
                to={link.to}
                redirect={link.redirect}
                text={link.text}
                className={classes.link}
              />
            </Animateonenterview>
          </List>
        </div>
        <div class="h-full">
          <p class="font-bold pb-4 px-2 md:px-4">Useful Links</p>
          <List
            items={links.filter(link => link.group === 'useful')}
            let:item={link}
            className="grid grid-cols-2 md:grid-cols-1 gap-8"
            let:index
          >
            <Animateonenterview type="flyUp" delay={100 * index}>
              <NavLink
                to={link.to}
                redirect={link.redirect}
                text={link.text}
                className={classes.link}
              />
            </Animateonenterview>
          </List>
        </div>
      </div>

      <div class="flex flex-col min-w-[35%]">
        <p class="font-bold pb-4 px-2 md:px-4">Get In Touch</p>
        <Animateonenterview type="flyUp" className="py-2 my-2" delay="200">
          <Go to="tel:{contactInformation.phoneNumber}" redirect className="flex space-x-2">
            <Phone className="w-8 text-brand" />
            <p class="body-sm font-bold hover:text-brand transition-300">{contactInformation.phoneNumber}</p>
          </Go>
        </Animateonenterview>
        <Animateonenterview type="flyUp" className="py-2 my-2" delay="400">
          <div class="flex space-x-2">
            <Location className="w-8 text-brand" />
            <Go to={contactInformation.location}>
              <p class="body-sm font-bold hover:text-brand transition-300">{contactInformation.address}</p>
            </Go>
          </div>
        </Animateonenterview>
        <Animateonenterview type="flyUp" className="py-2 my-2" delay="600">
          <div class="flex space-x-2">
            <Emailattachment className="w-8 text-brand" />
            <Copyable value={contactInformation.email}>
              <p class="body-sm font-bold hover:text-brand transition-300">{contactInformation.email}</p>
            </Copyable>
          </div>
        </Animateonenterview>
      </div>
    </nav>
    <div class={classes.copyright}>{copyright}</div>
  </footer>
</Section>
