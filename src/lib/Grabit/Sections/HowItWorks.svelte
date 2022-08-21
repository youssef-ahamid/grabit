<script>
  import Section from '$lib/components/Section/Section.svelte'

  export let image
  export let title
  export let text
  export let steps = []
</script>

<Section className="bg-neutral">
  <div class="flex flex-col items-center w-full pb-6">
    <h2>{title}</h2>
    {#if text}
      <p>{text}</p>
    {/if}
  </div>
  <div
    class="w-full flex flex-col space-y-8 md:space-y-0 md:flex-row items-center justify-between"
  >
    <img
      src={image?.url}
      alt="How it works - Grabit"
      class="w-full max-w-[80%] md:max-w-[40%] rounded-xl"
    />
    <div class="flex flex-col space-y-6 md:max-w-[40%]">
      {#each steps as step, i}
        <div
          class="rounded-2xl group bg-neutralLight hover:bg-brand hover:ring-2 hover:shadow-lg hover:scale-105 cursor-pointer hover:ring-offset-4 hover:ring-offset-neutral ring-brand flex items-center justify-start space-x-3 p-4 transition-300"
        >
          <div
            class="w-10 h-10 md:w-16 md:h-16 flex justify-center items-center bg-neutral group-hover:bg-brand group-hover:ring-neutral ring-transparent ring-2 rounded-full transition-300"
          >
            <p
              class="text-brand text-xl md:text-3xl font-bold group-hover:text-neutral transition-300"
            >
              {i + 1}
            </p>
          </div>
          <div
            class="flex max-w-[80%] flex-col space-y-2 text-neutralDark group-hover:text-neutralLight transition-300"
          >
            <h3 class="capitalize">{step.title}</h3>
            <p>{step.text}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</Section>
