<template>
  <Section id="Study">
    <template v-slot:heading><span>Study</span></template>
    <div class="section">
      <Event
        title="B.S. Computer Science"
        :details="['University of Washington - Seattle']"
        :showColorMarker="false"
      >
        <div class="course-work-container">
          Interesting coursework:
          <span v-for="klass in classes" :key="klass" class="klass">
            {{ klass }}
          </span>
        </div>
      </Event>
    </div>
  </Section>
</template>

<script>
import Section from "../Section.vue";
import Event from "../Utils/Event.vue";

const classes = [
  "Computer Graphics",
  "Systems Programming",
  "Operating System",
  "Cryptography",
  "Data Center Systems",
  "Computer Vision",
  "Introduction to AI",
  "Data Structures & Algorithms",
  "Software Design & Implementation",
  "Intro to Compiler Construction",
  "Computer Networks",
  "Data Management",
];

export default {
  components: { Section, Event },
  setup() {
    return {classes};
  },
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0 $space-2;
}

.klass {
  display: inline-block;
  line-height: 1rem;
  font-family: monospace;
  font-size: $font-size-s * 0.9;
  color: $uw-purple;
  user-select: none;

  padding: $space-1 / 3 $space-1 $space-1 / 4 $space-1;
  margin: $space-1 / 2;
  box-shadow: 0 0 1px 1px  $uw-gold-light;
  border-radius: $space-1;

  position: relative;
  // overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 50%;
    height: 100%;
    border-radius: inherit;
    background-color: transparent;
    transition: all 0.4s ease;
  }
  &:hover {
    cursor:help;
    box-shadow: 0 0 3px 1px  $uw-gold-light;
    &::before {
      background-color: #eee;
      width: 100%;
    }
  }
}
.course-work-container {
  padding-top: $space-2;
}
</style>
