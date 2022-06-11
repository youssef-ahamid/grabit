export const filterTagsContainer = props => {
  return [
    {
      classes:
        'w-full relative flex md:justify-center overflow-scroll p-2 no-scrollbar',
      styles: '',
      on: true, // default
    },
  ]
}

export const filterTag = props => {
  return [
    {
      classes:
        'rounded-full hover:scale-105 active:scale-100 hover:bg-opacity-[100%] active:opacity-95 px-6 py-3 md:px-8 md:py-4 bg-primary text-neutral-light inline-block m-[4px] md:m-3 transition duration-300 ease-out uppercase',
      styles: '',
      on: true, // default
    },
  ]
}

export const activeTag = props => {
  return [
    {
      classes: '',
      styles: '',
      on: true, // default
    },
  ]
}

export const inactiveTag = props => {
  return [
    {
      classes: 'bg-opacity-[50%] hover:opacity-75',
      styles: '',
      on: true, // default
    },
  ]
}
