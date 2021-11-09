<template>
  <div class="event-container">
    <span class="title">
      <div class="top">
        {{ title }} <span v-if="showColorMarker" :style="colorMarkerStyle" class="color-marker" />
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
import { strToColorStr } from "../composable";

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
    showColorMarker: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const colorMarkerStyle = computed(() => ({
      backgroundColor: strToColorStr(props.title),
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
      margin-left: $space-1;
      display: inline-block;
      width: 2rem;
      height: 1rem;
      border-radius: 5px;
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
