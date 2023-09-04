<script setup lang="ts">

import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const props = defineProps({
  game: String,
  tag: String,
  extension: String
})

const query: QueryBuilderParams = ref({ path: `/walkthrough/${props.game}`, sort: [{ date: -1 }] })

if (props.tag != null) {
  query.value = { path: `/walkthrough/${props.game}`, where: [{ tags: { $in: props.tag } }], sort: [{ date: -1 }] }
}

</script>

<template>
  <div class="border w-1/5">
  <img :src="`/walkthrough/${props.game}.${props.extension}`" class="object-scale-down h-auto">
  <p class="text text-center">{{ props.game }}
    <br>{{ props.tag }}
  </p>
</div>
</template>