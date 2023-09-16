<template>
  <div>
    <nav class="flex items-center justify-center gap-2">
      <span v-for="link in navLinks" :key="link.title" class="text-primary"
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
    url: "blog.gischa.ir",
  },
  {
    title: "podcast",
    titleFa: "پادکست",
    url: "cast.gischa.ir",
  },
  {
    title: "template",
    titleFa: "قالب‌ها",
    url: "temps.gischa.ir",
  },
  {
    title: "apps",
    titleFa: "برنامه‌ها",
    url: "apps.gischa.ir",
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
