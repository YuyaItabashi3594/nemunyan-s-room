<script setup>
const props = defineProps({
  text: String,
  url: String,
})
</script>

<template>
  <div class="w-auto cursor-pointer">
    <div class="rounded-xl hover:bg-slate-600 transition duration-75">
      <p class="text text-center p-2">{{ text }}</p>
    </div>
  </div>
</template>