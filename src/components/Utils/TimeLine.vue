<template>
  <div class="time-line-container">
    <div class="slider" :style="styles"></div>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    start: {
      type: Number,
      required: true,
    },
    end: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const styles = computed(() => ({
      left: ((props.start - props.min) / (props.max - props.min)) * 100 + "%",
      width: ((props.end - props.start) / (props.max - props.min)) * 100 + "%",
    }));
    return { styles };
  },
});
</script>

<style lang="scss" scoped>
.time-line-container {
  position: relative;
  overflow: hidden;
  // height: $space-3;
  // margin: 0 $space-3;
  // transform: skewX(-60deg);
  background-color: $uw-purple;
  .slider {
    position: absolute;
    height: 100%;
    background-color: $uw-gold-light;
  }
}
</style>
