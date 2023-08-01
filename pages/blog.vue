<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: '/blog', limit: 10, sort: [{ date: -1 }] }
</script>

<template>
  <div class="min-h-screen text w-2/3">
    <ContentList :query="query" v-slot="{ list }">
      <article v-for="page in list" :key="page._path">
        <List :page="page" />
      </article>
    </ContentList>
  </div>
</template>