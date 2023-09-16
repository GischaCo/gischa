<template>
  <nuxt-link :to="blog.path">
    <div
      class="relative w-72 h-40 p-4 bg-light flex flex-col items-start justify-between gap-3 rounded-xl rounded-br-3xl shadow-lg shadow-dark/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <!-- title -->
      <h3 class="text-lg text-primary font-bold">{{ blog.title }}</h3>
      <!-- details -->
      <div
        class="absolute bottom-0 left-0 w-full h-12 p-1 bg-white flex items-center justify-between shadow-sm rounded-l rounded-r-full"
      >
        <!-- author -->
        <div class="h-full flex items-center justify-start gap-2">
          <!-- avatar -->
          <img
            class="h-full rounded-full"
            :src="blog.author.avatar"
            :alt="`${blog.author.name} - ${blog.title}`"
          />
          <p class="text-sm text-secondary">{{ blog.author.name }}</p>
        </div>

        <!-- date -->
        <p class="text-sm text-secondary">{{ blog.date }}</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  nmae: "LandingBlogsItem",
};
</script>

<script setup>
defineProps({
  blog: {
    type: Object,
    required: true,
    default: function () {
      return {};
    },
  },
});
</script>
