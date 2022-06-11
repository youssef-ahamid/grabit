export const accordian = (props) => {
  return [
    {
      classes: "-space-y-2 max-w-[500px] mx-auto",
      styles: "",
      on: true, // default
    },
  ];
};

export const accordianItem = (props) => {
  return [
    {
      classes: "py-6 px-4 cursor-pointer",
      styles: "",
      on: true, // default
    },
  ];
};

export const accordianItemTitleWrapper = (props) => {
  return [
    {
      classes: "flex justify-between",
      styles: "",
      on: true, // default
    },
  ];
};

export const accordianItemContent = (props) => {
  return [
    {
      classes: "pt-4",
      styles: "",
      on: true, // default
    },
  ];
};
