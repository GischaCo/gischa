<template>
  <section>
    <h2 class="text-2xl font-bold text-primary text-center">
      آخرین مقالات بلاگ
    </h2>
    <div class="w-full flex items-center justify-center gap-6 py-8">
      <landing-blogs-item
        v-for="(blog, i) in recentBlogs"
        :key="i"
        :blog="blog"
      ></landing-blogs-item>
    </div>

    <!-- see more -->
    <a href="blog.gischa.ir" class="block text-center mb-8">مشاهده بیشتر</a>
  </section>
</template>
Socket.io چیست و چه کاربردی دارد؟ + پروژه عملی
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
