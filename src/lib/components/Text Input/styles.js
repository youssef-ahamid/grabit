export const textInputWrapper = props => {
  return [
    {
      classes: 'group block w-full relative my-3 max-w-md',
      styles: '',
      on: true, // default
    },
    {
      classes: '',
      styles: '',
      on: props.type === 'primary',
    },
  ]
}

export const textInput = props => {
  return [
    {
      classes:
        'block outline-none appearance-none py-3 px-7 transition placeholder:text-gray-300 caret-primary placeholder:font-light duration-300 ease-out ring-2 ring-neutral-light shadow-inner ring-offset-primary ring-offset-2 rounded-full bg-neutral-light focus:ring-offset-4 text-neutral-dark w-full placeholder:text-left',
      styles: '',
      on: true, // default
    },
    {
      on: props.clean === false,
      classes: 'border-red-300',
    },
    {
      on: props.clean === true,
      classes: 'border-primary',
    },
    {
      on: props.type === 'text area',
      classes: 'resize-none h-20 md:h-32 w-full block',
    },
    {
      classes: '',
      styles: '',
      on: props.type === 'primary',
    },
  ]
}

export const textInputName = props => {
  return [
    {
      classes: 'text-primary',
      styles: '',
      on: true, // default
    },
    {
      classes: '',
      styles: '',
      on: props.type === 'primary',
    },
  ]
}

export const textInputError = props => {
  return [
    {
      classes: 'text-red-500',
      styles: '',
      on: true, // default
    },
    {
      classes: '',
      styles: '',
      on: props.type === 'primary',
    },
  ]
}

export const textInputCTA = props => {
  return [
    {
      classes: 'bg-primary z-50 rounded-full py-1',
      styles: '',
      on: true, // default
    },
    {
      classes: '',
      styles: '',
      on: props.type === 'primary',
    },
  ]
}
