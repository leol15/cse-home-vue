<template>
  <Section>
    <template v-slot:heading><span>Work Experience</span></template>

    <div>
      <EventTitle
        :image="require('@/assets/pathai.jpg')"
        title="Software Engineering Co-op"
        :details="['PathAi', 'Remote']"
      />
      <ul>
        <li>
          Improve patient outcome by enabling pathologists with digital slide
          viewing experience.
        </li>
        <li>
          Colaborated in an agile team of 10 in development of Software As a
          Medical Device (SaMD) across the full software stack
        </li>
      </ul>
    </div>

    <div>
      <EventTitle
        :image="require('@/assets/cse.jpg')"
        title="Systems Programming TA"
        :details="['UW CSE', 'Winter - Spring 2021']"
      />
      <ul>
        <li>
          Help peers learn fundamentals of system level programming in C/C++
          building a webserver.
        </li>
        <li>
          Emphasize on idoms and practices of the language as opposed to hard
          rules & styles.
        </li>
      </ul>
    </div>

    <div>
      <EventTitle
        :image="require('@/assets/omad.jpg')"
        title="CSE & Math Tutor"
        :details="['Instructional Center', 'UW Office of Minority & Diversity']"
      />
      <ul>
        <li>
          Manage Canvas course page, proposed and integrated an online
          scheduling page for tutors
        </li>
        <li>
          Teach techniques and new perspectives in CS/Math problem solving
        </li>
      </ul>
    </div>

    <div>
      <EventTitle
        :image="require('@/assets/lp.jpg')"
        title="Student Dining Coordinator"
        :details="['Local Point', 'UW Housing & Food Services']"
      />
      <ul>
        <li>
          Provided quick and friendly service to 200+ customers daily and
          performed under pressure
        </li>
        <li>
          Trained new peers on various tasks and develop strong interpersonal
          skills
        </li>
      </ul>
    </div>

    <div>
      <EventTitle
        :image="require('@/assets/clinchnw.png')"
        title="Office Intern"
        :details="['Clinch Northwest', 'Seattle, WA']"
      />
      <ul>
        <li>
          Fulfilled web orders and resolved customer issues with efficiency and
          attention to details
        </li>
        <li>
          Utilized WordPress tools and Excel to maintain warehouse inventory and
          online database
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
