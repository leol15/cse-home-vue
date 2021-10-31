<template>
  <HelloWorld :class="themeClass" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { Theme, THEME_KEY } from "./components/common";
import { defineComponent, ref, provide, computed } from "vue";

export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    const theme = ref(Theme.LIGHT);
    provide(THEME_KEY, theme);
    const themeClass = computed(() => ({
      ["theme--" + theme.value]: true,
    }));
    return {
      theme,
      themeClass,
    };
  },
});
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  font-size: $font-size-s;
}
* {
  // outline: 1px dashed red;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
