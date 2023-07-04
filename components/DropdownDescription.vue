<script setup>


const props = defineProps({
  title: String,
  description: String,
})


const isOpen = ref(false)


</script>

<template>
  <div class="px-10">
    <div :class="{'border':isOpen}">
      <div @click="isOpen = !isOpen" class="text-center hover:bg-slate-600 transition duration-75 cursor-pointer">
        <p class="text text-xl py-1" :class="{'border-b':isOpen}">{{ title }}</p>
      </div>
      <Transition name="slide">
      <ul v-if="isOpen" class="description rounded border-gray-500" >
        <ContentDoc :path="'/' + description" v-slot="{ doc }">
          <ContentRenderer class="text p-2 markdown" :value="doc" />
        </ContentDoc>
      </ul>
      </Transition>
    </div>
  </div>
</template>

<style>
.markdown h2 {
  border-bottom: 1px solid #dee2e6;
  text-align: center;
  font-size: 1.5rem;
  padding-bottom: 0.5rem;
}
.markdown p {
  margin-top: 0.5rem;
}
.markdown img {
  @apply object-scale-down h-72;
}
</style>