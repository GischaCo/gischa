<template>
  <div
    class="w-screen h-screen flex flex-col items-center justify-center gap-12"
  >
    <logo></logo>
    <h1 class="text-purple-800 text-5xl font-bold font-serif">Gischa App</h1>
  </div>
</template>

<script>
import logo from "../components/Logo.vue";
export default {
  components: {
    logo,
  },
};
</script>
