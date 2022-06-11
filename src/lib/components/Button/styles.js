export const button = props => {
  return [
    {
      classes:
        'relative my-1 flex items-center justify-center rounded-full py-2 px-5 transition duration-300 ease-out hover:scale-[105%] active:scale-[95%] group',
      styles: '',
      on: true, // default
    },
    {
      classes: 'bg-primary text-neutral-light hover:bg-neutral-light hover:text-primary',
      styles: '',
      on:
        props.type == 'primary'
    },
    {
      classes: 'bg-neutral-light text-primary hover:bg-primary hover:text-neutral-light',
      styles: '',
      on:
        props.type == 'secondary'
    },
  ]
}

export const buttonLabel = props => {
  return [
    {
      classes:
        'text-current z-[5] whitespace-nowrap uppercase font-semibold select-none leading-none transition duration-300 ease-out py-2',
      styles: '',
      on: true, // default
    },
    {
      classes: '',
      styles: '',
      on: props.type == 'primary' && props.shape != 'ghost',
    },
    {
      classes: 'px-4',
      styles: '',
      on: props.shape != 'ghost',
    },
    {
      classes: '',
      styles: '',
      on: props.type == 'secondary',
    },
    {
      classes: 'hidden',
      styles: '',
      on: !props.label || props.label.length == 0,
    },
  ]
}

export const buttonIcon = props => {
  return [
    {
      classes:
        'transition duration-500 ease-out text-current w-6 md:w-10 block',
      styles: '',
      on: true, // default
    },
    {
      classes: 'ml-1 md:ml-2',
      styles: '',
      on: props.shape != 'icon',
    },
    {
      classes: 'group-hover:translate-x-2 group-active:translate-x-0',
      styles: '',
      on: !props.reverse && props.icon != 'chevron_up',
    },
    {
      classes:
        'group-hover:-translate-x-2 group-active:translate-x-0',
      styles: '',
      on: props.reverse && props.icon != 'chevron_up',
    },
    {
      classes:
        'pb-1 px-0.5 group-hover:-translate-y-0.5 group-active:translate-y-0 group-active:scale-95',
      styles: '',
      on: props.icon == 'chevron_up',
    },
  ]
}
