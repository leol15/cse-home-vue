<template>
  <div class="header">
    <div class="headline">
      <h2>Hello, this world</h2>
      <div class="sun">Sun</div>
    </div>
    <div class="nav-bar">
      <ul>
        <li v-for="item in navigations" :key="item.name">
          <a :href="'#' + item.link">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { SECTION } from "./common";

export default {
  name: "Header",
  setup() {
    const navigations = [
      { name: SECTION.Connect, link: SECTION.Connect },
      { name: SECTION.Study, link: SECTION.Study },
      { name: SECTION.Work, link: SECTION.Work },
      { name: SECTION.Community, link: SECTION.Community },
      { name: SECTION.SW_Projects, link: SECTION.SW_Projects },
      { name: SECTION.HW_Projects, link: SECTION.HW_Projects },
      { name: SECTION.Fails, link: SECTION.Fails },
      { name: SECTION.Skills, link: SECTION.Skills },
    ];
    return { navigations };
  },
};
</script>

<style lang="scss">
.header {
  padding: 0 $space-6;
}

.headline {
  display: flex;
  justify-content: space-between;
}

.nav-bar {
  position: sticky;
  top: 0;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    list-style: none;
  }
  li {
    border-bottom: 5px solid red;
    border-bottom-style: outset;
    &:hover {
      background-color: red;
      cursor: pointer;
    }
    a {
      display: block;
      padding: $space-2;
      color: inherit;
      text-decoration: none;
    }
  }
}
</style>
