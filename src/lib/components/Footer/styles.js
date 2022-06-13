export let footer = 'w-full pb-6 relative'
export let list =
  'w-full lg:max-w-[70%] px-8 grid grid-cols-2 gap-4 items-start my-6 z-[999]'
export let links =
  'w-[80%] mx-auto space-y-12 items-start justify-center md:justify-between flex flex-wrap md:flex-nowrap'
export let socials =
  'w-[90%] md:w-[95%] mx-auto flex justify-center md:justify-start items-center pt-12'
export let socialLink =
  'w-10 h-auto mr-2 block text-brand hover:text-current'
export let link =
  'whitespace-nowrap py-1 md:py-0 text-current hover:text-brand font-semibold text-sm md:text-base'
export let logo =
  'block w-32 overflow-visible py-4 md:w-36 group text-brand hover:scale-105 origin-center'
export let logoInner =
  'group-hover:scale-95 group-active:scale-90 origin-center'
export let logoOuter =
  'group-hover:scale-105 origin-center group-active:scale-110'
export let copyright =
  'body-sm font-extralight text-right w-full bg-secondary text-neutralLight p-1 absolute bottom-0'

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
