<template>
  <main>
    <div class="flex">
      <div class="min-h-screen markdown text w-2/3 p-6">
        <ContentDoc v-slot="{ doc }">
          <h1 class="text-4xl">{{ doc.title }}</h1>
          <font-awesome-icon class="mt-4" :icon="['fas', 'calendar-days']" /><span class="ml-1">{{ doc.date.substr(0, 10) }}</span>
          <font-awesome-icon class="ml-2" :icon="['fas', 'tags']" /><span v-for="tag in doc.tags" class="ml-1">{{ tag }}</span>
          <ContentRenderer :value="doc" />
        </ContentDoc>
      </div>
      <ContentSidebar :currentpage="'blog'" />
    </div>
  </main>
</template>