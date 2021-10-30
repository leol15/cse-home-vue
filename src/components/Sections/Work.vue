<template>
  <Section>
    <template v-slot:heading><span>Work Experience</span></template>
    <EventTitle :image="require('@/assets/omad.jpg')">
      <template v-slot:top>CSE & Math Tutor</template>
      <template v-slot:bottom>
        <span>Instructional Center</span>
        <span>UW Office of Minority & Diversity</span>
      </template>
    </EventTitle>
  </Section>
</template>

<script>
import Section from "../Section.vue";
import EventTitle from "../Utils/EventTitle.vue";
export default {
  components: { Section, EventTitle },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
