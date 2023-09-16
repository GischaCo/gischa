<template>
  <section>
    <h2 class="text-2xl font-bold text-primary text-center">
      آخرین مقالات بلاگ
    </h2>
    <div class="w-full flex items-center justify-center gap-4 py-8">
      <nuxt-link to="/" v-for="(blog, i) in recentBlogs" :key="i">
        <div
          class="w-72 h-40 p-4 flex flex-col items-start justify-between gap-3 rounded-xl border-e-4 border-s border-primary"
        >
          <!-- title -->
          <h3 class="text-lg font-bold text-primary">{{ blog.title }}</h3>

          <!-- details -->
          <div class="w-full flex items-center justify-between">
            <!-- author -->
            <div class="flex items-center justify-start gap-1">
              <base-icon
                name="pen-solid"
                class="w-3 fill-secondary"
              ></base-icon>
              <p class="text-sm text-secondary">{{ blog.author }}</p>
            </div>

            <!-- date -->
            <p class="text-sm text-secondary">{{ blog.date }}</p>
          </div>
        </div>
      </nuxt-link>
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
    title: "مهندسی نرم افزار یا Software Engineering چیست؟",
    author: "دنیا داوودی",
    date: "25 شهریور 1402",
  },
  {
    title: "لاراول 10 و مهم‌ترین ویژگی‌های آن",
    author: "دنیا داوودی",
    date: "25 شهریور 1402",
  },
  {
    title: "Socket.io چیست و چه کاربردی دارد؟ + پروژه عملی",
    author: "دنیا داوودی",
    date: "25 شهریور 1402",
  },
]);
</script>
