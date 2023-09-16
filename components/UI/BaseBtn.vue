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
  size: {
    type: Boolean,
    default: "default",
    validator(value) {
      return ["small", "default", "large"].includes(value);
    },
  },
  color: {
    type: String,
    default: "primary",
    validator(value) {
      return ["primary", "secondary", "light", "dark"].includes(value);
    },
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
    small: "px-2 py-1.5 gap-1 text-sm",
    large: "px-8 py-3 gap-3 text-lg",
  };
  return style[props.size];
});
const btnStyle = computed(() => {
  const style = {
    text: `text-${props.color}`,
    flat: `text-light bg-${props.color}`, //default
    outlined: `text-${props.color} border-2 border-${props.color}`,
  };
  return style[props.variant];
});
const iconStyle = computed(() => {
  return props.variant === "flat"
    ? "w-3 fill-light"
    : `w-3 fill-${props.color}`;
});
</script>
