<template>
  <Section id="SWProjects">
    <template v-slot:heading
      ><span>Software Projects</span>
      <span @click="toggleAll" :class="toggleBtnClasses">▼</span>
    </template>
    <div class="project">
      <div class="title" @click="toggleCollaper('Audio Book')">
        Audio Book
        <TechTag name="Java" />
        <TechTag name="Android Studio" />
      </div>
      <div :class="collapserClass('Audio Book')">
        <ul>
          <li>
            An Android music player app that supports book like audio
            organization and bookmarks
          </li>
          <li>Implemented a client service architecture</li>
          <li>
            Implemented features such as notification controls, variable
            playback speed, sleep timer, un-interrupt-able playback, and a fully
            customizable color theme
          </li>
          <li>
            Had a lot of fun battling with Android in preventing it from killing
            my service from time to time
          </li>
        </ul>
      </div>
    </div>

    <div class="project">
      <div class="title" @click="toggleCollaper('Paint')">
        Paint
        <TechTag name="Java" />
        <TechTag name="Android Studio" />
      </div>
      <div :class="collapserClass('Paint')">
        <ul>
          <li>
            a lite yet feature rich notepad/canvas application in Java for
            Android
          </li>
          <li>Implemented model view controller design.</li>
          <li>
            Supports various shapes, alpa image export, scaling, translating,
            rotating, and grouping.
          </li>
          <li>
            Implemented a local web server with NodeJS that streams paint app
            drawings to browser in real time
          </li>
        </ul>
      </div>
    </div>

    <div class="project">
      <div class="title" @click="toggleCollaper('Scheduler')">
        Scheduler
        <TechTag name="ReactJs" />
      </div>
      <div :class="collapserClass('Scheduler')">
        <ul>
          <li>
            A simple react page to keep track of tutor's office hours and Zoom
            links.
          </li>
          <li>
            Created when our tutoring center is moving completely online due to
            COVID.
          </li>
          <li>
            Proposed to Instructional Center staff, and integrated this tool
            into IC's Canvas page with existing courses.
          </li>
        </ul>
      </div>
    </div>

    <div class="project">
      <div class="title" @click="toggleCollaper('Husky Map')">
        Husky Map
        <TechTag name="ReactJs" />
        <TechTag name="SparkJava" />
      </div>
      <div :class="collapserClass('Husky Map')">
        <ul>
          <li>
            Developed the back-end with SparkJava and the Web front-end with
            React.js
          </li>
          <li>Implemented Dijkstra on real world map data</li>
          <li>
            Integrated the Model and View and their communication through http
            requests
          </li>
        </ul>
      </div>
    </div>

    <div class="project">
      <div class="title" @click="toggleCollaper('3D Rendering Engine')">
        3D Rendering Engine
        <TechTag name="C++" />
        <TechTag name="OpenGL 3" />
        <TechTag name="GLSL" />
        <TechTag name="Qt" />
      </div>
      <div :class="collapserClass('3D Rendering Engine')">
        <ul>
          <li>
            Implemented an electromechanical system using basic circuit
            components to unlock door that extended battery life from a day to
            two weeks comparing to an Arduino system
          </li>
        </ul>
      </div>
    </div>

    <!-- Other projects -->

    <div class="project">
      <div
        class="title"
        @click="toggleCollaper('American Sign Language Robotic Hand')"
      >
        American Sign Language Robotic Hand
        <TechTag name="Arduino" />
        <TechTag name="CAD" />
      </div>
      <div :class="collapserClass('American Sign Language Robotic Hand')">
        <ul>
          <li>
            Led in a team of 4 engineers in the design, test, and integration of
            the mechanical and electrical systems of a robotic hand that
            performs American Sign Language
          </li>
        </ul>
      </div>
    </div>

    <div class="project">
      <div class="title" @click="toggleCollaper('Smart Dorm Lock')">
        Smart Dorm Lock
        <TechTag name="Transistors" />
      </div>
      <div :class="collapserClass('Smart Dorm Lock')">
        <ul>
          <li>
            Implemented an electromechanical system using basic circuit
            components to unlock door that extended battery life from a day to
            two weeks comparing to an Arduino system
          </li>
        </ul>
      </div>
    </div>

    <!-- failed project -->
    <div class="project">
      <div class="title" @click="toggleCollaper('Sublime Text Plug-in')">
        Sublime Text Plug-in
        <TechTag name="Python3" />
        <TechTag name="SparkJava" />
      </div>
      <div :class="collapserClass('Sublime Text Plug-in')">
        <ul>
          <li>
            Goal: Sync edits on multiple copies of opened files across the
            Internet in real time
          </li>
          <li>Solved concurrent issues with manual locking</li>
        </ul>
      </div>
    </div>

    <template v-slot:footer>
      <span @click="toggleAll" :class="{...toggleBtnClasses, 'bottom-toggle': true}">▼</span>
    </template>
  </Section>
</template>

<script>
import Section from "../Section.vue";
import TechTag from "../Utils/TechTag.vue";
import { ref, computed } from "vue";

export default {
  components: { Section, TechTag },
  setup() {
    const collapserStates = ref([]);
    function collapserClass(name) {
      const project = collapserStates.value.find((o) => o.name === name);
      if (!project) {
        collapserStates.value.push({ name, open: false });
      }
      return {
        collapser: true,
        collapsed: !project?.open,
      };
    }
    function toggleCollaper(name) {
      const project = collapserStates.value.find((o) => o.name === name);
      if (project) {
        project.open = !project.open;
      }
    }
    const anyOpen = computed(() =>
      collapserStates.value.some((project) => project.open)
    );
    function toggleAll() {
      if (anyOpen.value) {
        // collapse all
        collapserStates.value.forEach((project) => (project.open = false));
      } else {
        collapserStates.value.forEach((project) => (project.open = true));
      }
    }
    const toggleBtnClasses = computed(() => ({
      ["toggle-all-btn"]: true,
      on: anyOpen.value,
    }));
    return {
      collapserClass,
      toggleCollaper,
      toggleAll,
      anyOpen,
      toggleBtnClasses,
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep .section-content {
  overflow: hidden;
}

.project {
  padding: $space-2;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    box-shadow: 0 0 80px 2px $uw-gold-light;
    opacity: 0;
    transition: box-shadow 0.9s, opacity 0.6s;
  }

  &:hover::before {
    opacity: 1;
    box-shadow: 0 0 0px 2px $uw-gold-light;
  }
}

.title {
  font-size: $font-size-m;
  font-family: "Architects Daughter", "Comic Sans MS", cursive, sans-serif;
  &:hover {
    cursor: pointer;
  }
}

.collapser {
  overflow: hidden;
  max-height: 10rem;
  transition: all 0.35s ease-in;
}
.collapsed {
  max-height: 0px;
}

.toggle-all-btn {
  cursor: pointer;
  margin-left: $space-1;
  transition: all 0.4s;
  display: inline-block;
  transform: rotate(90deg);
  &:hover {
    transform: rotate(70deg);
  }
  &.on {
    transform: rotate(0deg);
  }
  &.on:hover {
    transform: rotate(20deg);
  }
}

.bottom-toggle {
  margin-top: $space-1;
}
</style>
