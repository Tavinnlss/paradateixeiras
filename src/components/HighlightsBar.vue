<script setup>
import { highlights, site } from '../data/site'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section class="band band-alt">
    <v-container>
      <SectionHeading
        eyebrow="A casa"
        script="Comida caseira"
        title="Com o carinho de sempre"
        :lede="site.tagline"
      />
      <div class="highlight-grid">
        <article v-for="item in highlights" :key="item.title" class="highlight-card">
          <div class="icon-medal">
            <v-icon :icon="item.icon" size="28" />
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </v-container>
  </section>
</template>
