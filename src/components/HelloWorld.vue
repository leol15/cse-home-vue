<template>
  <div class="hello-world">
    <Header />
    <!-- About me -->
    <Intro />
    <Study />
    <Work />
    <Community />
    <SWProjects />
    <HWProjects />
    <Fails />
    <Skills />
    <!-- fun stuff -->
    <br />
    <br />
    <br />
    <button @click="updateTheme">Update</button>
  </div>
</template>

<script>
import Header from "./Header.vue";
import { SECTION, Theme, THEME_KEY } from "./common";
import { defineComponent } from "vue";

import Community from "./Sections/Community.vue";
import Study from "./Sections/Study.vue";
import Work from "./Sections/Work.vue";
import SWProjects from "./Sections/SWProjects.vue";
import HWProjects from "./Sections/HWProjects.vue";
import Fails from "./Sections/Fails.vue";
import Skills from "./Sections/Skills.vue";
import Intro from "./Sections/Intro.vue";

export default defineComponent({
  components: {
    Header,
    Community,
    Study,
    Work,
    SWProjects,
    HWProjects,
    Fails,
    Skills,
    Intro,
  },
  inject: [THEME_KEY],
  setup() {
    function updateTheme() {
      if (this.THEME_KEY.value === Theme.DARK) {
        this.THEME_KEY.value = Theme.LIGHT;
      } else {
        this.THEME_KEY.value = Theme.DARK;
      }
    }
    return { SECTION, updateTheme };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello-world {
  /* background-color: black; */
  margin: auto;
  padding: 0;
  position: relative;
  max-width: 900px;

}
</style>
