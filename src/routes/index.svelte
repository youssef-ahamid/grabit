<script>
  import Accordian from '$lib/components/Accordian/Accordian.svelte'
  import Button from '$lib/components/Button/Button.svelte'
  import Hero from '$lib/components/Hero/Hero.svelte'
  import Image from '$lib/components/Image/Image.svelte'
  import List from '$lib/components/List/List.svelte'
  import TextInput from '$lib/components/Text Input/TextInput.svelte'
  import TextSearch from '$lib/components/TextSearch/TextSearch.svelte'
  import Card from '$lib/components/Card/Card.svelte'
  import Modal from '$lib/components/Modal/Modal.svelte'
  import Form from '$lib/components/Form/Form.svelte'
  import Chevron from '$lib/icons/shape/chevron.svelte'
  import Section from '$lib/components/Section/Section.svelte'
  import { fade } from 'svelte/transition'
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'

  import { api } from '$lib/helpers'
import Tabs from '$lib/components/Tabs/Tabs.svelte'
  const redditAPI = new api('https://www.reddit.com')

  let interests = [
    { text: 'philosophy 🤔' },
    { text: 'art 🖼' },
    { text: 'history 📜' },
    { text: 'science' },
    { text: 'technology' },
    { text: 'gaming' },
    { text: 'music' },
    { text: 'movies' },
    { text: 'books' },
    { text: 'television' },
    { text: 'comics' },
    { text: 'anime' },
    { text: 'cartoons' },
    { text: 'humor' },
    { text: 'philosophy 🤔' },
    { text: 'art 🖼' },
    { text: 'history 📜' },
    { text: 'science' },
    { text: 'technology' },
    { text: 'gaming' },
    { text: 'music' },
    { text: 'movies' },
    { text: 'books' },
    { text: 'television' },
    { text: 'comics' },
    { text: 'anime' },
    { text: 'cartoons' },
    { text: 'humor' },
  ]

  for (let i = 0; i < interests.length; i++) {
    const interest = interests[i]
    const t = () => {
      let activeInterval = setInterval(() => {
        interest.active = true
      }, 15000)
      let closeInterval = setInterval(() => {
        interest.active = false
      }, 4000)
    }
    let timeout = setTimeout(t, i * 1000)
  }

  let items = [
    {
      title: 'Customize Match-making to your community',
      content:
        'Accordian is a component that displays a list of items in a collapsible format.',
      image: 'https://picsum.photos/id/237/200/200',
    },
    {
      title: 'Make it easy to start conversations',
      content:
        'Accordian is a component that displays a list of items in a collapsible format.',
      image: 'https://picsum.photos/id/337/200/200',
    },
    {
      title: 'Attract & Onboard new members with ease',
      content:
        'Accordian is a component that displays a list of items in a collapsible format.',
      image: 'https://picsum.photos/id/437/200/200',
    },
    {
      title: 'Enable Community Activities',
      content:
        'Accordian is a component that displays a list of items in a collapsible format. Accordian is a component that displays a list of items in a collapsible format. Accordian is a component that displays a list of items in a collapsible format.',
      image: 'https://picsum.photos/id/537/200/200',
    },
    {
      title: 'Discover what makes people engage',
      content:
        'Accordian is a component that displays a list of items in a collapsible format.',
      image: 'https://picsum.photos/id/137/200/200',
    },
    {
      title: 'Build & Grow an Inclusive Community',
      content:
        'Accordian is a component that displays a list of items in a collapsible format. Accordian is a component that displays a list of items in a collapsible format. Accordian is a component that displays a list of items in a collapsible format.',
      image: 'https://picsum.photos/id/37/200/200',
    },
  ]
  let activeAccordian = 0

  let tabs = [
    {
      title: "Join space",
      text: "Make text your profile text here now there yes we can make it. yes we can make it. This changes with each picture",
      image: "https://picsum.photos/id/237/200/200",
    },
    {
      title: "Add interests",
      text: "text your profile text here now there yes we can make it. yes we can make it. This changes with each picture",
      image: "https://picsum.photos/id/237/200/200",
    },
    {
      title: "Connect",
      text: "Make your profile text here now there yes we can make it. yes we can make it. This changes with each picture",
      image: "https://picsum.photos/id/237/200/200",
    }
  ]

  let fears = [
    {
      title: 'privacy',
      text: 'Hamada has privacy like no other. You never have to worry about someone smelling your fart.',
      icon: 'privacy',
    },
    {
      title: 'privacy',
      text: 'Hamada has privacy like no other. You never have to worry about someone smelling your fart.',
      icon: 'privacy',
    },
    {
      title: 'privacy',
      text: 'Hamada has privacy like no other. You never have to worry about someone smelling your fart.',
      icon: 'privacy',
    },
  ]

  let pros = [
    {
      title: 'Find Buddies & Shared Activities',
      text: "Don't miss out on connecting with people who are curious about what you love. Meet new people & make real connections over what matters.",
      image:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Customize your identity for each community',
      text: "It's hard to know who to approach & how to approach them. Find out who you match with in your communities & easily start conversations.",
      image:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'Never miss out on people you can talk to',
      text: 'You are much more than your social media profile picture! Create different KLIK profiles for your interests to connect with people in different communities.',
      image:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
  ]

  let modalActive = false

  function clicked(e) {
    modalActive = !modalActive
    console.log(e)
  }
</script>

<Hero hideBreadcrumb={true} fullHeight>
  <div slot="left" class="flex-col space-y-4">
    <h1>
      Find Like minded People & Easily Start Conversations/ in any
      group or community
    </h1>
    <p>
      KLIK connects you with people who share your interests, goals &
      experiences in any community or group. Easily start
      conversations & make new friends in any group or community.
    </p>
    <Button label="get early access" on:click={clicked} />
  </div>
  <div slot="right">
    <Image
      src="https://picsum.photos/id/10/200/200"
      styleOptions={{ size: 'lg' }}
    />
  </div>
</Hero>

<Section noContain>
  <div class="py-20">
    <h2 class="mx-auto max-w-fit px-[5%] py-12">
      Create match-making spaces for anything, anywhere.
    </h2>
    <List
      items={interests.slice(0, interests.length/3)}
      let:item
      let:index
      horizontal
      className="space-x-4 md:space-x-8 flex-nowrap ml-4"
    >
        <p
          class="selection-none whitespace-nowrap text-2xl md:text-5xl font-bold pt-4 transition-300 {item.active
            ? 'text-neutral-dark'
            : 'outline-text text-neutral-light hover:text-neutral-dark'}"
        >
          {item.text}
        </p>
    </List>
    <List
      items={interests.slice(interests.length/3, 2*interests.length/3)}
      let:item
      let:index
      horizontal
      className="space-x-4 md:space-x-8 flex-nowrap -ml-8"
    >
        <p
          class="selection-none whitespace-nowrap text-2xl md:text-5xl font-bold pt-4 transition-300 {item.active
            ? 'text-neutral-dark'
            : 'outline-text text-neutral-light hover:text-neutral-dark'}"
        >
          {item.text}
        </p>
    </List>
    <List
      items={interests.slice(2*interests.length/3)}
      let:item
      let:index
      horizontal
      className="space-x-4 md:space-x-8 flex-nowrap ml-4"
    >
        <p
          class="cursor-crosshair whitespace-nowrap text-2xl md:text-5xl font-bold pt-4 transition-300 {item.active
            ? 'text-neutral-dark'
            : 'outline-text text-neutral-light hover:text-neutral-dark'}"
        >
          {item.text}
        </p>
    </List>
  </div>
