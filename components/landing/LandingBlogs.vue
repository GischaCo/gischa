<template>
  <section class="w-full flex flex-col items-center justify-start gap-8">
    <!-- title -->
    <h2 class="text-2xl font-bold text-primary text-center">
      آخرین مقالات بلاگ
    </h2>

    <!-- blogs -->
    <div class="w-full flex items-center justify-center gap-6 py-8">
      <landing-blogs-item
        v-for="(blog, i) in recentBlogs"
        :key="i"
        :blog="blog"
      ></landing-blogs-item>
    </div>

    <!-- see more -->
    <base-btn to="/blog" append-icon="arrow-left-solid" variant="text"
      >مشاهده بیشتر</base-btn
    >
  </section>
</template>

<script>
export default {
  name: "LandingBlogs",
};
</script>

<script setup>
import { ref } from "@nuxtjs/composition-api";

// variables
const recentBlogs = ref([
  {
    path: "/blog/e98ew0f98sixko",
    title: "مهندسی نرم افزار یا Software Engineering چیست؟",
    author: {
      name: "دنیا داوودی",
      avatar: require("@/assets/img/manager-profile.jpg"),
    },
    date: "25 شهریور 1402",
  },
  {
    path: "/blog/cd0f9sdf8sosxf",
    title: "لاراول 10 و مهم‌ترین ویژگی‌های آن",
    author: {
      name: "دنیا داوودی",
      avatar: require("@/assets/img/manager-profile.jpg"),
    },
    date: "25 شهریور 1402",
  },
  {
    path: "/blog/6sd56fcsdvfwer",
    title: "Socket.io چیست و چه کاربردی دارد؟ + پروژه عملی",
    author: {
      name: "دنیا داوودی",
      avatar: require("@/assets/img/manager-profile.jpg"),
    },
    date: "25 شهریور 1402",
  },
]);
</script>
