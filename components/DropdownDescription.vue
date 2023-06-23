<script setup>

const props = defineProps({
  title: String,
  description: String,
})

const isOpen = ref(false)
</script>

<template>
  <div class="text-center box hover:bg-gray-500">
    <div @click="isOpen = !isOpen" class="">
      <p class="text">{{ title }}</p>
    </div>
  </div>
  <div v-if="isOpen" class="description">
    <p class="text">{{ description }}</p>
  </div>
</template>