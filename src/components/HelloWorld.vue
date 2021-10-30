<template>
  <div class="body">
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
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
  </div>
</template>

<script>
import Header from "./Header.vue";
import { SECTION } from './common';

import Community from "./Sections/Community.vue";
import Study from "./Sections/Study.vue";
import Work from "./Sections/Work.vue";
import SWProjects from "./Sections/SWProjects.vue";
import HWProjects from "./Sections/HWProjects.vue";
import Fails from "./Sections/Fails.vue";
import Skills from "./Sections/Skills.vue";
import Intro from './Sections/Intro.vue';

export default {
  name: 'HelloWorld',
  components: {Header,
    Community, Study, Work,
    SWProjects, HWProjects, Fails, Skills,
    Intro},
  setup() {
    return {SECTION}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  /* background-color: black; */
  margin: 0;
  padding: 0;
  position: relative;
}
</style>
