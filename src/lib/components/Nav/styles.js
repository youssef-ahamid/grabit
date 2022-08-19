import { resolve } from '$lib/helpers'

export let iconWrapper = options => {
  return [
    {
      classes:
        'z-[999] transition duration-300 ease-out w-full h-20 flex flex-col items-center justify-center text-center bg-neutral z-[999]',
    },
  ]
}

export let icon = options => {
  return [
    {
      classes: `transition duration-500 text-brand`,
    },
    {
      on: [options.active, true],
      classes: 'rotate-[270deg] scale-90',
    },
    {
      on: [options.active, false],
      classes: 'scale-75',
    },
  ]
}
export let active = options => {
  return [
    {
      classes: `before:content-['+'] before:pr-3 decoration-secondary`,
    },
  ]
}

export let inactive = options => {
  return [
    {
      classes:
        'decoration-secondary hover:decoration-primary hover:opacity-50',
    },
  ]
}

export let link = options => {
  return [
    {
      classes:
        'm-1 my-0 capitalize text-base lg:text-lg font-medium lg:font-normal max-w-fit lg:max-w-full',
    },
  ]
}

export let links = options => {
  return [
    {
      classes:
        'lg:max-w-[90%] w-full mx-auto flex flex-col lg:flex-row justify-end py-12 lg:py-4 lg:px-2',
    },
  ]
}

export let nav = options => {
  return [
    {
      classes:
        'fixed bg-brandDark top-0 bottom-0 left-0 min-w-[20rem] max-w-fit z-[900] transition duration-700 ease-out',
    },
    {
      classes: '-translate-x-[110%]',
      on: [options.active, false],
    },
    {
      classes: 'translate-x-12',
      on: [options.active, true],
    },
  ]
}

export const config = props => {
  return {
    iconWrapper: resolve(iconWrapper(props)),
    icon: resolve(icon(props)),
    active: resolve(active(props)),
    inactive: resolve(inactive(props)),
    link: resolve(link(props)),
    nav: resolve(nav(props)),
    links: resolve(links(props)),
  }
}
