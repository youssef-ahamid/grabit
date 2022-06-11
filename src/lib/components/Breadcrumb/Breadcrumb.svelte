<script>
  import Go from '../Go/Go.svelte'

  export let className = ''
  export let path

  export let routes = []

  let lastPos = 0 // track the position
  for (let i = 0; i < path.length; i++) {
    if (path[i] == '/' && i > 0) {
      // find '/' that's not the first character
      routes.push({
        name: path.substring(lastPos, i), // the name is what's between the '/'
        link: path.substring(0, i), // the link is the whole path up to the current '/'
      })
      lastPos = i
    }
  }

  // add current route
  routes.push({
    name: path.substring(lastPos, path.length),
    link: path,
  })

  if (path == '/' || path == '') routes = []
</script>

<div class="flex {className}">
  {#each routes as route}
    <Go
      to={route.link}
      className="text-current font-semibold capitalize hover:opacity-75 active:opacity-100 active:scale-105 transition duration-300 ease-out border-b-2 border-transparent hover:border-current"
    >
      <h3>{route.name}</h3>
    </Go>
  {/each}
</div>
