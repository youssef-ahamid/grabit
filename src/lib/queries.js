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
  contentLayout
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
      subtitle
      image {
        url
      }
    }
    ... on InfoCard {
      __typename
      icon
      infoItem
      title
      type
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
  hero {
    ${sectionQuery}
  }
`;
