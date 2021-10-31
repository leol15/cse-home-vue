<template>
  <Section>
    <template v-slot:heading><span>Study</span></template>
    <Event
      title="B.S. Computer Science"
      :details="['University of Washington - Seattle']"
    >
      <span>
        Interesting coursework: Data Structures & Algorithms, Software Design &
        Implementation, Data Management, Introduction to AI, Systems
        Programming, Operating System, Computer Graphics, Computer Vision,
        Cryptography, Computer Networks, Data Center Systems
      </span>
    </Event>
  </Section>
</template>

<script>
import Section from "../Section.vue";
import Event from "../Utils/Event.vue";
export default {
  components: { Section, Event },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
