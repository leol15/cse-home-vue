<template>
  <Section id="Work">
    <template v-slot:heading><span>Work Experience</span></template>
    <div class="work-section-wrapper">
      <div class="work-left">
        <EventWrapper>
          <img :src="require('@/assets/pathai.jpg')" alt="pathai-logo" />
          <Event
            :title="transformTitle('Software Engineering Co-op')"
            :tagColorStr="strToColorStr('Software Engineering Co-op')"
            :details="['PathAI', 'Remote']"
          >
            <tech-tag name="Python3"/>
            <tech-tag name="Django"/>
            <tech-tag name="Vuejs"/>
            <tech-tag name="TypeScript"/>
            <ul>
              <li>
                Improve patient outcome by enabling pathologists with digital
                slide viewing experience.
              </li>
              <li>
                Colaborated in an agile team of 10 in development of Software As
                a Medical Device (SaMD) across the full software stack
              </li>
            </ul>
          </Event>
        </EventWrapper>

        <EventWrapper>
          <img :src="require('@/assets/cse.jpg')" alt="cse-logo" />
          <Event
            :title="transformTitle('Systems Programming TA')"
            :tagColorStr="strToColorStr('Systems Programming TA')"
            :details="['UW CSE', 'Winter - Spring 2021']"
          >
            <tech-tag name="C"/>
            <tech-tag name="C++"/>
            <ul>
              <li>
                Help peers learn fundamentals of system level programming in
                C/C++ building a webserver.
              </li>
              <li>
                Emphasize on idoms and practices of the language as opposed to
                hard rules & styles.
              </li>
            </ul>
          </Event>
        </EventWrapper>

        <EventWrapper>
          <img :src="require('@/assets/omad.jpg')" alt="omad-logo" />
          <Event
            :title="transformTitle('CSE & Math Tutor')"
            :tagColorStr="strToColorStr('CSE & Math Tutor')"
            :details="[
              'Instructional Center',
              'UW Office of Minority & Diversity',
            ]"
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
        </EventWrapper>

        <EventWrapper>
          <img :src="require('@/assets/lp.jpg')" alt="lp-logo" />
          <Event
            :title="transformTitle('Student Dining Coordinator')"
            :tagColorStr="strToColorStr('Student Dining Coordinator')"
            :details="['Local Point', 'UW Housing & Food Services']"
          >
            <ul>
              <li>
                Provided quick and friendly service to 200+ customers daily and
                performed under pressure
              </li>
              <li>
                Trained new peers on various tasks and develop strong
                interpersonal skills
              </li>
            </ul>
          </Event>
        </EventWrapper>

        <EventWrapper>
          <img :src="require('@/assets/clinchnw.png')" alt="clinchnw-logo" />
          <Event
            :title="transformTitle('Office Intern')"
            :tagColorStr="strToColorStr('Office Intern')"
            :details="['Clinch Northwest', 'Seattle, WA']"
          >
            <ul>
              <li>
                Fulfilled web orders and resolved customer issues with
                efficiency and attention to details
              </li>
              <li>
                Utilized WordPress tools and Excel to maintain warehouse
                inventory and online database
              </li>
            </ul>
          </Event>
        </EventWrapper>

        <EventWrapper>
          <img :src="require('@/assets/williams.jpg')" alt="williams-logo" />
          <Event
            :title="transformTitle('Sales Associate')"
            :tagColorStr="strToColorStr('Sales Associate')"
            :details="['Williams Sonoma', 'UVillage, Seattle, WA']"
          >
            <ul>
              <li>Offered costomers the joy of kitchenware shopping</li>
            </ul>
          </Event>
        </EventWrapper>
      </div>
      <div class="work-right">
        <TimeLine
          :min="minTime"
          :max="maxTime"
          :intervals="workInterval"
          :horizontal="false"
          :hoverTip="hoverTip"
          @mouseenterInterval="mouseenterInterval"
          @mouseleaveInterval="mouseleaveInterval"
        />
      </div>
    </div>
  </Section>
</template>

<script>
import Section from "../Section.vue";
import Event from "../Utils/Event.vue";
import EventWrapper from "../Utils/EventWrapper.vue";
import TimeLine from "../Utils/TimeLine.vue";
import { dateToSeconds, strToColorStr } from "../composable";
import {ref} from "vue";
import TechTag from '../Utils/TechTag.vue';
const minTime = dateToSeconds(2018, 12, 1);
const maxTime = new Date().getTime();

const WORKS = {
  PATHAI: [
    dateToSeconds(2021, 6, 20),
    maxTime,
    {
      name: "Software Engineering Co-op",
      color: strToColorStr("Software Engineering Co-op"),
    },
  ],
  CSE333: [
    dateToSeconds(2021, 1, 16),
    dateToSeconds(2021, 6, 10),
    {
      name: "Systems Programming TA",
      color: strToColorStr("Systems Programming TA"),
    },
  ],
  TUTOR: [
    dateToSeconds(2019, 10, 1),
    dateToSeconds(2021, 6, 10),
    {
      name: "CSE & Math Tutor",
      color: strToColorStr("CSE & Math Tutor"),
    },
  ],
  LOCALPOINT: [
    dateToSeconds(2019, 1, 1),
    dateToSeconds(2020, 2, 22),
    {
      name: "Student Dining Coordinator",
      color: strToColorStr("Student Dining Coordinator"),
    },
  ],
  CLINCHNW: [
    dateToSeconds(2019, 1, 1),
    dateToSeconds(2019, 9, 20),
    {
      name: "Office Intern",
      color: strToColorStr("Office Intern"),
    },
  ],
  WILLIAMS: [
    dateToSeconds(2018, 12, 1),
    dateToSeconds(2019, 1, 16),
    {
      name: "Sales Associate",
      color: strToColorStr("Sales Associate"),
    },
  ],
};

export default {
  components: { Section, Event, TimeLine, EventWrapper, TechTag },

  setup() {
    const workInterval = Object.values(WORKS);
    const hoveredWork = ref(null);
    function mouseenterInterval(interval) {
      // TODO maybe highlight the work
      hoveredWork.value = interval[2].name;
    }
    function mouseleaveInterval() {
      hoveredWork.value = null;
    }
    function transformTitle(title) {
      if (hoveredWork.value?.toString() === title) {
        return title + "*";
      } else {
        return title;
      }
    }
    function hoverTip(percentage) {
      const time = minTime + (maxTime - minTime) * percentage;
      return new Date(time).toLocaleString('en-US', {
        year: 'numeric', month: 'numeric', day: 'numeric'
      });
    }
    return {
      minTime,
      maxTime,
      workInterval,
      hoverTip,
      transformTitle,
      WORKS,
      dateToSeconds,
      mouseenterInterval,
      mouseleaveInterval,
      strToColorStr,
    };
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

.work-section-wrapper {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  .work-left {
    margin-right: $space-2;
  }
  .work-right {
    padding: $space-4 0;
    width: $space-6;
    margin-right: $space-2;
  }
}
</style>
