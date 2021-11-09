<template>
  <div class="event-container">
    <span class="title">
      <div class="top">
        {{ title }} <span :style="colorMarkerStyle" class="color-marker"></span>
      </div>
      <span class="bottom">
        <span v-for="d in details" :key="d">{{ d }}</span>
      </span>
    </span>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { strToColor } from "../composable";

export default {
  props: {
    image: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      required: true,
    },
    details: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const colorStr = computed(() => {
      const col = strToColor(props.title);
      return "rgb(" + col.join(",") + ")";
    });
    const colorMarkerStyle = computed(() => ({
      backgroundColor: colorStr,
    }));
    return { colorMarkerStyle };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Architects+Daughter&amp;display=swap");

.event-container {
  width: 100%;
  .title {
    font-family: "Architects Daughter", "Comic Sans MS", cursive, sans-serif;
  }

  .top {
    font-size: $font-size-l;
    color: #000;

    .color-marker {
      display: inline-block;
      width: $space-2;
    }
  }

  .bottom { 
    font-size: $font-size-m;
    color: #000;
    span {
      border-top: 1px solid #000;
      margin-right: 0.5rem;
    }
  }
}
</style>
