<template>
  <div class="w-full flex items-center justify-between gap-16">
    <!-- details -->
    <div class="flex items-center justify-start gap-2">
      <!-- icon -->
      <base-icon
        name="microphone-solid"
        class="w-5 h-5 fill-primary"
      ></base-icon>
      <!-- title -->
      <h3 class="font-bold text-primary">{{ podcast.title }}</h3>
    </div>

    <div class="flex items-center justify-end gap-3">
      <!-- like -->
      <div class="flex items-center justify-center gap-1">
        <span class="text-primary/60 text-sm">{{ podcast.like }}</span>
        <base-icon
          name="heart-solid"
          class="w-4 h-4 fill-primary/60"
        ></base-icon>
      </div>

      <!-- link -->
      <base-btn
        :to="podcast.path"
        variant="text"
        size="small"
        append-icon="arrow-left-solid"
        >مشاهده</base-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPodcastsItem",
};
</script>

<script setup>
// props
defineProps({
  podcast: {
    type: Object,
    required: true,
    default: function () {
      return {};
    },
  },
});
</script>
