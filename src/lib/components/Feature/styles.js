import { resolve } from '$lib/helpers'

export let feature = options => {
  return [
    {
      classes:
        'relative w-80 md:w-[400px] h-56 md:h-64 z-0 focus-within:z-30 hover:z-30 my-4 md:mx-4 md:my-16 mx-auto cursor-pointer group focus-visible:outline-none transition',
    },
    {
      classes: 'z-30',
      on: [options.active, true],
    },
  ]
}

export let left = options => {
  return [
    {
      classes: '',
    },
    {
      on: [options.reverse, true],
      classes: '',
    },
    {
      on: [options.reverse, false],
      classes: '',
    },
  ]
}

export let right = options => {
  return [
    {
      classes: '',
    },
  ]
}

export let image = options => {
  return [
    {
      classes:
        'absolute inset-0 rounded-[60px] ring-primary ring-1 z-10 transition duration-500 w-full h-56 md:h-64 overflow-hidden object-contain object-center',
    },
    {
      classes: '',
      on: [options.active, true],
    },
  ]
}

export let title = options => {
  return [
    {
      classes:
        'select-none text-neutral-light text-4xl md:text-5xl md:translate-y-1 -translate-x-4 one-liner absolute left-8 md:left-10 uppercase transition duration-300 ease-out origin-top-left w-[70%] leading-8 scale-[50%] top-8 z-20 text-left group-focus-within:scale-[60%] group-hover:scale-[60%] md:max-w-[150px]',
    },
    {
      classes: 'scale-[60%]',
      on: [options.active, true],
    },
    {
      classes: '',
      on: [options.active, false],
    },
  ]
}

export let content = options => {
  return [
    {
      classes:
        'p-2 w-4/5 z-20 absolute -bottom-5 justify-end transition duration-500 ease-out text-left group-focus-within:translate-x-4 group-hover:translate-x-4 text-neutral-light',
    },
    {
      classes: 'translate-x-4',
      on: [options.active, true],
    },
    {
      classes: '',
      on: [options.active, false],
    },
  ]
}

export let otherImage = options => {
  return [
    {
      classes:
        'absolute transition duration-500 rounded-[60px] ease-out z-0 opacity-0 w-80 md:w-[400px] h-48 md:h-60 overflow-hidden object-contain object-center group-focus-within:delay-200 group-hover:delay-200 group-focus-within:z-10 group-hover:z-10 ',
    },
    {
      classes: 'delay-200 z-10',
      on: [options.active, true],
    },
    {
      classes: '',
      on: [options.active, false],
    },
  ]
}

export let cta = options => {
  return [
    {
      classes:
        'my-4 group-focus-within:block group-focus-within:opacity-100 group-hover:block group-hover:opacity-100',
    },
    {
      classes: 'block opacity-100',
      on: [options.active, true],
    },
    {
      classes: 'opacity-0 hidden',
      on: [options.active, false],
    },
  ]
}
export let description = options => {
  return [
    {
      classes:
        'w-full line-clamp-3 group-focus-within:block group-focus-within:opacity-100 group-hover:block group-hover:opacity-100 font-medium',
    },
    {
      classes: 'block opacity-100',
      on: [options.active, true],
    },
    {
      classes: 'opacity-0 hidden',
      on: [options.active, false],
    },
  ]
}
let options
export const config = props => {
  options = props
  return {
    feature: resolve(feature(options)),
    left: resolve(left(options)),
    right: resolve(right(options)),
    image: resolve(image(options)),
    content: resolve(content(options)),
    title: resolve(title(options)),
    otherImage: resolve(otherImage(options)),
    cta: resolve(cta(options)),
    description: resolve(description(options)),
  }
}
