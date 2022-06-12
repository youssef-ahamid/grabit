export const searchDropdownWrapper = (props) => {
  return [
    {
      classes:
        "relative w-full",
      styles: "",
      on: true, // default
    },
  ];
};

export const searchDropdown = (props) => {
  return [
    {
      classes:
        "pt-6 bg-neutralLight overflow-hidden w-full max-w-md -mt-8 rounded-b-3xl shadow absolute left-0 right-0 z-40",
      styles: "",
      on: true, // default
    },
  ];
};

export const dropdownItem = (props) => {
  return [
    {
      classes:
        "text-neutralDark font-medium cursor-pointer hover:text-primary hover:shadow-lg hover:bg-tertiary py-3 px-3 transition-300 w-full",
      styles: "",
      on: true, // default
    },
  ];
};
