<template>
  <header
    :class="headerStyle"
    class="fixed top-0 w-full flex items-center justify-between overflow-visible transition-all duration-300"
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

<script setup>
import { ref, computed, onUnmounted } from "@nuxtjs/composition-api";

// variables
const scrolled = ref(false);

// computed
const headerStyle = computed(() => {
  const style = {
    default: "bg-light h-14 px-6",
    scrolled: "bg-white h-12 px-3 shadow",
  };
  return scrolled.value ? style.scrolled : style.default;
});

// methods
const pageScrollHandler = () => {
  if (document.documentElement.scrollTop < 50) {
    scrolled.value = false;
  } else {
    scrolled.value = true;
  }
};

// lifecycles
window.addEventListener("scroll", pageScrollHandler); // created
onUnmounted(() => {
  window.removeEventListener("scroll", pageScrollHandler); // created
});
</script>
