// configuration

export const site = {
  language: 'en',
  url: 'https://newcastle.vercel.app',
  title: 'NewCastle School',
}

export const logo = {
  src: 'https://media.graphassets.com/n0rUVJulR5OH83KWmvvi',
  alt: 'Grabit',
}

export const logoWhite = {
  src: 'https://media.graphassets.com/E75sIzRXR7mEuNaxLqkQ',
  alt: 'Grabit',
}

export const links = [
  {
    to: '/about-us',
    text: 'About Us',
    group: 'info',
  },
  {
    text: 'Divisions',
    group: 'info',
    links: [
      {
        to: '/divisions/american',
        text: 'American Division',
        redirect: true,
      },
      {
        to: '/divisions/british',
        text: 'British Division',
        redirect: true,
      },
      {
        to: '/divisions/ib',
        text: 'IB',
        redirect: true,
      },
    ],
  },
  {
    to: '/community',
    text: 'Community',
    group: 'info',
  },
  {
    to: '/life-at-newcastle',
    text: 'Life at Newcastle',
    group: 'info',
  },
  {
    to: '/announcements',
    text: 'Announcements',
    group: 'useful',
  },
  {
    to: '/blog',
    text: 'Blog',
    group: 'useful',
  },
  {
    to: '/faq',
    text: 'FAQ',
    group: 'useful',
  },
  {
    to: '/admissions',
    text: 'Admissions',
    group: 'info',
  },
  {
    to: '/application',
    text: 'Application',
    group: 'info',
  },
  {
    to: '/contact-us',
    text: 'Contact Us',
    group: 'info',
  },
  {
    to: '/careers',
    text: 'Careers',
    group: 'useful',
  },
  {
    to: '/student-portal',
    text: 'Student Portal',
    group: 'useful',
  },
  {
    to: '/tour',
    text: 'Book A Tour',
    group: 'useful',
  },
]

export const groups = [
  {
    id: 'info',
    text: 'School Info',
  },
  {
    id: 'useful',
    text: 'Useful Links',
  },
]