</Section>

<!-- 
<TextSearch
  api={redditAPI}
  path="/api/search_reddit_names.json?query="
  itemsKey="names"
/>
-->

<Modal bind:active={modalActive}>
  <Form
    inputs={[
      {
        component: TextInput,
        data: { label: 'Email', validations: ['email'] },
      },
      {
        component: TextInput,
        data: { label: 'Name', validations: ['required'] },
      },
    ]}
    button={{ label: 'join' }}
    on:submit={clicked}
  />
</Modal>

<Section>
  <Tabs {tabs} let:tab>
    <div slot="header" let:title let:index let:active>
      <h4 class="border-b-4 py-4 {active? 'border-current text-primary': 'border-transparent text-neutral-dark'}">{(index + 1) + '. ' + title}</h4>
    </div>
    <div>
      <p class="py-8">{tab.text}</p>
    </div>
  </Tabs>
</Section>

<Section className="bg-tertiary">
  <div
    class="flex flex-col items-center justify-center text-center space-y-12 py-8"
  >
    <div class="text-center max-w-[80%] mx-auto">
      <h2>Discover who you can connect with in your communities</h2>
      <p class="mx-auto py-2">
        It’s easy to quickly make new friends, gather around the
        topics or hobbies you love, build your professional network,
        or just have some fun.
      </p>
    </div>

    <List
      horizontal
      items={pros}
      let:item
      className="space-y-8 md:space-y-0 md:space-x-6"
    >
      <div
        class="flex flex-col space-y-4 justify-center items-center md:max-w-sm"
      >
        <Image
          src={item.image}
          styleOptions={{ size: 'md' }}
          className="max-w-fit mx-auto"
        />
        <h4 class="text-primary">{item.title}</h4>
        <p>{item.text}</p>
      </div>
    </List>

    <Button
      label="get early access"
      type="primary"
      on:click={clicked}
    />
  </div>
</Section>

<Section>
  <div class="text-center py-12">
    <h2 class="max-w-[50%] mx-auto">
      The Easiest Way to Get People Engaged in Any Communtity
    </h2>
    <p class="py-2 mx-auto">
      Match people based on common <span
        class="text-primary font-bold"
        >interests/goals/passions/experiences</span
      >
    </p>
  </div>

  <Hero>
    <div slot="left">
      <Accordian {items} bind:open={activeAccordian} />
    </div>
    <div slot="right">
      {#key activeAccordian}
        <Animateonenterview>
          <Image
            src={items[activeAccordian].image}
            styleOptions={{ size: 'lg' }}
            class="mx-auto"
          />
        </Animateonenterview>
      {/key}
    </div>
  </Hero>
</Section>

<Section>
  <div class="flex-col justify-start items-center space-y-12">
    <h2 class="mx-auto max-w-fit">KLIK has your back</h2>
    <List
      items={fears}
      let:item
      horizontal
      justify="between"
      className="md:space-x-6 md:flex-nowrap"
    >
      <Card
        type="primary"
        styleOptions={{ ring: true }}
        title={item.title}
        icon={item.icon}
      >
        <p class="text-neutral-dark body-sm pt-4">{item.text}</p>
      </Card>
    </List>
  </div>
</Section>

<Section className="bg-primary text-neutral-light" fullHeight>
  <div
    class="flex flex-col items-center justify-center text-center space-y-6 py-8"
  >
    <Image
      src="https://picsum.photos/id/10/200/200"
      styleOptions={{ size: 'lg' }}
    />
    <div class="pb-6">
      <h2>Ready to start connecting with like minded people?</h2>
      <p class="font-semibold mx-auto">
        Don't miss out on connecting with people who are curious about
        what you love. Meet new people & make real connections over
        what matters.
      </p>
    </div>
    <Button label="connect now" type="secondary" on:click={clicked} />
  </div>
</Section>
