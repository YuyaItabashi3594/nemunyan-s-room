<template>
  <div class="bg-gray-800 w-full h-full min-h-screen items-center justify-top flex flex-col pb-10">
    <div class="max-w-screen-md">
      <CenterBanner />
      <Navbar />
      <div class="mt-10">
        <slot />
      </div>
    </div> 
  </div>
  <Footer />

</template>

<style>
.text{
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem; /* 28px */ 
  color:rgb(224, 224, 224);
}

.box{
  @apply border border-gray-500 p-4 mt-10 bg-gray-700 rounded-xl;
}

</style>