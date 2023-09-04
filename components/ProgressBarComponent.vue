<script setup>

const props = defineProps({
  text: String,
  isScrolled: Boolean,
})

const isScrolled = ref(props.isScrolled !== undefined ? props.isScrolled : false);

</script>

<template>
  <div class="flex mt-10">
    <font-awesome-icon v-if="!isScrolled" class="text text-2xl text-center ml-6 pt-0.5" :icon="['far', 'circle']" />
    <font-awesome-icon v-if="isScrolled" class="text text-2xl text-center ml-6 pt-0.5" :icon="['far', 'circle-check']" style="color: #00ff00;" />
    <p class="text text-lg ml-4 leading-6 truncate whitespace-normal">{{ text }}</p>
  </div>
</template>