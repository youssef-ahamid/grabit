<script>
  import Section from '$lib/components/Section/Section.svelte'

  export let image
  export let title
  export let steps = []
</script>

<Section {title} {text} layout="center">
  <div
    class="w-full flex flex-col-reverse md:flex-row items-center justify-between"
  >
    <img
      src={image?.url}
      alt="How it works - Grabit"
      class="w-full max-w-[80%] md:max-w-lg"
    />
    <div class="flex flex-col space-y-6">
      {#each steps as step, i}
        <div
          class="rounded-2xl group bg-neutralLight hover:bg-brand hover:ring-2 hover:ring-offset-4 hover:ring-offset-transparent flex items-center space-x-3"
        >
          <div
            class="w-16 h-16 md:w-24 h-24 flex justify-center items-center bg-neutralLight rounded-full"
          >
            <p class="text-brand text-3xl font-bold">{i + 1}</p>
          </div>
          <div
            class="flex flex-col space-y-2 text-neutralDark group-hover:text-neutralLight"
          >
            <h3>{step.title}</h3>
            <p>{steps.text}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</Section>
