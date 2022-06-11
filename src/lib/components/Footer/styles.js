export let footer = 'w-full py-24 relative'
export let list =
  'w-full lg:max-w-[70%] px-8 pt-5 grid grid-cols-2 lg:grid-cols-3 items-start my-6 z-[999]'
export let links =
  'w-full flex flex-col md:flex-row items-start justify-between px-6 '
export let socials =
  'w-[90%] md:w-[95%] mx-auto flex justify-center md:justify-start items-center pt-12'
export let socialLink =
  'w-10 h-auto mr-2 block text-primary hover:text-current'
export let link =
  'px-2 one-liner md:px-4 py-2 md:py-4 text-current hover:text-primary'
export let logo =
  'block w-32 overflow-visible py-4 md:w-36 group text-primary hover:scale-105 origin-center'
export let logoInner =
  'group-hover:scale-95 group-active:scale-90 origin-center'
export let logoOuter =
  'group-hover:scale-105 origin-center group-active:scale-110'
export let copyright =
  'body-sm font-extralight text-right w-full bg-secondary text-neutral-light p-1 absolute bottom-0'

export const config = () => {
  return {
    footer,
    list,
    links,
    link,
    copyright,
    socials,
    socialLink,
    logo,
    logoInner,
    logoOuter,
  }
}
