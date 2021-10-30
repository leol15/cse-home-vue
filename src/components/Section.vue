<template>
  <div>
    <div class="heading">
      <slot name="heading" />
    </div>
    <slot class="content" />
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
}
</style>
