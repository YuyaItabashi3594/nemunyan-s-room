<script setup>
const props = defineProps({
  text: String,
  url: String,
})
const urlWithoutSlash = props.url.slice(1)
const route = useRoute()
</script>

<template>
  <NuxtLink :to="url">
    <div class="w-auto cursor-pointer">
      <div class=" hover:bg-slate-600 transition duration-75"
      :class="route.path.includes(urlWithoutSlash) && urlWithoutSlash != '' ? 'border-b border-gray-400' : ''"
      >
        <p class="text text-center p-2">{{ text }}</p>
      </div>
    </div>
  </NuxtLink>
</template>