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
  padding: 0 $space-2 0 $space-2;
  margin: $space-4 0 $space-4 0;
}
</style>

