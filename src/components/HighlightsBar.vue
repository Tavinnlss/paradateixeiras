<script setup>
import { highlights, site } from "../data/site";
import SectionHeading from "./SectionHeading.vue";
</script>

<template>
  <section class="band band-alt">
    <v-container>
      <SectionHeading
        script="Comida caseira"
        title="Com o carinho de sempre"
      />
      <v-row>
        <v-col
          v-for="item in highlights"
          :key="item.title"
          cols="6"
          md="3"
        >
          <article class="highlight-card">
            <div class="icon-medal">
              <v-icon :icon="item.icon" size="28" />
            </div>
            <h3>{{ item.title }}</h3>
            <!-- <p>{{ item.text }}</p> -->
          </article>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.highlight-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
