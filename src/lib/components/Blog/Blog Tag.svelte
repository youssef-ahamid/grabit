<script>
  import Go from '../Go/Go.svelte'

  export let active = false
  export let deselects = false
  export let tag
</script>

<Go
  to="/blog{active && deselects ? '' : `?tag=${tag.title}`}"
  className="px-5 mr-2 mb-1 py-1 
  {active
    ? 'bg-neutralLight text-neutralDark'
    : 'text-neutralLight bg-neutralLight/25'} rounded-full flex items-center justify-center hover:bg-neutralLight cursor-pointer hover:scale-105 transition-300 hover:text-neutralDark"
>
  <p class="font-bold uppercase">{tag.title}</p>
</Go>
