import { getPage } from '$lib/gql'

export const get = async () => {
  let content = await getPage('home')

  return {
    body: {
      content,
    },
  }
}
