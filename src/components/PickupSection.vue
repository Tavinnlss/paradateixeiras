<script setup>
import { pickup, whatsappLink } from '../data/site'
import SectionHeading from './SectionHeading.vue'

const wa = whatsappLink('Olá! Quero fazer um pedido para retirada na Parada Teixeiras.')
</script>

<template>
  <section id="retirada" class="band band-alt">
    <v-container>
      <SectionHeading
        :script="pickup.script"
        :title="pickup.title"
        :lede="pickup.lede"
      />
      <div class="split">
        <article v-for="option in pickup.options" :key="option.title" class="shift-card">
          <p class="when">
            <v-icon :icon="option.icon" size="18" />
            {{ option.title }}
          </p>
          <p>{{ option.text }}</p>
        </article>
      </div>
      <div class="pickup-actions">
        <v-btn class="btn-gold" :href="wa" target="_blank" rel="noopener" elevation="0" size="large">
          <v-icon icon="mdi-whatsapp" start />
          Pedir para retirada
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.pickup-actions {
  display: flex;
  justify-content: center;
  margin-top: 28px;
}
</style>
