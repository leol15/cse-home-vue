<template>
  <div>
    <div class="top">
      <slot name="top" />
    </div>
    <span class="bottom">
      <slot name="bottom" />
    </span>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Architects+Daughter&amp;display=swap");
.top {
  font-family: "Architects Daughter", "Comic Sans MS", cursive, sans-serif;
  font-size: 1.5em;
  font-size: $font-size-l;
}
.bottom {
  * {
    background-color: red;
    border-top: 1px solid black;
    margin-right: 0.5rem;
    font-size: $font-size-m;
  }
}
</style>
