<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const articlesPerPage = 100
const pageNumber: Ref<number> = ref(1)
const route = useRoute()

const tag = computed(() => {
  const currentTag = ref(route.query.tags)
  return currentTag.value ? currentTag.value : null
})
const query: QueryBuilderParams = ref({ path: '/blog', limit: articlesPerPage, skip: pageNumber.value - 1, sort: [{ date: -1 }] })

if(tag.value != null){
  query.value = { path: '/blog',where: [{tags: { $in :tag.value}}],limit: articlesPerPage, skip: pageNumber.value - 1, sort: [{ date: -1 }] }
}

function IncreasePage() {
  pageNumber.value += 1
  query.value.skip = pageNumber.value - 1
}

function DecreasePage() {
  if (pageNumber.value > 1) {
    pageNumber.value -= 1
    query.value.skip = pageNumber.value - 1
  }
}

watch(() => tag.value,(newValue,oldValue) => {
  if(newValue != oldValue){
    if(tag.value != null){
  query.value = { path: '/blog',where: [{tags: { $in :tag.value}}],limit: articlesPerPage, skip: pageNumber.value - 1, sort: [{ date: -1 }] }
  }
  else{
    query.value = { path: '/blog',limit: articlesPerPage, skip: pageNumber.value - 1, sort: [{ date: -1 }] }
  }
}
})

</script>

<template>
  <div class="flex">
    <!-- <div class="mt-10 text text-center">
    <font-awesome-icon class="mx-10" :icon="['fas', 'arrow-left']" size="2xl" @click="DecreasePage()" />
    <span>{{ pageNumber }}</span>
    <font-awesome-icon class="mx-10" :icon="['fas', 'arrow-right']" size="2xl" @click="IncreasePage()" />
  </div> -->
    <div class="mt-4 text w-2/3 grid grid-cols-2 gap-4">
      <ContentList :query="query" v-slot="{ list }">
        <article v-for="page in list" :key="page._path">
          <List :page="page" />
        </article>
      </ContentList>
    </div>
    <ContentSidebar :currentpage="'blog'" />
  </div>
</template>