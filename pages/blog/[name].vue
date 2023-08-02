<template>
  <main>
    <div class="flex">
      <div class="min-h-screen markdown text w-2/3 p-6">
        <ContentDoc v-slot="{ doc }">
          <h1 class="text-4xl">{{ doc.title }}</h1>
          <ContentRenderer :value="doc" />
        </ContentDoc>
      </div>
      <ContentSidebar :page="'blog'" />
    </div>
  </main>
</template>