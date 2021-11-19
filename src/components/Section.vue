<template>
  <div class="section-container">
    <div class="heading">
      <slot name="heading" />
    </div>
    <div class="section-content">
      <slot />
    </div>
    <slot name="footer" />
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

.section-container {
  transition: all 0.1s ease;
  margin: 3rem $space-6;
  padding: $space-3 $space-4;
  border-radius: 10px;
  box-shadow: 0 10px 6px -6px #777, 0 0 30px #eee;

  &:hover {
    transition: all 0.4s ease;
    box-shadow: 0 10px 6px -6px #777, 0 0 30px #ccc;
  }

  .section-content {
    padding: $space-2 0;
    transition: inherit;
    border-radius: inherit;
    box-shadow: 0 6px 8px -6px #777 inset, 0 0 10px #eee inset;
  }
  &:hover .section-content {
    box-shadow: 0 6px 8px -6px #777 inset, 0 0 10px #ccc inset;
  }
}
</style>
