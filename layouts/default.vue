<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(true);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>

<template>
  <Transition>
    <div v-if="loading" class="fixed inset-0 flex items-center justify-center z-10 w-full h-full bg-slate-800">
      <LoadingImage />
    </div>
  </Transition>
  <div class="h-auto min-h-screen">
    <div class="items-center justify-top flex flex-col pb-10">
      <div class="w-full">
        <Navbar />
        <div class="mt-10">
          <slot />
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style>
body {
  background-color: #1f2937;
}

.text {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  color: rgb(224, 224, 224);
}

.description {
  margin-top: 10px;
  transform-origin: top;
  transition: transform .4s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: scaleY(0);
}

.box {
  @apply border border-gray-500 p-4 mt-10 bg-gray-700 rounded-xl;
}

.markdown h2 {
  border-bottom: 1px solid #dee2e6;
  text-align: center;
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
  margin-top: 1.5rem;
}

.markdown h3 {
  font-size: 1.25rem;
  margin-top: 1rem;
}

.markdown p {
  margin-top: 0.5rem;
}

.markdown li {
  list-style: disc;
  margin-left: 1rem;
  margin-top: 1rem;
}

.markdown .bigtext {
  @apply text-center text-xl mb-4;
}

.markdown img {
  @apply object-scale-down mt-6 mx-auto;
}

.markdown .youtube {
  @apply mx-auto;
}

.v-leave-active {
  transition: opacity 1.0s ease;
}

.v-leave-to {
  opacity: 0;
}
</style>