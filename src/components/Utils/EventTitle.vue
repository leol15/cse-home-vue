<template>
  <div class="container">
    <img v-if="image" :src="image" alt="profile-image" />
    <span>
      <div class="top">
        <slot name="top" />
      </div>
      <span class="bottom">
        <slot name="bottom" />
      </span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: "",
    },
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Architects+Daughter&amp;display=swap");

.container {
  display: flex;
  flex-direction: row;
  font-family: "Architects Daughter", "Comic Sans MS", cursive, sans-serif;
  align-items: center;
  img {
    margin-right: $space-2;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    &:hover {
      box-shadow: 1px 1px 1px black;
    }
  }
}
.top {
  font-size: $font-size-l;
  color: #000;
}

/deep/ .bottom {
  font-size: $font-size-m;
  > * {
    color: #000;
    border-top: 1px solid #000;
    margin-right: 0.5rem;
  }
}
</style>
