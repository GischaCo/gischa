<template>
  <div
    id="header-panel-menu"
    class="absolute top-6 w-64 p-2 bg-white rounded-xl shadow-xl"
  >
    <!-- profile item -->
    <header-panel-menu-item icon="user-solid" to="/panel">
      پنل کاربری <span class="text-xs text-slate-500">({{ username }})</span>
    </header-panel-menu-item>

    <!-- other items -->
    <header-panel-menu-item
      :key="i"
      v-for="(item, i) in panelItems"
      :icon="item.icon"
      :to="item.path"
      >{{ item.title }}</header-panel-menu-item
    >

    <!-- close button -->
    <button
      @click="closePanelMenu"
      class="mt-2 px-6 py-1 rounded text-light bg-primary hover:brightness-125 transition-all"
    >
      بستن
    </button>
  </div>
</template>

<script>
export default {
  name: "HeaderPanelMenu",
};
</script>

<script setup>
import { ref } from "@nuxtjs/composition-api";

// variables
const username = ref("دنیا داوودی");
const panelItems = ref([
  {
    path: "/panel/cart",
    title: "سبد خرید",
    icon: "bag-shopping-solid",
  },
  {
    path: "/panel/favorites",
    title: "علاقه‌مندی ها",
    icon: "heart-solid",
  },
  {
    path: "/panel/wallet",
    title: "کیف پول",
    icon: "wallet-solid",
  },
]);

// emit
const emit = defineEmits(["close-menu"]);

// methods
const closePanelMenu = () => {
  emit("close-menu");
};
</script>
