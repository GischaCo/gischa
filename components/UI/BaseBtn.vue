<template>
  <component
    v-on="$listeners"
    v-bind="btnType"
    :class="[btnSize, btnStyle]"
    class="flex items-center justify-center rounded-lg hover:scale-105 transition-all"
  >
    <!-- prepare icon -->
    <base-icon
      :name="prepareIcon"
      v-if="prepareIcon.length"
      :class="[iconStyle]"
    ></base-icon>

    <slot></slot>

    <!-- append icon -->
    <base-icon
      :name="appendIcon"
      v-if="appendIcon.length"
      :class="[iconStyle]"
    ></base-icon>
  </component>
</template>

<script>
export default {
  name: "SeeMore",
};
</script>

<script setup>
import { computed } from "@nuxtjs/composition-api";

// props
const props = defineProps({
  to: {
    type: String,
    default: null,
  },
  href: {
    type: String,
    default: null,
  },
  large: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: "flat",
    validator(value) {
      return ["flat", "outlined", "text"].includes(value);
    },
  },
  appendIcon: {
    type: String,
    default: "",
  },
  prepareIcon: {
    type: String,
    default: "",
  },
});

// computed
const btnType = computed(() => {
  const { to, href } = props;
  if (to?.length) return { is: "nuxt-link", to };
  if (href?.length) return { is: "a", href };
  return { is: "button" };
});
const btnSize = computed(() => {
  const style = {
    default: "px-4 py-2 gap-2",
    large: "px-8 py-3 gap-3 text-lg",
  };
  return props.large ? style.large : style.default;
});
const btnStyle = computed(() => {
  const style = {
    text: "text-primary",
    flat: "text-light bg-primary", //default
    outlined: "text-primary border-2 border-primary",
  };
  return style[props.variant];
});
const iconStyle = computed(() => {
  return props.variant === "flat" ? "w-3 fill-light" : "w-3 fill-primary";
});
</script>
