import { resolve } from '$lib/helpers'

export let iconWrapper = options => {
  return [
    {
      classes:
        'transition duration-300 ease-out w-12 h-12 scale-125 pl-1 flex rounded-full flex-col items-center justify-center text-center lg:w-16 fixed lg:hidden shadow-secondary/30 right-8 top-10 z-[999]',
    },
    {
      on: [options.active, true],
      classes: 'shadow-none',
    },
    {
      on: [options.active, false],
      classes: 'shadow-lg',
    },
    {
      on: [options.type, 'primary'],
      classes: 'bg-neutral-light text-primary',
    },
    {
      on: [options.type, 'secondary'],
      classes: 'bg-primary text-neutral-light',
    },
  ]
}

export let icon = options => {
  return [
    {
      classes: `transition duration-500`,
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
        'm-2 capitalize text-base lg:text-lg font-medium lg:font-normal max-w-fit lg:max-w-full',
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
        'fixed lg:absolute lg:mt-8 lg:flex lg:justify-end lg:bg-white ring ring-primary -ml-1 lg:ml-0 lg:ring-transparent transition duration-500 ease-out top-0 left-0 bottom-0 lg:bottom-auto lg:translate-x-0 lg:right-0 w-full p-4 z-[998] bg-neutral-light',
    },
    {
      on: [options.active, true],
      classes: 'translate-x-0',
    },
    {
      on: [options.active, false],
      classes: '-translate-x-full',
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
