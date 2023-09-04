<script setup>
const h2Collection = ref()
const h2Array = ref([])

onMounted(() => {
  h2Collection.value = document.querySelectorAll('h2')
  console.log(h2Collection.value)
  for (const h2 of h2Collection.value) {
    h2Array.value.push(h2.innerText)
  }
})

</script>

<template>
  <main>
    <div class="flex">
      <WalkthroughProgressBar :h2TextArray="h2Array" />
      <div class="min-h-screen markdown text w-full p-6">
        <ContentDoc v-slot="{ doc }">
          <h1 class="text-4xl">{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </ContentDoc>
      </div>
    </div>
  </main>
</template>