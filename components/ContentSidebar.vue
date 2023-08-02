<script setup>
const props = defineProps({
  page: String
})

const fetchedTags = await queryContent(props.page).only('tags').find()
const tagArray = computed(() => {
  const Array = {}
  for (const tag of fetchedTags) {
    console.log(tag)
    for (const item of tag.tags) {
      console.log(item)
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
    <p>タグ一覧</p>
    <div v-for="(value, key) of tagArray">
      <p>{{ key }}({{ value }})</p>
    </div>
  </div>
</template>