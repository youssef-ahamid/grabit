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
        'block peer outline-none appearance-none py-3 px-4 h-12 w-full md:h-14 transition-300 placeholder:text-gray-700 placeholder:font-bold caret-brand placeholder:opacity-50 border-b-2 border-neutralDark shadow-inner rounded-t-md bg-neutral focus:bg-brand focus:bg-opacity-[20%] focus:border-brand text-neutralDark w-full placeholder:text-left',
      styles: '',
      on: true, // default
    },
    {
      on: props.clean === false,
      classes: 'bg-brandDark bg-opacity-[40%]',
    },
    {
      on: props.clean === true,
      classes: 'bg-opacity-[80%]',
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
      classes: 'capitalize text-left font-bold transition-300',
      styles: '',
      on: true, // default
    },
    {
      classes: 'text-brand',
      styles: '',
      on: props.focus || !props.empty,
    },
    {
      classes: 'text-neutralDark',
      styles: '',
      on: !props.focus && props.empty,
    },
  ]
}

export const textInputError = props => {
  return [
    {
      classes: 'text-red-500 absolute top-full',
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
