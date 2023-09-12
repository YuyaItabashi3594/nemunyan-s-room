<script setup>

const props = defineProps({
  h2TextArray: Array,
})

const isScrolledArray = ref([])

</script>

<template>
  <div>
    <ul class="flex-row sticky top-20">
      <li v-for="(h2Text, index) in props.h2TextArray">
        <ProgressBarComponent :text="h2Text" :isScrolled="isScrolledArray[index]" />
      </li>
    </ul>
  </div>
</template>