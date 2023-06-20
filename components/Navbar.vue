<template>
  <div class="flex items-end justify-end">
    <div class="w-1/2 flex items-start justify-start p-2">
      <p class="text text-center ml-12 cursor-pointer">nemunyan's room</p>
    </div>
    <div class="w-1/2 grid grid-cols-5">
      <NavbarContent :text="'Home'" :url="'/'" />
      <NavbarContent :text="'About'" :url="'/about'" />
      <NavbarContent :text="'Works'" />
      <NavbarContent :text="'Blog'" />
      <NavbarContent :text="'Walkthrough'" />
    </div>
  </div>
</template>
