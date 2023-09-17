<template>
  <article class="flex flex-col items-center justify-start gap-12">
    <!-- top banner -->
    <landing-banner></landing-banner>

    <!-- recent blogs -->
    <landing-blogs class="-mt-28"></landing-blogs>

    <!-- newest template -->
    <landing-templates></landing-templates>

    <!-- special apps -->
    <landing-apps></landing-apps>

    <!-- popular podcasts -->
    <landing-podcasts></landing-podcasts>
  </article>
</template>

<script>
export default {
  name: "AppLanding",
};
</script>
