<template>
  <Section>
    <template #heading>
      <span>Community</span>
    </template>

    <div>
      <EventTitle
        title="Co-founder & VP"
        :details="['CodeSpree', 'UW Registed Student Org.']"
        :image="require('@/assets/codespree.jpg')"
      />
      <ul>
        <li>Organize and promote lectures and coding competitions</li>
        <li>
          Learn, prepare, and present topics on programming to 5 ~ 10 club
          members bi-weekly
        </li>
      </ul>
    </div>

    <div>
      <EventTitle
        title="Member"
        :details="['Engineering Without Borders, Local Team', 'UW']"
        :image="require('@/assets/ewb.jpg')"
      />
      <ul>
        <li>
          Learned basics of electrical components and design techniques such as
          wiring, soldering & CAD skills
        </li>
        <li>
          Applied learned skills in the design, code, and prototype process of a
          solar station
        </li>
      </ul>
    </div>

    <div>
      <EventTitle
        title="Member"
        :details="['Husky Robotics, Manufacturing Team', 'UW']"
        :image="require('@/assets/huskyrobotics.png')"
      />
      <ul>
        <li>
          Learned basics of computer-aided drawing (CAD), proficient with
          laser-cutting, 3-D printing, and experienced with operating
          fabrication equipments such as mill and lathe
        </li>
        <li>
          Collaborated with electrical and chassis teams in bringing designs to
          life and solve problem in integration
        </li>
      </ul>
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
