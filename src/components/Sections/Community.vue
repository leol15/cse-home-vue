<template>
  <Section>
    <template #heading><span>Community</span></template>
    <EventWrapper>
      <img :src="require('@/assets/codespree.jpg')" alt="codespree-logo" />
      <Event
        title="Co-founder & VP"
        :details="['CodeSpree', 'UW Registed Student Org.']"
        :image="require('@/assets/codespree.jpg')"
      >
        <ul>
          <li>Organize and promote lectures and coding competitions</li>
          <li>
            Learn, prepare, and present topics on programming to 5 ~ 10 club
            members bi-weekly
          </li>
        </ul>
      </Event>
    </EventWrapper>

    <EventWrapper>
      <img :src="require('@/assets/ewb.jpg')" alt="ewb-logo" />
      <Event
        title="Member"
        :details="['Engineering Without Borders, Local Team', 'UW']"
      >
        <ul>
          <li>
            Learned basics of electrical components and design techniques such
            as wiring, soldering & CAD skills
          </li>
          <li>
            Applied learned skills in the design, code, and prototype process of
            a solar station
          </li>
        </ul>
      </Event>
    </EventWrapper>

    <EventWrapper>
      <img
        :src="require('@/assets/huskyrobotics.png')"
        alt="huskyrobotics-logo"
      />
      <Event
        title="Member"
        :details="['Husky Robotics, Manufacturing Team', 'UW']"
      >
        <ul>
          <li>
            Learned basics of computer-aided drawing (CAD), proficient with
            laser-cutting, 3-D printing, and experienced with operating
            fabrication equipments such as mill and lathe
          </li>
          <li>
            Collaborated with electrical and chassis teams in bringing designs
            to life and solve problem in integration
          </li>
        </ul>
      </Event>
    </EventWrapper>
  </Section>
</template>

<script>
import Section from "../Section.vue";
import Event from "../Utils/Event.vue";
import EventWrapper from "../Utils/EventWrapper.vue";

export default {
  components: { Section, Event, EventWrapper },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
img {
  margin: $space-1 $space-2 0 0;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  border: 2px double #cccccc;
  &:hover {
    // box-shadow: 1px 1px 1px black;
  }
}

ul {
  padding-left: $space-2;
  list-style-type: square;
}
</style>
