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

export const downloadLinkQuery = `
  downloadLinkAndroid
  downloadLinkIos
`

export const blogPreviewQuery = `
  {
    slug
    title
    description
    tags {
      title
    }
    author {
      name
    }
    image {
      url
    }
    createdAt
  }
`

export const featuredBlogsQuery = `
{
  blogs ${blogPreviewQuery}
}
`

export const restaurantQuery = `
{
  logo {
    url
  }
  image {
    url
  }
  name
  meal
  old_price
  price
}
`

export const heroQuery = `
  {
    ${downloadLinkQuery}
    restaurants ${restaurantQuery}
  }
`

export const FAQQuery = `
  {
    items {
      question
      answer {
        html
        text
      }
    }
  }
`

export const HIWQuery = `
  {
    image {
      url
    }
    steps {
      title
      text
    }
  }
`

export const CTAQuery = `
{
  ${downloadLinkQuery}
}
`

export const sectionQuery = `
  identifier
  text
  title
  icon {
    url
  }
  content {
    ... on HowItWorks ${HIWQuery}
    ... on FAQ ${FAQQuery}
    ... on CTA ${CTAQuery}
    ... on Hero ${heroQuery}
    ... on FeaturedBlogs ${featuredBlogsQuery}
  }
`

export const blogQuery = `
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
    related(first: 3, orderBy: createdAt_DESC) ${blogPreviewQuery}
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
`
