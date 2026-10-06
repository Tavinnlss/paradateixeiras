<script setup>
import { partners } from '../data/site'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="parceiros" class="band">
    <v-container>
      <SectionHeading
        eyebrow="Quem caminha com a gente"
        script="Juntos"
        title="Parceiros"
        lede="Quem caminha junto com a Parada Teixeiras. Os logos dos parceiros entram aqui."
      />
      <div class="partner-grid">
        <article v-for="partner in partners" :key="partner.name" class="partner-slot">
          <img v-if="partner.logo" :src="partner.logo" :alt="partner.name" />
          <template v-else>
            <v-icon icon="mdi-handshake" color="secondary" size="32" />
            <span>Seu logo aqui</span>
          </template>
        </article>
      </div>
    </v-container>
  </section>
</template>
