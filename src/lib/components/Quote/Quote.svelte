<script>
  import Animateonenterview from '$lib/components/Animate On Enter View/animate on enter view.svelte'
  import Image from '$lib/components/Image/Image.svelte'

  export let image
  export let name = ''
  export let role = ''
  export let text = ''
</script>

<div class="w-full flex justify-around items-center flex-col-reverse md:flex-row text-left my-6">
  <div class="w-full md:max-w-[45%]">
    <Animateonenterview type="flyLeft" delay="100">
      <Image src={image.url} alt={name} />
    </Animateonenterview>
    <Animateonenterview type="flyUp" delay="500" className="px-4">
      <p class="font-bold">{name}</p>
      <p class="body-sm font-light">{role}</p>
    </Animateonenterview>
  </div>
  <Animateonenterview
    type="flyRight"
    delay="300"
    className="max-w-[85%] md:max-w-[45%] my-4"
  >
    <div class="absolute -top-6 md:-top-8 -left-6 md:-left-8 text-4xl md:text-6xl text-brand font-bold">"</div>
    <p class="body-sm whitespace-pre-line">{text}</p>
  </Animateonenterview>
</div>
