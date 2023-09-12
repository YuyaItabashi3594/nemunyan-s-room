<script setup lang="ts">

import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const props = defineProps({
  game: String,
  tag: String,
  extension: String
})

const isOpen = ref(false)

const query: QueryBuilderParams = ref({ path: `/walkthrough/${props.game}`, sort: [{ date: -1 }] })

if (props.tag != null) {
  query.value = { path: `/walkthrough/${props.game}`, where: [{ tag: { $in: props.tag } }], sort: [{ date: -1 }] }
}


</script>

<template>
  <div class="border w-1/5">
    <img :src="`/walkthrough/${props.game}.${props.extension}`" class="object-scale-down h-auto">
    <p class="text text-center relative">{{ props.game }}
      <br>{{ props.tag }}
      <span class="text-2xl absolute top-2 right-3" @click="isOpen = !isOpen">▼</span>
    </p>
    <ContentList :query="query" v-slot="{ list }">
      <article v-for="page in list" :key="page._path">
        <NuxtLink :to="page._path">
          <div>{{ page.title }}
          </div>
        </NuxtLink>
      </article>
    </ContentList>
  </div>
</template>