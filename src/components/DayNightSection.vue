<script setup>
import { shifts } from '../data/site'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="a-casa" class="band">
    <v-container>
      <SectionHeading
        eyebrow="O ritmo da casa"
        script="De dia e de noite"
        title="Almoço no sol, porção na noite"
        lede="De dia a Parada serve almoço. De noite, a mesa pede porção, hambúrguer e o pão com linguiça."
      />
      <div class="split">
        <article v-for="shift in shifts" :key="shift.id" class="shift-card" :class="{ 'is-night': shift.id === 'noite' }">
          <p class="when">
            <v-icon :icon="shift.icon" size="18" />
            {{ shift.when }}
          </p>
          <h3 class="display" style="font-size: 3rem; margin-top: 8px">{{ shift.title }}</h3>
          <p>{{ shift.text }}</p>
          <div class="chip-row">
            <span v-for="item in shift.items" :key="item" class="chip">{{ item }}</span>
          </div>
        </article>
      </div>
    </v-container>
  </section>
</template>
