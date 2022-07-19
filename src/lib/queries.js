
//  reusable json presets for queries
export const buttonQuery = `
  {
    icon
    label
    link
    shape
    type
  }
`

export const sectionQuery = `
  identifier
  backgroundImage {
    url
  }
  backgroundColor
  button ${buttonQuery}
  contentLayout
  content {
    __typename
    ... on Button ${buttonQuery}
    ... on Division {
      text
      title
      subtitle
      image {
        url
      }
    }
    ... on InfoCard {
      icon
      infoItem
      title
      type
    }
    ... on Image {
      image {
        url
      }
      alt
    }
    ... on Quote {
      name
      role
      text
      image {
        url
      }
    }
  }
  text
  boldDescription
  textColor
  title
  layout
  fullHeight
`;

export const  blogQuery = `
  {
    author {
      name
      image {
        url
      }
      role
    }
    content {
      __typename
      ... on BlogSection {
        content {
          html
          text
        }
        showInNavigation
        title
      }
      ... on Button ${buttonQuery}
    }
    genre
    image {
      url
    }
    keywords
    slug
    title
    tags {
      title
    }
    description
    updatedAt
    createdAt
  }
`

export const pageQuery = `
  slug,
  seo {
    title
    description
    image {
      url
    }
  }
  sections {
    ${sectionQuery}
  }
  hero {
    ${sectionQuery}
  }
`;
