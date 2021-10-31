<template>
  <div class="container">
    <div class="heading">
      <slot name="heading" />
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Section",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.heading {
  font-size: $font-size-l;
  padding: $space-2 0;
}
.container {
  transition: all 0.1s ease;
  margin: 3rem $space-6;
  padding: $space-2 $space-4;
  box-shadow: 0 10px 6px -6px #777, 0 0 30px #eee;

  // border: 1px solid #777;
  border-radius: 10px;
  &:hover {
    transition: all 0.2s ease;
    box-shadow: 0 10px 6px -6px #777, 0 0 30px #ccc;
  }

  .content {
    border-radius: 10px;
    padding: $space-4 $space-2;
    box-shadow: 0 10px 10px -10px #777 inset, 0 0 30px #eee inset;
  }
}
</style>
