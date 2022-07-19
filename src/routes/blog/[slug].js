import { getBlog } from "$lib/gql";

export const get = async ({ params }) => {
  const { slug } = params;
  const blog = await getBlog(slug);

  return {
    body: {
      slug,
      blog,
    },
  };
};
