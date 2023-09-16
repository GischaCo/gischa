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
      <nuxt-link
        :to="template.path"
        :key="i"
        v-for="(template, i) in newestTemplates"
      >
        <div
          class="relative w-72 h-[17rem] p-1.5 bg-gradient-to-tr from-primary to-secondary rounded-2xl flex flex-col items-start justify-start gap-2 overflow-hidden"
        >
          <!-- image -->
          <img :src="template.img" :alt="template.title" class="rounded-t-xl" />

          <!-- absolute -->
          <div
            class="absolute -bottom-10 -right-4 w-[110%] h-2/3 bg-gradient-to-tr from-primary to-purple-400 rounded-3xl -rotate-12 z-10"
          ></div>

          <!-- details -->
          <div
            class="absolute bottom-2 right-0 w-full px-4 flex flex-col items-start justify-start gap-1 z-20"
          >
            <!-- title -->
            <h3 class="text-lg font-bold text-light">{{ template.title }}</h3>

            <!-- description -->
            <p class="text-light">{{ template.description }}</p>

            <!-- see template -->
            <base-btn
              variant="text"
              small
              color="light"
              append-icon="arrow-left-solid"
              >مشاهده قالب</base-btn
            >
          </div>
        </div>
      </nuxt-link>
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
