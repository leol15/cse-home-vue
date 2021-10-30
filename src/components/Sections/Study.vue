<template>
  <Section>
    <template v-slot:heading><span>Study</span></template>
    <div>
      <event-title>
        <template v-slot:top>B.S. Computer Science</template>
        <template v-slot:bottom>
          <span>University of Washington - Seattle</span>
        </template>
      </event-title>
    </div>
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
