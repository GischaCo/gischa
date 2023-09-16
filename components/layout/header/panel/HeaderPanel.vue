<template>
  <div class="relative flex items-center justify-end gap-2">
    <!-- icon -->
    <base-icon
      @click="togglePanelMenu"
      name="user-solid"
      id="header-panel-icon"
      class="w-4 h-4 fill-primary cursor-pointer"
    ></base-icon>

    <!-- menu -->
    <header-panel-menu
      v-if="menuOpened"
      @close-menu="togglePanelMenu"
    ></header-panel-menu>
  </div>
</template>

<script>
export default {
  name: "HeaderPanel",
};
</script>

<script setup>
import { ref } from "@nuxtjs/composition-api";

// variables
const menuOpened = ref(true);

// methods
const togglePanelMenu = () => {
  menuOpened.value = !menuOpened.value;
};
</script>
