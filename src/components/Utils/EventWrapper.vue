<template>
  <div class="event-wrapper">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
})
</script>

<style lang="scss" scoped>
.event-wrapper {
  display: flex;
  flex-direction: row;
  position: relative;
  padding: $space-2;
  padding-bottom: $space-1;
}
</style>

