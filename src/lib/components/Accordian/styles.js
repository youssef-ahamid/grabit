export const accordian = props => {
  return [
    {
      classes: '-space-y-4 mx-auto w-full',
      styles: '',
      on: true, // default
    },
  ]
}

export const accordianItem = props => {
  return [
    {
      classes:
        'py-6 px-4 md:px-6 cursor-pointer w-80 md:w-[700px] max-w-none rounded-full flex justify-center bg-neutral',
      styles: '',
      on: true, // default
    },
  ]
}

export const accordianItemTitleWrapper = props => {
  return [
    {
      classes: 'flex justify-between items-start',
      styles: '',
      on: true, // default
    },
  ]
}

export const accordianItemContent = props => {
  return [
    {
      classes: 'py-4 px-6 md:px-8 text-left mb-6',
      styles: '',
      on: true, // default
    },
  ]
}
