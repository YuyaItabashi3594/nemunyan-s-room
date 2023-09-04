<script setup>

const props = defineProps({
  h2TextArray: Array,
})

const isScrolledArray = ref([])


</script>

<template>
  <div class="w-1/5 flex-row">
    <div v-for="(h2Text, index) in props.h2TextArray">
      <ProgressBarComponent :text="h2Text" :isScrolled="isScrolledArray[index]" />
    </div>
  </div>
</template>