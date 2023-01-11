s<script>
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  import Card from '$lib/components/Card/Card.svelte'
  import Carrousel from '$lib/components/Carrousel/Carrousel.svelte'
  import Hero from '$lib/components/Hero/Hero.svelte'
  import Nav from '$lib/components/Nav/Nav.svelte'
  import Download from '../components/download.svelte'

  export let title
  export let text
  export let downloadLinkIos
  export let downloadLinkAndroid
  export let restaurants = []

  export let className

  let currentStep = 0
</script>

<Nav />
<Hero fullHeight {className}>
  <div class="flex flex-col space-y-4 relative" slot="left">
    <h1>{title}</h1>
    <p>{text}</p>
    <Download
      ios={downloadLinkIos}
      android={downloadLinkAndroid}
      class="w-full max-w-[24rem] md:w-96"
    />
  </div>

  <div
    class="h-full overflow-visible bg-cover bg-center bg-no-repeat"
    style="background-image: url('{restaurants[currentStep].image
      ?.url}') !important"
    slot="right"
  >
    {#key restaurants.length}
      <Carrousel
        bind:currentStep
        loop
        items={restaurants}
        let:item
        let:previewed
        let:index
      >
        {#if previewed}
          <Animateonenterview type="flyRight">
            <Card
              className="text-neutralDark text-center bg-neutralLight shadow-lg rounded-3xl overflow-visible h-60"
            >
              <div>
                <img
                  src={item.logo?.url}
                  alt="{item.name} logo"
                  class="w-40 h-40 rounded-xl object-center object-cover -translate-y-20"
                />
                <div class="-translate-y-16">
                  <p class="font-bold">{item.name}</p>
                  <p>{item.meal}</p>
                  <p
                    class="strike-through text-red-600 line-through scale-75"
                  >
                    {item.old_price}EGP
                  </p>
                  <p class="text-green-600">{item.price}EGP</p>
                </div>
              </div>
            </Card>
          </Animateonenterview>
        {/if}
      </Carrousel>
    {/key}
  </div>
</Hero>
