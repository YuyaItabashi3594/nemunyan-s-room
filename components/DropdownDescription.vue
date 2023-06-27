<script setup>


const props = defineProps({
  title: String,
  description: String,
})


const isOpen = ref(false)


</script>

<template>
  <div class="px-10">
    <div class="">
      <div @click="isOpen = !isOpen" class="text-center hover:bg-gray-500">
        <p class="text text-xl py-1">{{ title }}</p>
      </div>
      <Transition name="slide">
      <ul v-if="isOpen" class="description border rounded border-gray-500" >
        <ContentDoc :path="'/' + description" v-slot="{ doc }">
          <ContentRenderer class="text p-2" :value="doc" />
        </ContentDoc>
      </ul>
      </Transition>
    </div>
  </div>
</template>

<style>
.content-doc .h2, .content-doc h2 {
  border-top: 1px solid #dee2e6;
  margin-bottom: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
}
</style>