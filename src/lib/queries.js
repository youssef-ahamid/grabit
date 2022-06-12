//  reusable json presets for queries
export const sectionQuery = `
  identifier
  backgroundImage {
    url
  }
  backgroundColor
  button {
    icon
    label
    link
    shape
    type
  }
  content {
    ... on Button {
      __typename
      icon
      label
      link
      shape
      stage
      type
    }
    ... on Division {
      __typename
      text
      title
      image {
        url
      }
    }
    ... on InfoCard {
      __typename
      icon
      infoItem
      title
    }
    ... on Image {
      __typename
      image {
        url
      }
      alt
    }
    ... on Quote {
      __typename
      name
      role
      text
      image {
        url
      }
    }
  }
  text
  textColor
  title
  layout
  fullHeight
`;

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
`;
