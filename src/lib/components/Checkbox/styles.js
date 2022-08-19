export const checkboxWrapper = props => {
  return [
    {
      classes:
        'w-full flex space-x-2 my-1.5 text-neutralDark items-start transition-300',
      on: true,
    },
    {
      classes: 'animate-wiggle text-red-400',
      on: props.error,
    },
  ]
}

export const checkboxInput = props => {
  return [
    {
      classes:
        "cursor-pointer transition-300 relative appearance-none min-w-[1.3rem] min-h-[1.3rem] w-5 h-5 md:w-7 md:h-7 rounded-md ring-1 block before:-translate-x-1/2 before:-translate-y-1/2 mt-0.5 before:transition before:duration-300 before:ease-out before:absolute before:left-1/2 before:top-1/2 before:content-['✓'] before:text-neutralLight before:pointer-events-none before:text-sm",
      on: true,
    },
    {
      classes: 'ring-red-300',
      on: props.error,
    },
    {
      classes: 'ring-brand',
      on: !props.error,
    },
    {
      classes: 'bg-brand ring-offset-1 before:scale-100',
      on: props.active && !props.error,
    },
    {
      classes: ' before:scale-[25%] hover:bg-brand/20 ',
      on: !props.active && !props.error,
    },
  ]
}
