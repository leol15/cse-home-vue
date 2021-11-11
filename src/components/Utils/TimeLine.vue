<template>
  <div
    class="time-line-container"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @mousemove="handleMouseMove"
    @mouseover="handleMouseMove"
  >
    <div
      v-for="time in times"
      :key="time.data"
      class="slider"
      :style="time.style"
      @mouseenter="emit('mouseenterInterval', time.data)"
      @mouseleave="emit('mouseleaveInterval', time.data)"
    ></div>
    <span class="time-tip" v-if="showTimeTip" :style="timeTipStyles">{{
      timeTipText
    }}</span>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from "vue";
import { intervalToRow } from "../composable";

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
  setup(props, { emit }) {
    const times = computed(() => {
      const range = props.max - props.min;
      const rowedIntervals = intervalToRow(props.intervals);
      // [idx, [a, b, option]]
      const numRows = rowedIntervals.reduce((prev, curr) => [
        Math.max(prev[0], curr[0]),
      ])[0];
      const thickness = 1 / (numRows + 1);
      return rowedIntervals.map((e) => {
        const row = e[0];
        const data = e[1];
        return {
          data,
          style: {
            // start
            [props.horizontal ? "left" : "bottom"]:
              ((data[0] - props.min) / range) * 100 + "%",
            // length
            [props.horizontal ? "width" : "height"]:
              ((data[1] - data[0]) / range) * 100 + "%",
            // thickness
            [props.horizontal ? "height" : "width"]: thickness * 100 + "%",
            // offset/row
            [props.horizontal ? "top" : "left"]: row * thickness * 100 + "%",
            // color
            backgroundColor: data[2].color,
          },
        };
      });
    });

    const showTimeTip = ref(false);
    const timeTipText = ref("");
    const offsets = ref({ top: 0, left: 0 });

    const timeTipStyles = computed(() => ({
      top: offsets.value.top + "px",
      left: offsets.value.left + "px",
      width: props.horizontal ? "10px" : "100%",
      height: props.horizontal ? "100%" : "10px",
    }));
    function handleMouseEnter(e) {
      showTimeTip.value = true;
      handleMouseMove(e);
    }

    function handleMouseLeave(e) {
      showTimeTip.value = false;
      handleMouseMove(e);
    }

    function handleMouseMove(e) {
      // if (!e.target.classList.contains("time-line-container")) {
      //   return;
      // }
      // e.stopPropagation();
      const pBound = e.target.getBoundingClientRect();
      offsets.value.top = props.horizontal ? 0 : e.offsetY + pBound.top;
      offsets.value.left = props.horizontal ? e.offsetX + pBound.left : 0;

      // offsets.value.top = props.horizontal ? 0 : e.offsetY + e.target.offsetTop;
      // offsets.value.left = props.horizontal ? e.offsetX + e.target.offsetLeft: 0;
      // console.log(e.offsetY, e.target.offsetTop, offsets.value.top)
      // timeTipText = TODO
    }

    return {
      emit,
      times,
      handleMouseEnter,
      handleMouseMove,
      handleMouseLeave,
      timeTipStyles,
      showTimeTip,
      timeTipText,
    };
  },
});
</script>

<style lang="scss" scoped>
.time-line-container {
  position: relative;
  // overflow: hidden;
  height: 100%;
  width: 100%;

  &:hover > .slider {
    filter: saturate(0.85);
  }
  .slider {
    // pointer-events: none;
    position: absolute;
    z-index: 1;

    &:hover {
      filter: saturate(2);
      transform: scale(1.03);
      z-index: 10;
    }
  }

  .time-tip {
    display: block;
    position: sticky;
    pointer-events: none;
    transition: all 0.1s;
    z-index: 999;
    background-color: rgba(255, 0, 0, 0.5);
  }
}
</style>
