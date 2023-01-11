export const button = props => {
  return [
    {
      classes:
        'relative my-1 flex items-center justify-center rounded-xl transition-300 group active:scale-95',
      styles: '',
      on: true, // default
    },
    {
      classes: 'hover:scale-105 hover:shadow-lg px-6 md:px-8 py-4',
      styles: '',
      on: props.shape == 'default',
    },
    {
      classes: 'slide-underline py-1',
      styles: '',
      on: props.shape == 'ghost',
    },
    {
      classes: 'bg-neutralLight',
      styles: '',
      on: props.shape == 'default' && props.type == 'primary',
    },
    {
      classes: 'bg-brand',
      styles: '',
      on: props.shape == 'default' && props.type == 'secondary',
    },
    {
      classes: 'text-brand',
      styles: '',
      on: props.type == 'primary',
    },
    {
      classes: 'text-neutralLight',
      styles: '',
      on: props.type == 'secondary',
    },
    {
      classes: 'flex-row-reverse',
      styles: '',
      on: props.reverse,
    },
  ]
}

export const buttonLabel = props => {
  return [
    {
      classes:
        'text-current z-[5] md:whitespace-nowrap uppercase font-semibold select-none leading-none transition duration-300 ease-out py-2',
      styles: '',
      on: true, // default
    },
    {
      classes: 'hidden',
      styles: '',
      on: !props.label || props.label.length == 0,
    },
    {
      classes: 'whitespace-nowrap',
      styles: '',
      on: props.nowrap,
    },
  ]
}

export const buttonIcon = props => {
  return [
    {
      classes:
        'transition duration-500 ease-out text-current w-8 md:w-10 block',
      styles: '',
      on: true, // default
    },
    {
      classes: 'ml-1 md:ml-2',
      styles: '',
      on: props.shape != 'icon',
    },
    {
      classes: 'group-hover:translate-x-1 group-active:translate-x-0',
      styles: '',
      on: !props.reverse && props.icon != 'chevron_up',
    },
    {
      classes:
        'group-hover:-translate-x-1 group-active:translate-x-0',
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
