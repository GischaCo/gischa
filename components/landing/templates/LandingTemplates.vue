<template>
  <section
    class="w-full bg-light flex flex-col items-center justify-start gap-4 py-10"
  >
    <!-- title -->
    <h2 class="text-2xl font-bold text-primary text-center">
      جدیدترین قالب‌ها
    </h2>

    <!-- templates -->
    <div class="w-full flex items-center justify-center gap-8">
      <landing-templates-item
        v-for="(template, i) in newestTemplates"
        :key="i"
        :template="template"
      >
      </landing-templates-item>
    </div>

    <!-- see more -->
    <base-btn to="/temps" append-icon="arrow-left-solid" variant="text"
      >مشاهده بیشتر</base-btn
    >
  </section>
</template>

<script>
export default {
  name: "LandingTemplates",
};
</script>

<script setup>
import { ref } from "@nuxtjs/composition-api";

// variables
const newestTemplates = ref([
  {
    path: "/temps/sdcspd0vinsdfcolk",
    title: "بنفشه",
    description:
      "پشتیبانی از زبان فارسی، راست‌چین، قابلیت سفارشی‌سازی و دو زبانه شدن",
    img: require("@/assets/img/template-placeholder.jpg"),
  },
  {
    path: "/temps/smcd4sodkvanssdsd",
    title: "Aria 12",
    description: "انگلیسی، قابلیت سفارشی‌سازی و چند زبانه شدن",
    img: require("@/assets/img/template-placeholder.jpg"),
  },
  {
    path: "/temps/sl6c66cksdcsp0cka",
    title: "برترین",
    description:
      "کاملا ریسپانسیو، پشتیبانی 24 ساعته و نامحدود، قابلیت شخصی‌سازی",
    img: require("@/assets/img/template-placeholder.jpg"),
  },
]);
</script>
