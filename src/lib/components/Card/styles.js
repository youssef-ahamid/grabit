export const card = props => {
  return [
    {
      classes:
        'rounded-xl m-2 p-4 md:p-6 transition-300 shadow-xl h-auto hover:shadow-2xl hover:scale-105 flex flex-col space-y-4 text-left min-w-fit h-full flex flex-col justify-between z-10 relative',
      styles: '',
      on: true, // default
    },
    {
      classes: 'ring-2 ring-current',
      styles: '',
      on: props.ring,
    },
    {
      classes: 'bg-neutral text-neutralDark',
      styles: '',
      on: props.type === 'primary',
    },
    {
      classes: 'bg-brand text-neutralLight',
      styles: '',
      on: props.type === 'secondary',
    },
  ]
}
export const cardHeader = props => {
  return [
    {
      classes:
        'flex flex-col items-start space-y-4 py-6 mb-6 relative before:absolute before:bottom-0 before:w-[40%] before:h-1 before:rounded-full',
      styles: '',
      on: true, // default
    },
    {
      classes: 'before:bg-brand',
      styles: '',
      on: props.type === 'primary',
    },
  ]
}
export const cardIcon = props => {
  return [
    {
      classes: 'w-16 h-auto',
      styles: '',
      on: true, // default
    },
    {
      classes: 'text-brand',
      styles: '',
      on: props.type == 'primary',
    },
  ]
}
