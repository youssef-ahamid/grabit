import { writable } from 'svelte/store'

export const activeSection = writable({
  color: '',
  id: '',
  title: '',
})
export const activePageSlug = writable('')
export const mobile = writable(false)
export const activePage = writable({})
export const path = writable('')
