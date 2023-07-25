<script setup>
import VueMarkdown from 'vue-markdown-render'

const options = ({
  html:true,
  linkify: true,
  typographer: true
})

const props = defineProps({
  title: String,
  description: String,
})

const isOpen = ref(false)
const markdownContent = ref('')

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    const filePath = `../aboutmd/${props.description}.md`;
    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        markdownContent.value = data;
      })
      .catch(error => {
        console.error(error);
      });
  }
};

const triangle = computed(() => {
  return isOpen.value ? '▲' : '▼';
});
</script>

<template>
  <div class="mt-4">
    <div :class="{ 'border': isOpen }">
      <div @click="toggleOpen" class="text-center hover:bg-slate-600 transition duration-75 cursor-pointer">
        <p class="text text-xl py-1" :class="{ 'border-b': isOpen }">{{ title }}  <span>{{ triangle }}</span></p>
      </div>
      <Transition name="slide">
        <ul v-if="isOpen" class="description rounded border-gray-500">
          <vue-markdown class="markdown text p-2" :source="markdownContent" :options="options" />
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
.markdown li {
  list-style: disc;
  margin-left: 1rem;
}

.markdown .bigtext {
  @apply text-center text-xl mb-4;
}

.markdown img {
  @apply object-scale-down h-72;
}

.markdown .youtube {
  @apply mx-auto;
}
</style>