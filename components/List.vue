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
const img = props.page.img

</script>

<template>
  <div class="ml-10 mb-4">
    <nuxt-link :to="path">
      <div class="border flex hover:bg-slate-600 h-40 items-center justify-center">
        <div class="flex-row">
        <p class="text-xl p-2">{{ title }}</p>
        <ClientOnly><font-awesome-icon class="ml-2" :icon="['fas', 'calendar-days']" /></ClientOnly><span class="ml-1">{{ date }}</span>
        <br>
        <ClientOnly><font-awesome-icon class="ml-2" :icon="['fas', 'tags']" /></ClientOnly><span v-for="tag in tags" class="ml-1">{{ tag }}</span>
      </div>
        <img class="my-auto mr-0 ml-auto object-scale-down h-20 w-auto" :src="img" />
      </div>
    </nuxt-link>
  </div>
</template>