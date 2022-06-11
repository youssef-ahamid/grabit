import { GraphQLClient } from 'graphql-request'

export const graphcms = new GraphQLClient(
  import.meta.env.VITE_GRAPHCMS_URL
)
const queries = {
  section: `
    identifier
    background {
      url
    }
    fullHeight
    preheader
    title
    description
    content {
      __typename
      ... on Button {
        icon
        label
        shape
        type
        url
      }
      ... on Employee {
        teamMember {
          name
          role
          image {
            url
          }
        }
      }
      ... on ClientGroup {
        clients {
          name
          role
          type
          avatar {
            url
          }
          logo {
            url
          }
        }
      }
      ... on Product {
        cooling
        heating
        image {
          url
        }
        title
        specs {
          url
        }
      }
      ... on ProjectGroup {
        projects {
          slug
          title
          description
          image {
            url
          }
          clients {
            logo {
              url
            }
          }
          type
          services {
            shortTitle
          }
        }
      }
      ... on ServiceGroup {
        services {
          title
          type
          shortTitle
          image {
            url
          }
          description
          oneLiner
        }
      }
      ... on EmployeeQuote {
        quote
        teamMember {
          role
          name
          image {
            url
          }
        }
      }
      ... on JobGroup {
        jobs {
          title
          slug
          publishedAt
          brief
          location
          info {
            html
          }
          notify {
            contact {
              email
            }
          }
        }
      }
      ... on ContactInformation {
        contact {
          email
          phoneNumber
          address
        }
      }
      ... on WYSIWYG {
        text {
          html
        }
      }
      ... on Award {
        title
        image {
          url
        }
      }
      ... on Hero {
        description
        title
        image {
          url
        }
      }
      ... on TextInput {
        cta
        label
        placeholder
        validateOnChange
        validations
      }
      ... on Statistic {
        number
        title
      }
      ... on Step {
        title
        text
      }
      ... on Testimonial {
        text
        client {
          name
          role
          avatar {
            url
          }
          logo {
            url
          }
        }
      }
    }
  `,
}
export async function getJob(slug) {
  const { job } = await graphcms.request(`
    {
      job(where: {slug: "${slug}"}) {
        brief
        info {
          html
        }
        location
        title
        updatedAt
        notify {
          contact {
            email
          }
        }
      }
    }
  `)
  return job
}
export async function getProjectPreviews() {
  const { projects } = await graphcms.request(`
    {
      projects {
        slug
        title
        description
        image {
          url
        }
        type
        clients {
          logo {
            url
          }
        }
        services {
          shortTitle
        }
      }
    }
  `)
  return projects
}

export async function getClients() {
  const { clients } = await graphcms.request(`
    {
      clients(where: {logo: {}}) {
        logo {
          url(transformation: {document: {output: {format: png}}})
        }
        name
      }
    }
  `)
  return clients
}

export async function getServices() {
  const { services } = await graphcms.request(`
    {
      services(orderBy: order_ASC) {
        title
        type
        shortTitle
        image {
          url
        }
        description
        oneLiner
      }
    }
  `)
  return services
}

export async function getFeaturedProjects() {
  const { projects } = await graphcms.request(`
    {
      projects(where: {featured: true}) {
        slug
        title
        description
        image {
          url
        }
        clients {
          logo {
            url
          }
        }
        type
        services {
          shortTitle
        }
      }
    }
  `)
  return projects
}

export async function getProject(slug) {
  const { project } = await graphcms.request(`
    {
      project(where: {slug: "${slug}"}) {
        slug
        title
        description
        image {
          url
        }
        type
        images {
          url
        }
        clients {
          name
          logo {
            url(transformation: {document: {output: {format: png}}})
          }
        }
        owner
        location
        businessVolume
        scope { 
          html
        }
        services {
          title
          shortTitle
          type
          image {
            url
          }
        }
        table {
          url
        }
      }
    }
  `)
  return project
}

export async function getPage(slug) {
  const { page } = await graphcms.request(`
    {
      page(where: {slug: "${slug}"}) {
        seo {
          title
          descriptionText
          previewImage {
            url(transformation: {image: {resize: {height: 900, fit: clip, width: 1600}}})
          }
        }
        slug
        sections {
          ${queries.section}
        }
      }
    }
  `)
  return page
}

export async function getSection(id) {
  const { section } = await graphcms.request(`
    {
      section(where: {identifier: "${id}"}) {
        ${queries.section}
      }
    }
  `)
  return section
}
