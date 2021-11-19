<template>
  <div
    class="time-line-container"
    :ref="refKey"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @mousemove="handleMouseMove"
  >
    <div
      v-for="time in times"
      :key="time.data"
      class="slider"
      :style="time.style"
      @mouseenter="emit('mouseenterInterval', time.data)"
      @mouseleave="emit('mouseleaveInterval', time.data)"
    ></div>
    <span class="time-tip" v-if="showTimeTip" :style="timeTipStyles">
      <span class="time-tip-text">{{ timeTipText }}</span>
    </span>
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
    /** return a string as the hover tip text */
    hoverTip: {
      type: Function,
      default: undefined,
    }
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

    const refKey = ref("timeline-el" + Math.random());
    const showTimeTip = ref(false);
    const timeTipText = ref("");
    const offsets = ref({ top: 0, left: 0 });

    const timeTipStyles = computed(() => ({
      top: offsets.value.top + "px",
      left: offsets.value.left + "px",
      width: props.horizontal ? "1px" : "100%",
      height: props.horizontal ? "100%" : "1px",
    }));
    function handleMouseEnter(e) {
      showTimeTip.value = true;
      handleMouseMove(e);
    }

    function handleMouseLeave(e) {
      showTimeTip.value = false;
      handleMouseMove(e);
    }

    let previouseMoveEvent;
    function handleMouseMove(e) {
      previouseMoveEvent = e;
      const pBound = e.target.getBoundingClientRect();
      offsets.value.top = props.horizontal ? 0 : e.offsetY + pBound.top;
      offsets.value.left = props.horizontal ? e.offsetX + pBound.left : 0;

      if (this?.$refs[refKey.value] && props.hoverTip) {
        // compute percentage
        const timelineBound = this?.$refs[refKey.value].getBoundingClientRect();
        const range = props.horizontal ? timelineBound.width : timelineBound.height;
        const distFromBegin = props.horizontal
          ? e.clientX - timelineBound.left
          : timelineBound.bottom - e.clientY;
        timeTipText.value = props.hoverTip(distFromBegin / range);
      }
    }

    window.addEventListener('scroll', () => (previouseMoveEvent && handleMouseMove(previouseMoveEvent)));

    return {
      emit,
      refKey,
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
  height: 100%;
  width: 100%;
  &:hover > .slider {
    filter: saturate(0.85);
  }
  .slider {
    transform: skewY(-30deg);
    position: absolute;
    z-index: 1;
    transition: all 0.3s;
    &:hover {
      filter: saturate(2);
      transform: skewY(-30deg) scale(1.03);
      z-index: 10;
    }
  }

  .time-tip {
    display: block;
    position: sticky;
    pointer-events: none;
    z-index: 999;
    background-color: $uw-purple;
  }

  .time-tip-text {
    position: absolute;
    left: 100%;
    white-space: nowrap;
    background-color: rgba($uw-gold-light, 0.7);
    color: $uw-purple;
    border-radius: 4px;
    padding: $space-1 / 2;
    transform: translate($space-1, -50%);
    font-family: monospace;
  }
}
</style>
