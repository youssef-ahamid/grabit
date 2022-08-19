<script>
  export let ios
  export let android
  let className = ""
  export { className as class }
</script>

<div class="grid grid-cols-2 social-btns items-center justify-between {className}">
  <a class="app-btn cursor-pointer blu flex items-center justify-start space-x-2 p-1 ring-2 ring-neutralDark transition-300 hover:scale-105 hover:ring-offset-2 active:ring-offset-neutralLight" href={ios}>
    <i class="fab fa-apple" />
    <p class="font-bold text-[8px] leading-none py-1 whitespace-nowrap">
      Available on the <br /> <span class="capitalize text-sm md:text-base">App Store</span>
    </p>
  </a>

  <a class="app-btn cursor-pointer blu flex items-center justify-start space-x-2 p-1 ring-2 ring-neutralDark transition-300 hover:scale-105 hover:ring-offset-2 ring-offset-neutralLight" href={android}>
    <i class="fab fa-google-play" />
    <p class="font-bold text-[8px] leading-none py-1 whitespace-nowrap">Get it on <br /> <span class="capitalize text-sm md:text-base">Google Play</span></p>
  </a>
</div>

<style>
  .app-btn {
    color: #fff;
    margin: 20px 10px;
    text-align: left;
    border-radius: 5px;
    text-decoration: none;
    font-family: 'Lucida Grande', sans-serif;
    font-size: 10px;
    text-transform: uppercase;
  }
  .app-btn.blu {
    background-color: #101010;
  }
  .app-btn.blu:hover {
    background-color: #454545;
  }
  .app-btn i {
    width: 20%;
    text-align: center;
    font-size: 28px;
    margin-right: 7px;
  }
</style>
