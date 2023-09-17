<template>
  <nuxt-link :to="template.path">
    <div
      class="relative w-72 h-[17rem] p-1.5 bg-gradient-to-tr from-primary to-secondary rounded-2xl flex flex-col items-start justify-start gap-2 shadow-xl shadow-primary/20 hover:shadow-primary/40 overflow-hidden hover:-translate-y-1 transition-all duration-300"
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
          size="small"
          color="light"
          append-icon="arrow-left-solid"
          >مشاهده قالب</base-btn
        >
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "LandingTemplatesItem",
};
</script>

<script setup>
// props
defineProps({
  template: {
    type: Object,
    required: true,
    default: function () {
      return {};
    },
  },
});
</script>
