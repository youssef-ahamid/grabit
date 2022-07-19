<script>
  export let content = {}
  export let title = ''
</script>

<div class="blog-content">
  {#if !!title}
    <h2 class="py-2">{title}</h2>
  {/if}
  <div class="whitespace-pre-line">
      {@html content.html}
  </div>
</div>
