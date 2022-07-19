import { GraphQLClient } from "graphql-request";
import { blogQuery, pageQuery, sectionQuery } from "./queries";

export const graphcms = new GraphQLClient(import.meta.env.VITE_GRAPHCMS_URL);

export async function getPage(slug) {
  const { page } = await graphcms.request(`
    {
      page(where: {slug: "${slug}"}) {
        ${pageQuery}
      }
    }
  `);
  return page;
}

export async function getBlog(slug) {
  const { blog } = await graphcms.request(`
    {
      blog(where: {slug: "${slug}"}) ${blogQuery}      
    }
  `);
  return blog;
}

const parse = (obj) => {
  let str = "";
  for (const [key, value] of Object.entries(obj)) {
    str += `${key}: "${value}", `;
  }
  return str;
};

export const submitApplication = async (application) => {
  let parsedApplication = parse(application);
  const data = await graphcms.request(
    `
    mutation {
        createApplication(data: { ${parsedApplication} }) {
          id
          name
        }
      }
  `,
    application
  );
  return data;
};

export async function getSection(id) {
  const { section } = await graphcms.request(`
    {
      section(where: {identifier: "${id}"}) {
        ${sectionQuery}
      }
    }
  `);
  return section;
}
