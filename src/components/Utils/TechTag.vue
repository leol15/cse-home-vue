<template>
  <span
    class="tech-tag"
    :style="{ borderColor: tagColor, '--bg-color': tagColor }"
  >
    <span><a target="_blank" :href="'https://www.google.com/search?q=' + name">{{ name }}</a></span>
    <slot />
  </span>
</template>

<script>
import { strToColorStr } from "../composable";
import { computed } from "vue";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const tagColor = computed(() => strToColorStr(props.name));
    return {
      tagColor,
    };
  },
};
</script>

<style lang="scss" scoped>
.tech-tag {
  margin-left: $space-1;
  display: inline-flex;
  border: 2px solid;
  padding: 0 $space-1;
  border-radius: 4px;

  font-size: $font-size-s * 0.9;
  font-weight: bold;
  font-family: "Architects Daughter", "Comic Sans MS", cursive, sans-serif;


  overflow: hidden;
  position: relative;
  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background-color: var(--bg-color);
    opacity: 0.6;
    transition: all 0.1s;
    transition-delay: 0.5s;
  }

  &:hover::before {
    opacity: 0.2;
    height: 100%;
    transition: all 0.5s;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
}
</style>
