<script>
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  import DynamicSection from '$lib/components/Section/Dynamic Section.svelte'

  import { pages } from '$lib/stores'
  let page = $pages.home
</script>

<!-- <PageTransition>

</PageTransition> -->

<div
  class="w-full min-h-screen flex items-center justify-between bg-gradient-to-t from-neutralDark max-w-[100vw] overflow-hidden"
>
  <!-- <div
    class="w-full max-w-[20%] min-h-screen overflow-hidden z-20 relative justify-center items-center bg-center bg-cover bg-no-repeat"
    style="background-image: url({page.hero.backgroundImage.url}) !important;"
  /> -->
  <video
    width="100%"
    height="100%"
    autoplay
    controls
    muted
    loop
    class="absolute inset-0 min-h-screen object-center z-[-1]"
  >
    <source
      src="https://media.graphassets.com/vOnQJTJkSZ60tbYCLqZc"
      type="video/mp4"
    />
    <track kind="captions" />
  </video>
  <div
    class="max-w-[50%] md:max-w-[40%] mx-auto text-neutralLight min-h-screen"
  >
    <div class="absolute bottom-[10%] left-20 md:max-w-[50%]">
      <Animateonenterview type="flyRight" delay={200}>
        <h1>{page.hero.title}</h1>
      </Animateonenterview>
      <Animateonenterview type="flyRight" delay={600}>
        <p class="body-xl py-2 pr-4">{page.hero.text}</p>
      </Animateonenterview>
    </div>
  </div>
</div>

<div
  class="w-screen py-20 bg-gradient-to-b from-neutralDark to-brandDark"
>
  <div class="block-scrolling-text__line">
    <span>Leadership. </span><span>Ambition. </span><span
      >Responsible Free Thinkers.
    </span><span>Self-Belief. </span><span>Leadership. </span><span
      >Ambition.
    </span><span>Responsible Free Thinkers. </span><span
      >Self-Belief.
    </span><span>Leadership. </span><span>Ambition. </span><span
      >Responsible Free Thinkers.
    </span><span>Self-Belief. </span>
  </div>
  <div class="block-scrolling-text__line">
    <span>Confident. </span><span>Own Identity. </span><span
      >Competitive.
    </span><span>Evolve. </span><span>Responsible. </span><span
      >Confident.
    </span><span>Own Identity. </span><span>Competitive. </span><span
      >Evolve.
    </span><span>Responsible. </span><span>Confident. </span><span
      >Own Identity.
    </span><span>Competitive. </span><span>Evolve. </span><span
      >Responsible.
    </span>
  </div>

  <div class="block-scrolling-text__line">
    <span>Practicalities of Life. </span><span
      >Determination.
    </span><span>Kindness. </span><span>Community. </span><span
      >Practicalities of Life.
    </span><span>Determination. </span><span>Kindness. </span><span
      >Community.
    </span><span>Practicalities of Life. </span><span
      >Determination.
    </span><span>Kindness. </span><span>Community. </span>
  </div>

  <div class="block-scrolling-text__line">
    <span>Principles. </span><span>Excellence. </span><span
      >Inclusion.
    </span><span>Engaged. </span><span>Curious. </span><span
      >Sharp.
    </span><span>Principles. </span><span>Excellence. </span><span
      >Inclusion.
    </span><span>Engaged. </span><span>Curious. </span><span
      >Sharp.
    </span><span>Principles. </span><span>Excellence. </span><span
      >Inclusion.
    </span><span>Engaged. </span><span>Curious. </span><span
      >Sharp.
    </span>
  </div>
</div>

{#each page.sections as section, i}
  <DynamicSection {section} />
{/each}
