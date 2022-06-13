// configuration

export const site = {
  language: "en",
  url: "https://newcastle.vercel.app",
  title: "NewCastle School",
};

export const logo = {
  src: "https://media.graphassets.com/McESAKAGQsmwo9YHwT4q",
  alt: "NewCastle School",
};

export const logoSmall = {
  src: "https://media.graphassets.com/KgsQe7GiR8uYyCItPSOk",
  alt: "NewCastle School",
};

export const links = [
  {
    to: "/about-us",
    text: "About Us",
    group: "info",
  },
  {
    text: "Divisions",
    group: "info",
    links: [
      {
        to: "/divisions/american",
        text: "American Division",
        redirect: true,
      },
      {
        to: "/divisions/british",
        text: "British Division",
        redirect: true,
      },
      {
        to: "/divisions/ib",
        text: "IB",
        redirect: true,
      },
    ],
  },
  {
    to: "/community",
    text: "Community",
    group: "info",
  },
  {
    to: "/contact-us",
    text: "Contact Us",
    group: "info",
  },
  {
    to: "/admissions",
    text: "Admissions",
    group: "info",
  },
  {
    to: "/blog",
    text: "Blog",
    group: "info",
  },
  {
    to: "/life-at-newcastle",
    text: "Life at Newcastle",
    group: "info",
  },
  {
    to: "/careers",
    text: "Careers",
    group: "info",
  },
  {
    to: "/student-portal",
    text: "Student Portal",
    group: "useful",
  },
  {
    to: "/tour",
    text: "Book A Tour",
    group: "useful",
  },
  {
    to: "/apply",
    text: "Apply",
    group: "useful",
  },
]

export const groups = [
  {
    id: "info",
    text: "School Info",
  },
  {
    id: "useful",
    text: "Useful Links",
  },
];
