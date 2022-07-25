let blogs = [
  {
    slug: "kenshi-is-amazing",
    title: "kenshi is amazing",
    description:
      "hamada yel3ab, hamada yeksab absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 rounded-xl ring-2 ring-neutralLight bg-transparent text-neutralLight flex px-6 py-3 justify-center items-center hover:bg-neutralLight hover:text-neutralDark transition-300",
    createdAt: new Date(),
    tags: [{ title: "tech" }],
    image: {
      url: "",
    },
  },
  {
    slug: "kenshi-is-amazing",
    title: "kenshi is amazing",
    description:
      "hamada yel3ab, hamada yeksab absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 rounded-xl ring-2 ring-neutralLight bg-transparent text-neutralLight flex px-6 py-3 justify-center items-center hover:bg-neutralLight hover:text-neutralDark transition-300",
    createdAt: new Date(),
    tags: [{ title: "hello" }],
    image: {
      url: "",
    },
  },
  {
    slug: "kenshi-is-amazing",
    title: "kenshi is amazing",
    description: "hamada yel3ab, hamada yeksab",
    createdAt: new Date(),
    tags: [{ title: "software" }],
    image: {
      url: "",
    },
  },
  {
    slug: "kenshi-is-amazing",
    title: "kenshi is amazing",
    description: "hamada yel3ab, hamada yeksab",
    createdAt: new Date(),
    tags: [{ title: "tech" }, { title: "hamada" }],
    image: {
      url: "",
    },
  },
];

const getTags = () => {
  let blogTags = blogs.map((blog) => blog.tags);
  let tags = [];
  blogTags.forEach((tag, i) => {
    tags.splice(i, i + 1);
    tags.push(...tag);
  });

  // remove duplicates

  return tags;
};

const isTagged = (blog, tag) => {
  return blog.tags.map((tag) => tag.title).includes(tag);
};

const filterBlogs = (tag) => {
  return blogs.filter((blog) => isTagged(blog, tag));
};

export const get = async ({ url }) => {
  // get blog previews
  
  let tags = getTags();
  let tag = url.searchParams.get("tag");

  return {
    body: {
      tags,
      blogs: tag ? filterBlogs(tag) : blogs,
      tag,
    },
  };
};
