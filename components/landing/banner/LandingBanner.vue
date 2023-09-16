<template>
  <section class="w-full">
    <div class="bg-light flex items-center justify-around">
      <!-- logo -->
      <logo class="w-96 opacity-80"></logo>

      <!-- typed.js performance -->
      <div class="w-2/6">
        <vue-typed-js :strings="sentences" :loop="true">
          <h2 class="text-secondary text-xl font-bold leading-[4rem]">
            آرشیو بهترین
            <span class="typing text-4xl text-primary mr-4"></span>
          </h2>
        </vue-typed-js>
      </div>
    </div>
    <component :is="waveIcon"></component>
  </section>
</template>

<script>
export default {
  name: "LandingBanner",
};
</script>

<script setup>
import { ref } from "@nuxtjs/composition-api";

// variabels
const waveIcon = ref(require("@/assets/svg/banner-wave.svg?inline")); // use wave svg as a component
const sentences = ref([
  "پادکست‌های روان و کاربردی مبتنی بر تکنولوژی و برنامه نویسی",
  "قالب‌های راست‌چین و چپ‌چین رایگان با کدنویسی خالص و اختصاصی",
  "برنامه‌های کاربردی رایگان و مناسب رزومه یا کسب و کار شما",
  "قالب‌های اختصاصی ویژه کسب و کار شما",
  "و بروز ترین مقالات مبتنی بر جدیدترین اخبار و پرطرفدارترین تاپیک‌ها",
]);
</script>
