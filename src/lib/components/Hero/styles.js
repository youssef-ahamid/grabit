import { resolve } from '$lib/helpers'

export let hero = options => {
  return [
    {
      classes:
        'w-full flex items-center md:justify-between flex-wrap md:flex-nowrap mt-12 md:mt-0',
    },
    { on: [options.fullHeight, true], classes: 'min-h-screen' },
    { on: [options.reverse, true], classes: '' },
    { on: [options.reverse, false], classes: '' },
  ]
}

export let cta = options => {
  return [
    {
      classes: '',
    },
  ]
}

export let logoWrapper = ''
export let logo = ''
export let logoInner = ''
export let logoOuter = ''

export let left = 'px-6 py-4 md:py-0 md:px-12 relative md:max-w-[55%]'
export let right =
  'px-1 py-4 md:py-0 md:px-12 relative -mt-12 md:mt-0 min-w-[45%] md:max-w-[50%] mx-auto'

let options
export const config = props => {
  options = props
  return {
    hero: resolve(hero(options)),
    cta: resolve(cta(options)),
    left,
    right,
    logo,
    logoInner,
    logoOuter,
    logoWrapper,
  }
}
