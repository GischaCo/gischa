<template>
  <header
    class="fixed top-0 w-full h-14 px-6 flex items-center justify-between bg-light"
  >
    <!-- info -->
    <div class="flex items-center justify-start gap-2">
      <!-- logo -->
      <nuxt-link to="/">
        <logo class="w-9"></logo>
      </nuxt-link>
      <!-- title -->
      <h1 class="text-xl -mb-2 font-bold text-primary">گیشا</h1>
    </div>

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
