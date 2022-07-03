<script>
  import Karnoosh from './../lib/icons/shape/Karnoosh.svelte'
  import Checkbox from '$lib/components/Checkbox/Checkbox.svelte'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  import Section from '$lib/components/Section/Section.svelte'
  import PageTransition from '$lib/components/Page Transition/Page Transition.svelte'

  import Button from '$lib/components/Button/Button.svelte'
  import Card from '$lib/components/Card/Card.svelte'
  import Go from '$lib/components/Go/Go.svelte'
  import Image from '$lib/components/Image/Image.svelte'
  import List from '$lib/components/List/List.svelte'
  import Quote from '$lib/components/Quote/Quote.svelte'
  import TextInput from '$lib/components/Text Input/TextInput.svelte'
  import Radio from '$lib/components/Radio/Radio.svelte'

  import { fade, slide } from 'svelte/transition'

  import { pages } from '$lib/stores'
  import { submitApplication } from '$lib/gql'
  let Y

  let inputs = {}
  let valid = true
  let submitted = false

  const submit = () => {
    let data = {}
    for (const [key, input] of Object.entries(inputs)) {
      if (typeof input.validate === 'function') input.validate()
      if (!!input.error) valid = false
      if (key != 'terms_and_conditions') data[key] = input.value
    }
    if (valid) {
      submitted = true
      Y = 100
      submitApplication(data)
    }
    valid = true
  }

  const genders = [{ value: 'male' }, { value: 'female' }]
  const divisions = [
    {
      value: 'American',
      image:
        'https://upload.wikimedia.org/wikipedia/en/6/6c/Us_flag_large_38_stars.png',
      stages: [
        'kg1',
        'kg2',
        'grade 1',
        'grade 2',
        'grade 3',
        'grade 4',
        'grade 5',
        'grade 6',
        'grade 7',
        'grade 8',
        'grade 9',
        'grade 10',
        'grade 11',
        'grade 12',
      ],
    },
    {
      value: 'IGCSE',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png',
      stages: [
        'fs1',
        'fs2',
        'year 1',
        'year 2',
        'year 3',
        'year 4',
        'year 5',
        'year 6',
        'year 7',
        'year 8',
        'year 9',
        'year 10',
      ],
    },
    {
      value: 'IB',
      image:
        'https://www.ibo.org/globalassets/digital-toolkit/logos-and-programme-models/dp-programme-logo-en.png',
      stages: ['grade 10', 'grade 11', 'grade 12'],
    },
  ]

  let selectedDivision = 0
  $: stages = divisions[selectedDivision]?.stages

  let page = $pages.application
</script>

<!-- <PageTransition>
  
  </PageTransition> -->

<svelte:window bind:scrollY={Y} />

