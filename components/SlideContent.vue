<script setup>
const props = defineProps({
  slide: Object,
})

</script>

<template>
  <NuxtLink :to="slide.url">
    <img @mouseover="$emit('hovered',slide.song)" @mouseleave="$emit('unhovered')" :src="slide.image"
      class="rounded-lg object-fill h-40 w-40" />
  </NuxtLink>
</template>