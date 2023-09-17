<template>
  <nuxt-link :to="app.path">
    <div
      class="w-80 p-2 bg-gradient-to-t from-primary to-purple-400 flex flex-col items-start justify-start gap-4 rounded-xl shadow-xl shadow-dark/20 hover:shadow-dark/30 hover:-translate-y-1 transition-all duration-300"
    >
      <!-- images -->
      <div class="flex flex-row-reverse items-start justify-between gap-2">
        <!-- main image -->
        <img class="w-8/12 rounded-md" :src="app.images[0]" :alt="app.title" />

        <!-- other images -->
        <div class="flex flex-col items-center justify-start gap-2">
          <img
            class="w-full rounded-md"
            :src="app.images[1]"
            :alt="app.title"
          />
          <img
            class="w-full rounded-md"
            :src="app.images[2]"
            :alt="app.title"
          />
        </div>
      </div>

      <!-- title -->
      <h3 class="text-light font-font">{{ app.title }}</h3>

      <!-- tools -->
      <div class="w-full flex items-center justify-start gap-1">
        <span
          v-for="tool in app.tools"
          class="px-1.5 py-0.5 text-xs bg-light/60 text-primary rounded"
          >{{ tool }}</span
        >
      </div>

      <!-- description -->
      <p class="text-light/80">{{ app.description }}</p>

      <!-- properties -->
      <div class="w-full flex items-center justify-start gap-0.5">
        <ul class="w-full">
          <li
            v-for="property in app.properties"
            class="text-light/70 text-sm flex items-center justify-start gap-2"
          >
            <base-icon
              name="arrow-left-solid"
              class="w-2 fill-light/70"
            ></base-icon>
            {{ property }}
          </li>
        </ul>
      </div>

      <!-- details -->
      <div class="w-full flex items-center justify-between">
        <!-- price -->
        <div class="flex items-center justify-start gap-2">
          <p
            :class="[
              `${
                app.sale !== null
                  ? 'text-سئ text-light/50  line-through'
                  : 'text-light'
              }`,
            ]"
          >
            {{ app.price }}
          </p>
          <p v-if="app.sale !== null" class="text-light">
            {{ app.sale === 0 ? "رایگان" : app.sale }}
          </p>
          <p v-if="app.sale !== 0" class="text-light">تومان</p>
        </div>

        <!-- button -->
        <base-btn variant="text" size="small" color="light/80"
          >مشاهده جزئیات</base-btn
        >
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: "LandingAppsItem",
};
</script>

<script setup>
// props
defineProps({
  app: {
    type: Object,
    required: true,
    default: function () {
      return {};
    },
  },
});
</script>
