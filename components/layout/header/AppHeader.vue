<template>
  <header
    class="fixed top-0 w-full h-14 px-6 flex items-center justify-between bg-light overflow-visible"
  >
    <!-- info -->
    <nuxt-link to="/">
      <div
        class="flex items-center justify-start gap-2 hover:scale-105 transition-all"
      >
        <!-- logo -->
        <logo class="w-9"></logo>
        <!-- title -->
        <h1 class="text-xl -mb-2 font-bold text-primary">گیشا</h1>
      </div>
    </nuxt-link>

    <!-- navbar -->
    <app-navbar></app-navbar>

    <!-- other -->
    <header-panel></header-panel>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>
