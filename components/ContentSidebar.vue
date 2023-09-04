<script setup>
const props = defineProps({
  currentpage: String
})

const fetchedTags = await queryContent(props.currentpage).only('tags').find()
const tagArray = computed(() => {
  const Array = {}
  for (const tag of fetchedTags) {
    for (const item of tag.tags) {
      if (Array[item]) {
        Array[item] += 1;
      } else {
        Array[item] = 1;
      }
    }
  }
  return Array
})

</script>

<template>
  <div class="w-1/3 text px-20 text-xl">
    <p class="mb-2">タグ一覧</p>
    <nuxt-link :to="{ path: `/${currentpage}` }">
      <p class="mb-2 text-2xl">全て({{ fetchedTags.length }})</p>
    </nuxt-link>
    <div v-for="(value, key) of tagArray">
      <nuxt-link :to="{ path: `/${currentpage}`, query: { tags: key } }">
        <p class="my-1">{{ key }}({{ value }})</p>
      </nuxt-link>
    </div>
  </div>
</template>