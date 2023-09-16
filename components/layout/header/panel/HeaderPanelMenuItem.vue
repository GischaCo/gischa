<template>
  <nuxt-link
    :to="to"
    class="w-full px-2 py-2.5 flex items-center justify-start gap-2 hover:bg-light transition-all rounded-lg"
  >
    <!-- icon -->
    <base-icon :name="icon" class="w-4 h-4 fill-primary"></base-icon>
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
