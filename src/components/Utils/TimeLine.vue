<template>
  <div class="time-line-container">
    <div
      v-for="style in styles"
      :key="style[0]"
      class="slider"
      :style="style"
    ></div>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import { intervalToRow, strToColor } from "../composable";

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
    /**
     * [
     *  [begin, end, {...options}]
     * ]
     */
    intervals: {
      type: Array,
      required: true,
    },
    horizontal: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const styles = computed(() => {
      const range = props.max - props.min;
      const rowedIntervals = intervalToRow(props.intervals);
      // [idx, [a, b, option]]
      const numRows = rowedIntervals.reduce((prev, curr) => [
        Math.max(prev[0], curr[0]),
      ])[0];
      const thickness = 1 / (numRows + 1);
      return rowedIntervals.map((e) => {
        const row = e[0];
        const interval = e[1];
        const col = strToColor(interval[2].name);
        const colorStr = "rgb(" + col.join(",") + ")";
        return {
          // start
          [props.horizontal ? "left" : "bottom"]:
            ((interval[0] - props.min) / range) * 100 + "%",
          // length
          [props.horizontal ? "width" : "height"]:
            ((interval[1] - interval[0]) / range) * 100 + "%",
          // thickness
          [props.horizontal ? "height" : "width"]: thickness * 100 + "%",
          // offset/row
          [props.horizontal ? "top" : "left"]: row * thickness * 100 + "%",
          // color
          backgroundColor: colorStr,
        };
      });
    });
    console.log(styles);

    return { styles };
  },
});
</script>

<style lang="scss" scoped>
.time-line-container {
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  // background-color: $uw-purple;
  .slider {
    position: absolute;
    background-color: $uw-gold-light;
  }
}
</style>
