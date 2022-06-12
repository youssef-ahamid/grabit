export const imgWrapper = props => {
  return [
    {
      classes: 'relative group overflow-visible w-full',
      on: true,
    },
    {
      classes: 'max-w-[40px]',
      styles: '',
      on: props.size == 'sm',
    },
    {
      classes: 'max-w-[150px] md:max-w-[200px]',
      styles: '',
      on: props.size == 'md',
    },
    {
      classes: 'md:max-w-[500px]',
      styles: '',
      on: props.size == 'lg',
    },
  ]
}

export const imgOverlay = props => {
  return [
    {
      classes: 'transition duration-300 ease-out',
      on: true,
    },
  ]
}

export const img = props => {
  return [
    {
      classes: 'w-full h-auto block transition duration-300 ease-out',
      on: true,
    },
  ]
}
