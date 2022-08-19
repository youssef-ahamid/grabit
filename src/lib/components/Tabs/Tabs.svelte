<script>
  import List from '$lib/components/List/List.svelte'
  import Animateonenterview from '../Animate On Enter View/animate on enter view.svelte'

  export let styleOptions = {}
  export let tabs = []
  export let activeTab = 0
  export let transitionType = 'fade'
  export let onTabChange = () => {}

  $: onTabChange(tabs[activeTab])
</script>

<List
  items={tabs}
  let:item={tab}
  let:index
  horizontal
  className="flex-nowrap space-x-4 md:space-x-6"
>
  <div
    on:click={() => {
      activeTab = index
    }}
    class="cursor-pointer"
  >
    <slot
      name="header"
      title={tab.title}
      {index}
      active={activeTab === index}
    />
  </div>
</List>

{#key activeTab}
  <Animateonenterview type={transitionType}>
    <slot tab={tabs[activeTab]} />
  </Animateonenterview>
{/key}
