export let list = props => {
  let isGrid =
    !!props.grid && (!!props.grid.cols || !!props.grid.rows)
  let grid = props.grid || {}

  return [
    {
      classes: '',
      styles: '',
      on: true, // default
    },
    {
      classes: 'flex flex-wrap',
      styles: '',
      on: !isGrid && props.horizontal,
    },
    {
      classes: 'flex flex-col',
      styles: '',
      on: !isGrid && !props.horizontal,
    },
    {
      classes: `grid`,
      styles: `column-gap: ${
        grid.xGap || 1
      }rem !important; row-gap: ${
        grid.yGap || 1
      }rem !important; justify-items: ${
        grid.justify || 'center'
      } !important; grid-template-rows: repeat(${
        grid.rows || 2
      }, minmax(0, 1fr)) !important; grid-template-columns: repeat(${
        grid.cols || 2
      }, minmax(0, 1fr)) !important;`,
      on: isGrid,
    },
  ]
}
export let listItem = props => {
  return [
    {
      classes: 'block py-1 font-light',
      styles: '',
      on: true, // default
    },
    {
      classes:
        "before:content-['→'] before:font-bold before:absolute before:-left-8 before:top-1 before:body-sm ml-8 relative",
      styles: '',
      on: props.type == 'arrow', // default
    },
  ]
}
