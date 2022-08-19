export const article = blog => {
  const {
    image,
    slug,
    title,
    otherTitle,
    createdAt,
    updatedAt,
    author,
    keywords,
    genre,
    body,
  } = blog
  let obj = {
    '@context': 'http://schema.org',
    '@type': 'BlogPosting',
    image: image.url,
    url: `https://newcastle.vercel.app/blog/${slug}`,
    headline: title,
    alternativeHeadline: otherTitle || '',
    dateCreated: createdAt,
    dateModified: updatedAt,
    inLanguage: 'en-US',
    isFamilyFriendly: 'true',
    copyrightYear: '2022',
    copyrightHolder: '',
    accountablePerson: {
      '@type': 'Person',
      name: author.name,
      worksFor: 'NewCastle School',
    },
    author: {
      '@type': 'Person',
      name: author.name,
      url: 'https://newcastle.vercel.app',
      worksFor: 'NewCastle School',
    },
    creator: {
      '@type': 'Person',
      name: author.name,
      url: 'https://newcastle.vercel.app',
      worksFor: 'NewCastle School',
    },
    publisher: {
      '@type': 'Organization',
      name: 'NewCastle School',
      url: 'https://newcastle.vercel.app',
      logo: {
        '@type': 'ImageObject',
        url: 'https://media.graphassets.com/McESAKAGQsmwo9YHwT4q',
        width: '200',
        height: '200',
      },
    },
    mainEntityOfPage: 'True',
    keywords,
    genre,
    articleSection: 'Uncategorized posts',
    articleBody: body,
  }
  return JSON.stringify(obj)
}

const templates = [
  {
    name: 'article',
    generate: article,
  },
]

export const getTemplate = (name, data) => {
  let template = templates.filter(t => t.name === name)[0]
  if (!template)
    return console.error(`template with name ${name} not found`)
  return `<script type="application/ld+json">${template.generate(
    data
  )}</script>`
}
