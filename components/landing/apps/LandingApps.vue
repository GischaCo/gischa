<template>
  <section class="w-full flex flex-col items-center justify-start gap-4 py-10">
    <!-- title -->
    <h2 class="text-2xl font-bold text-primary text-center">برنامه‌های ویژه</h2>

    <!-- apps -->
    <div class="w-full flex items-center justify-center gap-6 py-8">
      <landing-apps-item
        v-for="(app, i) in specialApps"
        :key="i"
        :app="app"
      ></landing-apps-item>
    </div>

    <!-- see more -->
    <base-btn to="/apps" append-icon="arrow-left-solid" variant="text"
      >مشاهده بیشتر</base-btn
    >
  </section>
</template>

<script>
export default {
  name: "LandingApps",
};
</script>

<script setup>
import { ref } from "@nuxtjs/composition-api";

// variables
const specialApps = ref([
  {
    title: "Clock App",
    description:
      "برنامه کاربردی ترکیبی از ساعت جهانی، آلارم، کرنومتر(stopwatch) و تایمر",
    tools: ["Vue 3", "Nuxt 2", "Tailwind Css", "Javascript"],
    properties: [
      "PWA",
      "کاملا واکنش‌گرا (ریسپانسیو)",
      "قابلیت شخصی‌سازی طرح و رنگ",
      "قابلیت چندزبانه‌شدن",
      "پشتیبانی رایگان در صورت بروز اشکال",
    ],
    price: 199000,
    sale: 0,
    path: "/apps/lscd0sndf0sdcnsmxdcl",
    images: [
      require("@/assets/img/clock-1.png"),
      require("@/assets/img/clock-2.png"),
      require("@/assets/img/clock-3.png"),
    ],
  },
  {
    title: "Clock App",
    description:
      "برنامه کاربردی ترکیبی از ساعت جهانی، آلارم، کرنومتر(stopwatch) و تایمر",
    tools: ["Vue 3", "Nuxt 2", "Tailwind Css", "Javascript"],
    properties: [
      "PWA",
      "کاملا واکنش‌گرا (ریسپانسیو)",
      "قابلیت شخصی‌سازی طرح و رنگ",
      "قابلیت چندزبانه‌شدن",
      "پشتیبانی رایگان در صورت بروز اشکال",
    ],
    price: 230000,
    sale: null,
    path: "/apps/lscd0sndf0sdcnsmxdcl",
    images: [
      require("@/assets/img/clock-1.png"),
      require("@/assets/img/clock-2.png"),
      require("@/assets/img/clock-3.png"),
    ],
  },
  {
    title: "Clock App",
    description:
      "برنامه کاربردی ترکیبی از ساعت جهانی، آلارم، کرنومتر(stopwatch) و تایمر",
    tools: ["Vue 3", "Nuxt 2", "Tailwind Css", "Javascript"],
    properties: [
      "PWA",
      "کاملا واکنش‌گرا (ریسپانسیو)",
      "قابلیت شخصی‌سازی طرح و رنگ",
      "قابلیت چندزبانه‌شدن",
      "پشتیبانی رایگان در صورت بروز اشکال",
    ],
    price: 46000,
    sale: 120000,
    path: "/apps/lscd0sndf0sdcnsmxdcl",
    images: [
      require("@/assets/img/clock-1.png"),
      require("@/assets/img/clock-2.png"),
      require("@/assets/img/clock-3.png"),
    ],
  },
]);
</script>
