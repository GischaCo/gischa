<template>
  <div>
    <nav class="flex items-center justify-center gap-4">
      <span
        v-for="link in navLinks"
        :key="link.title"
        class="text-primary hover:text-secondary transition-all"
        ><nuxt-link :to="link.url">{{ link.titleFa }}</nuxt-link></span
      >
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppNavbar",
};
</script>

<script setup>
import { ref } from "@nuxtjs/composition-api";

// variables
const navLinks = ref([
  {
    title: "blog",
    titleFa: "بلاگ",
    url: "/blog",
  },
  {
    title: "podcast",
    titleFa: "پادکست",
    url: "/podcasts",
  },
  {
    title: "template",
    titleFa: "قالب‌ها",
    url: "/templates",
  },
  {
    title: "apps",
    titleFa: "برنامه‌ها",
    url: "/apps",
  },
  {
    title: "about",
    titleFa: "درباره ما",
    url: "/about",
  },
  {
    title: "contact",
    titleFa: "ارتباط با ما",
    url: "/contact",
  },
]);
</script>
