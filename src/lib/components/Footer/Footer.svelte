<script>
  /* props */
  export let email = 'zaagel@samuraisoftware.house'
  export let phone = '+201200525233'
  export let phoneDisplay = '(+20)-120-0525-233'

  export let socials = []

  export let copyright =
    'Copyright forever and ever by Samurai Software House'

  export let className = '' // *, custom wrapper classes

  import Section from '$lib/components/Section/Section.svelte'
  import Go from '$lib/components/Go/Go.svelte'

  /* styles */
  import { config, link } from './styles'
  import Animateonenterview from '../Animate On Enter View/animate on enter view.svelte'

  import Icon from '$lib/components/Icon/Icon.svelte'
  import { logoWhite } from '$lib/config'

  $: classes = config()
</script>

<div class="bg-transparent">
  <Section
    id="footer"
    noContain
    className="bg-neutralDark max-w-[100vw] relative overflow-visible"
  >
    <div
      class="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-neutralLight rounded-3xl shadow-2xl w-full max-w-[80%] grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-12"
    >
      <div
        class="flex space-x-2 md:space-x-4 px-2 md:px-4 items-center"
      >
        <div class="p-4 rounded-full bg-brand">
          <Icon
            name="emailAttachment"
            className="w-6 text-neutralLight"
          />
        </div>
        <Go to="mailto:{email}">
          <p
            class="font-bold hover:text-brand text-xs md:text-sm slide-underline transition-300"
          >
            {email}
          </p>
        </Go>
      </div>
      <div
        class="flex space-x-2 md:space-x-4 px-2 md:px-4 items-center"
      >
        <div class="p-4 rounded-full bg-brand">
          <Icon name="phone" className="w-6 text-neutralLight" />
        </div>
        <Go to="tel:{phone}">
          <p
            class="font-bold hover:text-brand text-xs md:text-sm slide-underline transition-300"
          >
            {phoneDisplay || phone}
          </p>
        </Go>
      </div>
      <div
        class="h-[70%] w-px bg-neutralDark absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hidden md:block"
      />
    </div>
    <footer
      class={`${classes.footer} max-w-[80%] mx-auto pb-12 ${className}`}
    >
      <div
        class="w-48 text-left float-left mt-10 flex flex-col justify-start items-start text-neutralLight"
      >
        <img {...logoWhite} class="w-24 -mb-4" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Enim bibendum iaculis
        </p>
        <div class="flex space-x-2">
          {#each socials as social, i}
            {#if social}
              <Animateonenterview type="flyUp" delay={200 + 200 * i}>
                <Go to={social.link} redirect>
                  <Icon name={social.name} />
                </Go>
              </Animateonenterview>
            {/if}
          {/each}
        </div>
      </div>
      <p
        class="font-medium text-xs text-neutral-500 absolute right-2 bottom-2 text-neutralLight"
      >
        {copyright}
      </p>
    </footer>
  </Section>
</div>
