<template>
  <header class="w-full px-6 py-2 flex items-center justify-between">
    <!-- info -->
    <div class="flex items-center justify-start gap-2">
      <!-- logo -->
      <nuxt-link to="/">
        <logo class="w-10"></logo>
      </nuxt-link>
      <!-- title -->
      <h1 class="text-xl -mb-2 font-extrabold text-purple-800">گیشا</h1>
    </div>

    <!-- navbar -->
    <app-navbar></app-navbar>

    <!-- other -->
    <header-panel-icon></header-panel-icon>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>
