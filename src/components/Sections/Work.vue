<template>
  <Section>
    <template v-slot:heading><span>Work Experience</span></template>

    <div class="work-container">
      <img :src="require('@/assets/pathai.jpg')" alt="pathai-logo" />
      <Event title="Software Engineering Co-op" :details="['PathAi', 'Remote']">
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
      </Event>
    </div>
    <TimeLine
      class="work-timeline"
      :min="minTime"
      :max="maxTime"
      :start="dateToSeconds(2021, 6, 20)"
      :end="maxTime"
    />

    <div class="work-container">
      <img :src="require('@/assets/cse.jpg')" alt="cse-logo" />
      <Event
        title="Systems Programming TA"
        :details="['UW CSE', 'Winter - Spring 2021']"
      >
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
      </Event>
    </div>
    <TimeLine
      class="work-timeline"
      :min="minTime"
      :max="maxTime"
      :start="dateToSeconds(2021, 1, 16)"
      :end="dateToSeconds(2021, 6, 10)"
    />

    <div class="work-container">
      <img :src="require('@/assets/omad.jpg')" alt="omad-logo" />
      <Event
        title="CSE & Math Tutor"
        :details="['Instructional Center', 'UW Office of Minority & Diversity']"
      >
        <ul>
          <li>
            Manage Canvas course page, proposed and integrated an online
            scheduling page for tutors
          </li>
          <li>
            Teach techniques and new perspectives in CS/Math problem solving
          </li>
        </ul>
      </Event>
    </div>
    <TimeLine
      class="work-timeline"
      :min="minTime"
      :max="maxTime"
      :start="dateToSeconds(2019, 10, 1)"
      :end="dateToSeconds(2021, 6, 10)"
    />

    <div class="work-container">
      <img :src="require('@/assets/lp.jpg')" alt="lp-logo" />
      <Event
        title="Student Dining Coordinator"
        :details="['Local Point', 'UW Housing & Food Services']"
      >
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
      </Event>
    </div>
    <TimeLine
      class="work-timeline"
      :min="minTime"
      :max="maxTime"
      :start="dateToSeconds(2019, 1, 1)"
      :end="dateToSeconds(2021, 2, 22)"
    />

    <div class="work-container">
      <img :src="require('@/assets/clinchnw.png')" alt="clinchnw-logo" />
      <Event
        title="Office Intern"
        :details="['Clinch Northwest', 'Seattle, WA']"
      >
        <ul>
          <li>
            Fulfilled web orders and resolved customer issues with efficiency
            and attention to details
          </li>
          <li>
            Utilized WordPress tools and Excel to maintain warehouse inventory
            and online database
          </li>
        </ul>
      </Event>
    </div>
    <TimeLine
      class="work-timeline"
      :min="minTime"
      :max="maxTime"
      :start="dateToSeconds(2019, 1, 1)"
      :end="dateToSeconds(2019, 9, 20)"
    />

    <div class="work-container">
      <img :src="require('@/assets/williams.jpg')" alt="williams-logo" />
      <Event
        title="Sales Associate"
        :details="['Williams Sonoma', 'UVillage, Seattle, WA']"
      >
        <ul>
          <li>Offered costomers the joy of kitchenware shopping</li>
        </ul>
      </Event>
    </div>
    <TimeLine
      class="work-timeline"
      :min="minTime"
      :max="maxTime"
      :start="dateToSeconds(2018, 12, 1)"
      :end="dateToSeconds(2019, 1, 16)"
    />
  </Section>
</template>

<script>
import Section from "../Section.vue";
import Event from "../Utils/Event.vue";
import TimeLine from "../Utils/TimeLine.vue";
import { dateToSeconds } from "../composable";

export default {
  components: { Section, Event, TimeLine },
  setup() {
    const minTime = dateToSeconds(2018, 9, 26);
    const maxTime = new Date().getTime();
    return {
      minTime,
      maxTime,
      dateToSeconds,
    };
  },
};
</script>

<style lang="scss" scoped>
.work-container {
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 0 $space-2 0 $space-2;
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
}

.work-timeline {
  height: $space-2;
  margin: 0 $space-2 $space-4 $space-2;
  transform: skewX(-60deg);
}
</style>
