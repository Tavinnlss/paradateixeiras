<script setup>
import { whatsappLink } from '../data/site'
import SectionHeading from './SectionHeading.vue'

const wa = whatsappLink('Olá! Quero saber como alugar o espaço da Parada Teixeiras no domingo.')
</script>

<template>
  <section id="aluguel" class="band">
    <v-container>
      <div class="media-copy">
        <div class="photo-frame">
          <img
            src="/images/almoco.jpg"
            alt="Salão da Parada Teixeiras, com mesas de madeira e o almoço servido"
          />
        </div>
        <div>
          <SectionHeading
            align="left"
            eyebrow="Domingo"
            script="Portas fechadas"
            title="O salão pode ser seu"
          />
          <p class="hero-copy" style="margin-top: 0">
            Aos domingos o restaurante fica fechado. O espaço, porém, pode ser alugado para aniversário,
            confraternização ou um encontro em família — com o mesmo clima de casa da Parada Teixeiras.
          </p>
          <div class="hero-actions">
            <v-btn class="btn-gold" :href="wa" target="_blank" rel="noopener" elevation="0">
              <v-icon icon="mdi-whatsapp" start />
              Quero alugar
            </v-btn>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>
