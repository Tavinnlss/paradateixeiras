<script setup>
import { shifts } from '../data/site'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="a-casa" class="band">
    <v-container>
      <SectionHeading
        script="O prazer de comer bem"
        title="BATEU A FOME? VEM PRA PARADA!"
        lede="Sabor, qualidade e aquele atendimento acolhedor que fazem cada visita valer a pena."
      />
      <div class="split">
        <article v-for="shift in shifts" :key="shift.id" class="shift-card" :class="{ 'is-night': shift.id === 'noite' }">
          <p class="when">
            <v-icon :icon="shift.icon" size="18" />
            {{ shift.when }}
          </p>
          <h3 class="display" style="font-size: 3rem; margin-top: 8px">{{ shift.title }}</h3>
          <p>{{ shift.text }}</p>
        </article>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.display{
  color: var(--gold);
}
</style>
