<script>
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  import Section from '$lib/components/Section/Section.svelte'

  import Button from '$lib/components/Button/Button.svelte'
  import Card from '$lib/components/Card/Card.svelte'
  import Go from '$lib/components/Go/Go.svelte'
  import Image from '$lib/components/Image/Image.svelte'
  import List from '$lib/components/List/List.svelte'
  import Quote from '$lib/components/Quote/Quote.svelte'

  import Karnoosh from '$lib/icons/shape/Karnoosh.svelte'

  export let section

  const computeKarnooshPosition = index => {
    if (index === 0)
      return 'left: -3rem !important; top: -3rem !important;'
    else if (index === 2)
      return 'right: -3rem !important; bottom: -3rem !important;'
    else return 'display: none !important;'
  }
</script>

<Animateonenterview>
  <Section {...section}>
    {#each section.content as component, i}
      <Animateonenterview type="flyLeft" delay={200 * i}>
        {#if component.__typename == 'Image'}
          <Image
            alt={component.alt}
            src={component.image.url}
            className="mx-auto"
          />
        {:else if component.__typename == 'Button'}
          <Go to={component.link} redirect={component.redirect}>
            <Button {...component} />
          </Go>
        {:else if component.__typename == 'Quote'}
          <Quote {...component} />
        {:else if component.__typename == 'InfoCard'}
          <Karnoosh
            className="w-32 md:w-40 z-0 absolute text-brand"
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
            <div
              slot="action"
              class="w-full max-w-none flex justify-end"
            >
              <Go
                to={component.buttonLink}
                redirect={component.buttonRedirect}
              >
                <Button label="read more" type={component.type} />
              </Go>
            </div>
          </Card>
        {:else if component.__typename == 'Division'}
          <div
            class="flex items-start text-left space-x-8 mt-4 self-stretch"
          >
            <Image
              src={component.image.url}
              alt="{component.title} - NewCastle School"
              styleOptions={{ size: 'sm' }}
            />
            <div>
              <h3 class="text-lg md:text-xl font-bold">
                {component.title}
              </h3>
              <h3 class="text-lg md:text-xl font-light">
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
