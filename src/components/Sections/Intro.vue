<template>
  <Section>
    <template v-slot:heading>
      <div>About me</div>
    </template>
    <div>
      <ul>
        <li>
          I find simulation and visualization of physical systems very interesting! I enjoy geometric problem solving, media and physical computing.
        </li>
        <li>
          I used to (pre-Covid) enjoy tinkering in maker-spaces and making hard-ware.
        </li>
        <li>
          This is my last quarter at UW. I am taking Data Center Systems (453), Compiler (401), Programming Languages (341), and Intro to Physics Lab (PHYS 231)
        </li>
        <li>
          It's been a crazi fall quarter - job hunting, Co-op, and school.
        </li>
      </ul>
    </div>
  </Section>
</template>

<script>
import Section from "../Section.vue";

export default {
  components: { Section },
  setup() {
    return {};
  },
}
</script>

<style lang="scss" scoped>

</style>

