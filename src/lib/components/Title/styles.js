export const titleText = (props) => {
  return [
    {
      classes:
        `relative pt-6 md:pt-12 max-w-lg mt-6`,
      on: true,
    },
    {
      classes:
        `before:bg-${props.lineColor} before:h-1 before:w-full before:max-w-[40%] before:absolute before:top-0 before:rounded-full`,
      on: props.line,
    },
    { classes: "before:left-1/2 before:-translate-x-1/2 text-center mx-auto", on: props.layout == 'center' },
  ];
};
