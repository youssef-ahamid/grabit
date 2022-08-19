import { getBlogPreviews } from '$lib/gql'

const getTags = blogs => {
  let tags = []
  let blogTags = blogs.map(blog => blog.tags)

  // add all blog tags
  blogTags.forEach(tag => {
    tags.push(...tag)
  })

  // remove duplicates
  let tagTitles = tags.map(t => t.title)
  tags = tags.filter(
    (tag, index) => tagTitles.indexOf(tag.title) === index
  )

  return tags
}

const isTagged = (blog, tag) => {
  return blog.tags.map(tag => tag.title).includes(tag)
}

const filterBlogs = (blogs, tag) => {
  return blogs.filter(blog => isTagged(blog, tag))
}

export const get = async ({ url }) => {
  let blogs = await getBlogPreviews()
  let tags = getTags(blogs)

  let tag = url.searchParams.get('tag')
  if (tag) blogs = filterBlogs(blogs, tag)

  return {
    body: {
      tags,
      blogs,
      tag,
    },
  }
}
