<script setup>

</script>

<template>
  <CenterBanner />
  <div class="mx-auto flex flex-col items-center justify-center mt-4">
    <h1 class="text">Welcome to the homepage!</h1>
    <div class="box">
      <p class="text text-xl text-center">Learned Programming Languages/Frameworks</p>
      <div class="flex flex-row mt-4 items-center justify-center">
        <Logo :src="'/logo/laravel.png'" :url="'https://laravel.com/'" :alt="'Laravel'" />
        <Logo :src="'/logo/vue.png'" :url="'https://ja.vuejs.org/'" :alt="'vue'" />
        <Logo :src="'/logo/inertiajs.png'" :url="'https://inertiajs.com/'" :alt="'Inertia'" />
        <Logo :src="'/logo/jetstream.png'" :url="'https://github.com/laravel/jetstream'" :alt="'Inertia'" />
      </div>
    </div>
    <div class="box">
      <p class="text text-xl text-center">Currently Working On</p>
      <div class="flex flex-row mt-4 items-center justify-center">
        <Logo :src="'/logo/nuxtjs.png'" :url="'https://nuxtjs.org/'" :alt="'nuxt.js'" />
        <Logo :src="'/logo/react.png'" :url="'https://react.dev/'" :alt="'React'" />
        <Logo :src="'/logo/nextjs.svg'" :url="'https://nextjs.org/'" :alt="'next.js'" />
      </div>
    </div>
    <div class="box">
      <p class="text text-xl text-center">Favorite Games</p>
      <div class="flex flex-col mt-4 items-center justify-center">
        <GameImage :src="'/games/iidx.png'" :url="'https://www.konami.com/amusement/video/bm2dx/'" :alt="'beatmania IIDX'" />
        <GameImage :src="'/games/eiketsu.png'" :url="'https://www.eiketsu-taisen.com/'" :alt="'英傑大戦'" />
      </div>
    </div>
  </div>
</template>

