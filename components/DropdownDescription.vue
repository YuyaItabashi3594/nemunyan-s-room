<script setup>

const props = defineProps({
  title: String,
  description: String,
})


const isOpen = ref(false)


</script>

<template>
  <div class="px-10">
    <div class="" :class="{ 'border rounded': isOpen }">
      <div @click="isOpen = !isOpen, check()" class="text-center hover:bg-gray-500"
      :class="{ 'border-b': isOpen }">
        <p class="text text-xl py-1">{{ title }}</p>
      </div>

      <div v-if="isOpen" class="description">
        <ContentDoc :path="'/' + description" class="text" />
      </div>
    </div>
  </div>
</template>