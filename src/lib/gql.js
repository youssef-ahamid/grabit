import { GraphQLClient } from 'graphql-request'
import { pageQuery, sectionQuery } from './queries'

export const graphcms = new GraphQLClient(
  import.meta.env.VITE_GRAPHCMS_URL
)

export async function getPage(slug) {
  const { page } = await graphcms.request(`
    {
      page(where: {slug: "${slug}"}) {
        ${pageQuery}
      }
    }
  `)
  return page
}

export async function getSection(id) {
  const { section } = await graphcms.request(`
    {
      section(where: {identifier: "${id}"}) {
        ${sectionQuery}
      }
    }
  `)
  return section
}
