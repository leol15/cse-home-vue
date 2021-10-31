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
  padding-bottom: $space-2;
}

.container {
  transition: all 0.1s ease;
  margin: 3rem $space-6;
  padding: $space-3 $space-4;
  border-radius: 10px;
  box-shadow: 0 10px 6px -6px #777, 0 0 30px #eee;

  &:hover {
    transition: all 0.2s ease;
    box-shadow: 0 10px 6px -6px #777, 0 0 30px #ccc;
  }
  &:hover .content {
    box-shadow: 0 8px 10px -8px #777 inset, 0 0 10px #ccc inset;
  }

  .content {
    transition: all 0.1s ease;
    padding: $space-4 $space-2 $space-2 $space-2;
    border-radius: inherit;
    box-shadow: 0 8px 10px -8px #777 inset, 0 0 10px #eee inset;
  }
}
</style>
