<script setup>

const props = defineProps({
  title: String,
  description: String,
})


const isOpen = ref(false)


</script>

<template>
  <div class="text-center hover:bg-gray-500">
    <div @click="isOpen = !isOpen,check()" class="">
      <p class="text">{{ title }}</p>
    </div>
  </div>
  <div v-if="isOpen" class="description">
    <ContentDoc :path="'/' + description" class="text" />
  </div>
</template>