export const carrouselWrapper = props => {
  return [
    {
      classes: '',
      styles: '',
      on: true, // default
    },
    {
      classes: '',
      styles: '',
      on: props.type == 'primary',
    },
  ]
}

export const carrousel = props => {
  return [
    {
      classes:
        'flex flex-wrap md:flex-nowrap min-h-[150px] md:min-h-[180px] items-center md:items-end justify-center w-full overflow-hidden',
      styles: ``,
      on: true, // default
    },
    {
      classes: '',
      styles: '',
      on: props.type == 'primary',
    },
  ]
}

export const carrouselItem = props => {
  return [
    {
      classes: '',
      styles: '',
      on: true, // default
    },
    {
      classes: '',
      styles: '',
      on: props.type == 'primary',
    },
  ]
}

export const carrouselControls = props => {
  return [
    {
      classes: 'my-4',
      styles: '',
      on: true, // default
    },
    {
      classes: '',
      styles: '',
      on: props.type == 'primary',
    },
  ]
}

export const carrouselStepper = props => {
  return [
    {
      classes: '',
      styles: '',
      on: true, // default
    },
    {
      classes: '',
      styles: '',
      on: props.type == 'primary',
    },
  ]
}

export const carrouselButtons = props => {
  return [
    {
      classes: 'flex w-full justify-center space-x-6',
      styles: '',
      on: true, // default
    },
    {
      classes: '',
      styles: '',
      on: props.type == 'primary',
    },
  ]
}

export const carrouselButton = props => {
  return [
    {
      classes: '',
      styles: '',
      on: true, // default
    },
    {
      classes: '',
      styles: '',
      on: props.type == 'primary',
    },
  ]
}
