<script setup>
  const props = defineProps({
    src:String,
    alt:String,
    url:String,
  })
</script>

<template>
  <a class="mx-2" :href="url"><img class="object-scale-down h-12" :src="src" :alt="alt"></a>
</template>