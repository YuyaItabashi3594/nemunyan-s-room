<script setup>
const props = defineProps({
  page: {
    type: Object,
    required: true
  }
})

const path = props.page._path
const title = props.page.title
const date = props.page.date.substr(0, 10)
const tags = props.page.tags
</script>

<template>
  <div class="ml-10 grid grid-cols-2 gap-4">
    <div class="border relative hover:bg-slate-600">
      <nuxt-link :to="path">
        <img class="absolute top-4 right-4 object-scale-down h-16" src="/blog/nuxtjs.png" />
        <p class="text-3xl p-1">{{ title }}</p>
      </nuxt-link>
      <font-awesome-icon class="ml-2" :icon="['fas', 'calendar-days']" /><span class="ml-1">{{ date }}</span>
      <br>
      <font-awesome-icon class="ml-2" :icon="['fas', 'tags']" /><span v-for="tag in tags" class="ml-1">{{ tag }}</span>
    </div>
  </div>
</template>