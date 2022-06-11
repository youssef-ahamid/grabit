import { resolve } from '$lib/helpers'

export let section = options => {
  return [
    {
      classes:
        'relative overflow-hidden bg-cover bg-center bg-no-repeat',
    },
    {
      on: [options.fullHeight, true],
      classes: 'min-h-screen',
    },
  ]
}

export let content = options => {
  return [
    {
      on: [options.noContain, false],
      classes: 'p-4 md:p-8 max-w-[98%] md:max-w-[80%] mx-auto',
    },
    {
      on: [options.noContain, true],
      classes: '',
    },
  ]
}

export let ctaContainer = options => {
  return [
    {
      classes: '',
    },
  ]
}

export const config = props => {
  return {
    section: resolve(section(props)),
    content: resolve(content(props)),
    ctaContainer: resolve(ctaContainer(props)),
  }
}
