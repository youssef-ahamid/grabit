<script>
  import Animateonenterview from "$lib/components/Animate On Enter View/animate on enter view.svelte";
  import Section from "$lib/components/Section/Section.svelte";
  import PageTransition from "$lib/components/Page Transition/Page Transition.svelte";

  import Button from "$lib/components/Button/Button.svelte";
  import Card from "$lib/components/Card/Card.svelte";
  import Go from "$lib/components/Go/Go.svelte";
  import Image from "$lib/components/Image/Image.svelte";
  import List from "$lib/components/List/List.svelte";
  import Quote from "$lib/components/Quote/Quote.svelte";

  import Karnoosh from "$lib/icons/shapes/Karnoosh.svelte";

  const components = {
    Button,
    Card,
    Go,
    Image,
    List,
    Quote,
  };

  import { pages } from "$lib/stores";
  import { logo } from "$lib/config";

  let page = $pages.home;

  const computeKarnooshPosition = (index) => {
    if (index === 0) return "left: -3rem !important; top: -3rem !important;";
    else if (index === 2)
      return "right: -3rem !important; bottom: -3rem !important;";
  };
</script>

<!-- <PageTransition>

</PageTransition> -->

<div
  class="w-full min-h-screen flex items-center justify-between bg-gradient-to-t from-neutralDark"
>
  <div
    class="w-full max-w-[20%] min-h-screen overflow-hidden z-20 relative justify-center items-center bg-center bg-cover bg-no-repeat"
    style="background-image: url({page.hero.backgroundImage.url}) !important;"
  />
  <video
    width="80%"
    height="100%"
    autoplay
    controls
    muted
    loop
    class="absolute inset-0 left-[20%] min-h-screen object-center"
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
    <div class="absolute bottom-[10%] left-[25%] md:max-w-[50%]">
      <Animateonenterview type="flyRight" delay={200}>
        <h1>{page.hero.title}</h1>
      </Animateonenterview>
      <Animateonenterview type="flyRight" delay={600}>
        <p class="body-xl py-2 pr-4">{page.hero.text}</p>
      </Animateonenterview>
    </div>
  </div>
</div>

{#each page.sections as section, i}
  <Animateonenterview>
    <Section {...section}>
      {#each section.content as component, i}
        <Animateonenterview type="flyLeft" delay={200 * i}>
          {#if component.__typename == "Image"}
            <Image
              alt={component.alt}
              src={component.image.url}
              className="mx-auto"
            />
          {:else if component.__typename == "Button"}
            <Go to={component.link} redirect={component.redirect}>
              <Button {...component} />
            </Go>
          {:else if component.__typename == "Quote"}
            <Quote {...component} />
          {:else if component.__typename == "InfoCard"}
            <Karnoosh
              className="w-24 absolute text-brand"
              styles={computeKarnooshPosition(i)}
            />
            <Card {...component}>
              <List
                items={component.infoItem}
                let:item
                type="arrow"
                className="min-h-[10rem]"
              >
                {item}
              </List>
              <div slot="action" class="w-full max-w-none flex justify-end">
                <Go
                  to={component.buttonLink}
                  redirect={component.buttonRedirect}
                >
                  <Button label="read more" type={component.type} />
                </Go>
              </div>
            </Card>
          {:else if component.__typename == "Division"}
            <div class="flex items-start text-left space-x-8 my-4 self-stretch">
              <Image
                src={component.image.url}
                alt="{component.title} - NewCastle School"
                styleOptions={{ size: "sm" }}
              />
              <div>
                <h3 class="text-xl md:text-2xl font-bold">
                  {component.title}
                </h3>
                <h3 class="text-xl md:text-2xl font-light">
                  {component.subtitle}
                </h3>
                <p class="py-2">{component.text}</p>
                <Go to={component.link} redirect={component.redirect}>
                  <Button
                    type="primary"
                    icon="chevron_right"
                    label="Read More"
                  />
                </Go>
              </div>
            </div>
          {/if}
        </Animateonenterview>
      {/each}
    </Section>
  </Animateonenterview>
{/each}
