export const section = props => {
  let bg = props.backgroundImage || {}
  return [
    {
      on: true,
      classes: `relative max-w-[100vw] overflow-hidden bg-cover bg-center bg-no-repeat w-full bg-${props.backgroundColor} text-${props.textColor} py-8`,
    },
    {
      on: !props.noContain,
      classes: 'px-[5%] md:px-[10%]',
    },
    {
      on: !!bg.url && !props.gradient,
      styles: `background-image: url(${bg.url}) !important`,
    },
    {
      on: !!bg.url && props.gradient,
      styles: `background-image: ${props.gradient}, url(${bg.url}) !important`,
    },
    {
      on: props.fullHeight,
      classes: 'min-h-screen',
    },
    {
      on: props.layout == 'center',
      classes:
        'flex flex-col justify-center items-center text-center',
    },
    {
      on: props.layout == 'twoColumn',
      classes:
        'flex flex-col md:flex-row justify-between items-center',
    },
  ]
}

export const slotContent = props => {
  return [
    {
      classes: 'mt-6',
      on: true,
    },
    {
      classes:
        'flex flex-col justify-center items-center space-y-2 md:space-y-4',
      on: props.contentLayout == 'center',
    },
    {
      classes: 'max-w-[90%] md:max-w-[45%]',
      on: props.layout == 'twoColumn',
    },
    {
      classes:
        'flex flex-col md:flex-row md:flex-wrap justify-around items-stretch space-y-4 md:space-x-4 my-40',
      on: props.contentLayout == 'twoColumn',
    },
    {
      classes: 'grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4',
      on: props.contentLayout == 'grid',
    },
  ]
}

export const mainContent = props => {
  return [
    {
      on: props.layout == 'center',
      classes:
        'flex flex-col items-center text-center whitespace-pre-line',
    },
    {
      on: true,
      classes: `text-${props.textColor}`,
    },
    {
      classes: 'max-w-[95%] md:max-w-[45%] flex flex-col space-y-4',
      on: props.layout == 'twoColumn',
    },
  ]
}

export const textContent = props => {
  return [
    {
      on: true,
      classes: 'py-6 md:py-9',
    },
    {
      on: props.layout == 'center',
      classes: 'mx-auto',
    },
    {
      on: props.boldDescription,
      classes: 'font-bold',
    },
  ]
}

export const ctaContainer = props => {
  return [
    {
      classes: '',
    },
  ]
}
