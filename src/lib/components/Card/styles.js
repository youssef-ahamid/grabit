export const card = (props) => {
  return [
    {
      classes:
        "rounded-3xl m-2 p-4 md:p-6 transition duration-300 ease-out h-auto",
      styles: "",
      on: true, // default
    },
    {
      classes: "ring-2 ring-current",
      styles: "",
      on: props.ring,
    },
    {
      classes: "text-primary bg-tertiary",
      styles: "",
      on: props.type === "primary",
    },
    {
      classes: "text-secondary bg-primary",
      styles: "",
      on: props.type === "secondary",
    },
  ];
};
export const cardHeader = (props) => {
  return [
    {
      classes: "flex justify-between items-start",
      styles: "",
      on: true, // default
    },
  ];
};
export const cardIcon = (props) => {
  return [
    {
      classes: "w-8 h-auto",
      styles: "",
      on: true, // default
    },
  ];
};