<div class="w-full relative flex flex-col items-center text-center">
  <div
    class="absolute h-screen top-0 inset-x-0 bg-cover bg-center bg-no-repeat z-[-1]"
    style="background-image: url('{page.hero.backgroundImage?.url}')"
  />
  <div class="py-12 px-4 max-w-lg mt-[10%] text-neutralLight">
    <Animateonenterview delay={200}>
      <h1>{page.hero.title}</h1>
    </Animateonenterview>
    <Animateonenterview type="flyUp" delay={600}>
      <p class="body-xl py-2">{page.hero.text}</p>
    </Animateonenterview>
  </div>

  <div
    class="w-[90%] md:max-w-7xl rounded-[70px] bg-neutralLight p-12 md:px-20 relative"
  >
    {#if !submitted}
      <div transition:slide>
        <fieldset
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch justify-between text-left my-8 md:my-12"
        >
          <h2
            class="col-span-1 sm:col-span-2 lg:col-span-3 max-w-[12rem] md:max-w-md border-b-8 border-brand whitespace-nowrap pb-4 mb-4"
          >
            Student Information
          </h2>
          <TextInput
            label="name"
            validations={['required']}
            bind:this={inputs['name']}
          />
          <TextInput
            label="email"
            validations={['email', 'required']}
            type="email"
            bind:this={inputs['email']}
          />
          <TextInput type="slotted" label="gender">
            <div class="h-2/3 flex items-center">
              <Radio
                items={genders}
                let:item={gender}
                let:index
                let:selected
                bind:this={inputs['gender']}
                className="flex space-x-4 md:space-x-7"
              >
                <div
                  class="flex space-x-2 items-center transition duration-300 ease-out {selected ===
                  index
                    ? 'text-brand'
                    : 'text-neutralDark'}"
                >
                  <div
                    class="w-4 h-4 rounded-full border border-current transition duration-300 ease-out {selected ===
                    index
                      ? 'bg-current ring-1 ring-offset-2 ring-current'
                      : 'bg-neutralLight'}"
                  />
                  <p>{gender.value}</p>
                </div>
              </Radio>
            </div>
          </TextInput>
          <TextInput
            label="mobile number"
            validations={['required']}
            bind:this={inputs['mobile']}
          />
          <TextInput
            label="address"
            validations={['required']}
            bind:this={inputs['address']}
          />
          <TextInput
            label="birthdate"
            validations={['required']}
            type="date"
            bind:this={inputs['birthdate']}
          />
        </fieldset>
        <fieldset
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch justify-between text-left my-8 md:my-12"
        >
          <h2
            class="col-span-1 sm:col-span-2 lg:col-span-3 max-w-[12rem] md:max-w-md border-b-8 border-brand whitespace-nowrap pb-4 mb-4"
          >
            Guardian Information
          </h2>
          <h3
            class="col-span-1 sm:col-span-2 lg:col-span-3 font-normal -mb-2"
          >
            Father/Guardian #1
          </h3>
          <TextInput
            label="name"
            validations={['required']}
            bind:this={inputs['father_name']}
          />
          <TextInput
            label="email"
            validations={['email', 'required']}
            type="email"
            bind:this={inputs['father_email']}
          />
          <TextInput
            label="mobile number"
            validations={['required']}
            bind:this={inputs['father_mobile']}
          />
          <TextInput
            label="occupation"
            validations={['required']}
            bind:this={inputs['father_occupation']}
          />
          <TextInput
            label="company"
            validations={['required']}
            bind:this={inputs['father_company']}
          />
          <TextInput
            label="office number"
            bind:this={inputs['father_office']}
          />

          <h3
            class="col-span-1 sm:col-span-2 lg:col-span-3 font-normal -mb-2 mt-4"
          >
            Mother/Guardian #2
          </h3>
          <TextInput
            label="name"
            validations={['required']}
            bind:this={inputs['mother_name']}
          />
          <TextInput
            label="email"
            validations={['email', 'required']}
            type="email"
            bind:this={inputs['mother_email']}
          />
          <TextInput
            label="mobile number"
            validations={['required']}
            bind:this={inputs['mother_mobile']}
          />
          <TextInput
            label="occupation"
            validations={['required']}
            bind:this={inputs['mother_occupation']}
          />
          <TextInput
            label="company"
            validations={['required']}
            bind:this={inputs['mother_company']}
          />
          <TextInput
            label="office number"
            bind:this={inputs['mother_office']}
          />
        </fieldset>
        <fieldset
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch justify-between text-left my-8 md:my-12"
        >
          <h2
            class="col-span-1 sm:col-span-2 lg:col-span-3 max-w-[12rem] md:max-w-md border-b-8 border-brand whitespace-nowrap pb-4 mb-4"
          >
            Additional Information
          </h2>
          <TextInput
            type="slotted"
            label="school/division"
            className="col-span-1 sm:col-span-2 lg:col-span-3 min-w-[100%]"
          >
            <Radio
              items={divisions}
              let:item={division}
              let:index
              bind:selected={selectedDivision}
              bind:this={inputs['division']}
              on:select={(inputs['grade'].value = '')}
              className="min-w-[100%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-2"
            >
              <div
                class="flex items-center bg-neutral p-6 space-x-4 ring transition-300 rounded-xl {selectedDivision ===
                index
                  ? 'shadow-sm ring-brand'
                  : 'shadow-lg ring-transparent'}"
              >
                <img
                  src={division.image}
                  alt="{divisions.value} Division - NewCastle School"
                  class="h-10"
                />
                <h3>{division.value}</h3>
              </div>
            </Radio>
          </TextInput>
          <TextInput
            type="dropdown"
            label="stage"
            validations={['required']}
            options={stages}
            bind:this={inputs['grade']}
          />
          <TextInput
            label="previous school name"
            validations={['required']}
            options={stages}
            bind:this={inputs['previous_school']}
          />
          <TextInput
            label="how did you hear about us?"
            placeholder="social media, website, friends, etc."
            validations={['required']}
            bind:this={inputs['referred_by']}
          />
        </fieldset>
        <Checkbox
          validations={['required']}
          bind:this={inputs['terms_and_conditions']}
          className="my-6"
        >
          <p class="text-left max-w-none w-full">
            By filling this application you agree to all the terms and
            conditions of NewCastle International School that has the
            right to accept or reject any application with or without
            providing a reason. You will be contacted by our
            admissions officers upon availability of seats in the
            required grades.
          </p>
        </Checkbox>
        <div class="w-full flex justify-center mt-6">
          <Button
            type="secondary"
            label="submit"
            shape="default"
            on:click={submit}
          />
        </div>
      </div>
    {:else}
      <div
        class="flex flex-col space-y-3 items-center justify-center max-w-lg mx-auto min-h-[60vh]"
        transition:fade={{ delay: 800 }}
      >
        <h2 class="text-brand">
          Thank you for submiting your application
        </h2>
        <p>We will review your information and contact you shortly</p>
        <Go to="/">
          <Button type="primary" label="home" />
        </Go>
      </div>
    {/if}
    {#each ['', '', '', ''] as karnoosh, i}
      <Karnoosh
        className="text-brand w-40 md:w-48 z-[-2] absolute {i % 2 == 0
          ? '-left-32'
          : '-right-32'}"
        styles="top: {24 * (i + 1)}rem !important;"
      />
    {/each}
  </div>
</div>

{#each page.sections as section, i}
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
              class="flex items-start text-left space-x-8 my-4 self-stretch"
            >
              <Image
                src={component.image.url}
                alt="{component.title} - NewCastle School"
                styleOptions={{ size: 'sm' }}
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
