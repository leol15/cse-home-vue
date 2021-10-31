<template>
  <div class="event-container">
    <span class="title">
      <div class="top">
        {{ title }}
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
  setup() {},
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
