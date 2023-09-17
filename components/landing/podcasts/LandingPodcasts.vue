<template>
  <section
    class="w-full bg-light flex flex-col items-center justify-start gap-10 py-8"
  >
    <!-- title -->
    <h2 class="text-2xl font-bold text-primary text-center">
      پربازدیدترین پادکست‌ها
    </h2>

    <!-- podcasts -->
    <div class="max-w-fit flex flex-col items-start justify-center gap-6 py-8">
      <landing-podcasts-item
        v-for="(podcast, i) in popularPodcasts"
        :key="i"
        :podcast="podcast"
      ></landing-podcasts-item>
    </div>

    <!-- see more -->
    <base-btn to="/podcast" append-icon="arrow-left-solid" variant="text"
      >مشاهده بیشتر</base-btn
    >
  </section>
</template>

<script>
export default {
  name: "LandingPodcasts",
};
</script>

<script setup>
import { ref } from "@nuxtjs/composition-api";

// variables
const popularPodcasts = ref([
  {
    path: "/podcast/e98ew0f98sixko",
    title: "مهندسی نرم افزار یا Software Engineering چیست؟",
    like: 23,
    date: "26 شهریور 1402",
  },
  {
    path: "/podcast/cd0f9sdf8sosxf",
    title: "لاراول 10 و مهم‌ترین ویژگی‌های آن",
    like: 23,
    date: "26 شهریور 1402",
  },
  {
    path: "/podcast/6sd56fcsdvfwer",
    title: "Socket.io چیست و چه کاربردی دارد؟",
    like: 23,
    date: "26 شهریور 1402",
  },
]);
</script>
