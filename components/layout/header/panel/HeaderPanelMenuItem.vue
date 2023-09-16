<template>
  <nuxt-link :to="to" class="w-full flex items-center justify-start gap-2">
    <!-- icon -->
    <base-icon :name="icon" class="w-4 h-4"></base-icon>
    <!-- title -->
    <span class="text-slate-600">
      <slot></slot>
    </span>
  </nuxt-link>
</template>

<script>
export default {
  name: "HeaderMenuPanelItem",
};
</script>

<script setup>
// props
defineProps({
  to: {
    type: String,
    required: true,
    default: "/",
  },
  icon: {
    type: String,
    required: true,
    default: "/",
  },
});
</script>
