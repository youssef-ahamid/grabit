<script>
import Accordian from "$lib/components/Accordian/Accordian.svelte";
import Section from "$lib/components/Section/Section.svelte";

export let items

</script>

<Section title="FAQ" layout=center>
    <Accordian {items} />
</Section> 
