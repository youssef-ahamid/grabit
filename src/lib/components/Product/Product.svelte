<script>
  import Heating from '$lib/icons/heating.svelte'
  import Cooling from '$lib/icons/cooling.svelte'
  import Image from '../Image/Image.svelte'
  import Go from '../Go/Go.svelte'
  import Button from '../Button/Button.svelte'

  export let image
  export let heating
  export let cooling
  export let title
  export let specs
</script>

<div class="w-full my-4 flex flex-col space-y-1 md:space-y-4 text-left">
  {#if !!image}
    <Image className="w-80 md:w-96 h-80 md:h-96 p-4" type="custom" styleOptions={{ padding: 20 }} src={image.url} />
  {/if}
  <div class="px-1 py-5 md:py-1">
    <h2 class="text-neutral-dark max-w-xs">{title}</h2>
    <div class="flex py-1 space-x-4 md:space-x-6">
      {#if heating}
        <div class="flex space-x-2 uppercase text-red">
          <Heating className="w-6" />
          <h3>Heating</h3>
        </div>
      {/if}
      {#if cooling}
        <div class="flex space-x-2 uppercase text-lightBlue">
          <Cooling className="w-6" />
          <h3>Cooling</h3>
        </div>
      {/if}
    </div>
    {#if !!specs}
      <Go
        to={specs.url}
        redirect
        className="w-full flex justify-end text-primary py-2"
      >
        <Button
          label="view specs"
          type="primary"
          shape="ghost"
          icon="chevron_right"
        />
      </Go>
    {/if}
  </div>
</div>
