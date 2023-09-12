<script setup>
const props = defineProps({
  slide: Object,
  isLinkActive: Boolean,
})

</script>

<template>
  <NuxtLink v-if="isLinkActive" :to="slide.url">
    <img @mouseover="$emit('hovered',slide.song)" @mouseleave="$emit('unhovered')" :src="slide.image"
      class="rounded-lg object-fill h-40 w-40" />
  </NuxtLink>
  <div v-else>
    <img @mouseover="$emit('hovered',slide.song)" @mouseleave="$emit('unhovered')" :src="slide.image"
    @click="$emit('clicked')"
      class="rounded-lg object-fill h-40 w-40" />
  </div>
</template>