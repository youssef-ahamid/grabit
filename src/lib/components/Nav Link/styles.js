export const navLinkWrapper = props => {
  return [
    {
      classes:
        'rounded-3xl group px-2 space-x-4 md:px-4 py-1 transition duration-300 ease-out origin-center hover:scale-105 active:scale-95 flex items-center justify-between relative',
      styles: '',
      on: true, // default
    },
    {
      classes:
        'hover:bg-primary hover:opacity-[75%] hover:text-neutral-light',
      styles: '',
      on: props.type == 'primary' && !props.sublink,
    },
    {
      classes: 'bg-primary text-neutral-light',
      styles: '',
      on: props.active,
    },
    {
      classes: 'text-primary',
      styles: '',
      on: !props.active,
    },
    {
      classes: '',
      styles: '',
      on: props.type == 'secondary',
    },
  ]
}

export const navSublinkList = props => {
  return [
    {
      classes: 'absolute top-full left-2 lg:left-auto lg:right-2 w-72 bg-primary p-6 space-y-6 shadow-lg rounded-2xl transition duration-300 ease-out z-[999]',
      styles: '',
      on: true, // default
    },
    {
      classes: 'translate-y-2 opacity-100 scale-100',
      styles: '',
      on: props.sublinkOpen,
    },
    {
      classes: '-translate-y-4 opacity-0 scale-90',
      styles: '',
      on: !props.sublinkOpen,
    },
  ]
}

export const navSublink = props => {
  return [
    {
      classes: 'text-neutral-light slide-underline flex justify-between items-center',
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

export const navSublinkActive = props => {
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

export const navSublinkInactive = props => {
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
