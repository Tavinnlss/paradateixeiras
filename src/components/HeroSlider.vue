<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { site, slides, whatsappLink } from '../data/site'

const current = ref(0)
const height = ref(520)
const wa = whatsappLink('Olá! Quero fazer um pedido na Parada Teixeiras.')

function resize() {
  const width = window.innerWidth
  if (width < 700) {
    height.value = Math.min(width - 36, 460)
  } else {
    height.value = 520
  }
}

onMounted(() => {
  resize()
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  window.removeEventListener('resize', resize)
})
</script>

<template>
  <section id="inicio" class="hero">
    <v-container>
      <div class="hero-grid">
        <div>
          <p class="hero-kicker">{{ site.phrase }} · desde {{ site.since }}</p>
          <p class="hero-script">Seu almoço</p>
          <h1 class="hero-title">
            <span class="white">Merece</span>
            <span class="gold">o melhor</span>
          </h1>
          <p class="hero-copy">{{ site.tagline }}. {{ site.about }}</p>
          <div class="hero-actions">
            <v-btn class="btn-gold" href="#cardapio" elevation="0" size="large">Ver o cardápio</v-btn>
            <v-btn class="btn-ghost" :href="wa" target="_blank" rel="noopener" elevation="0" size="large">
              <v-icon icon="mdi-whatsapp" start />
              Chamar no WhatsApp
            </v-btn>
          </div>
          <div class="hero-meta">
            <span>
              <v-icon icon="mdi-map-marker" color="secondary" size="18" />
              {{ site.addressLine }}, {{ site.city }}
            </span>
            <span>
              <v-icon icon="mdi-moped" color="secondary" size="18" />
              Delivery {{ site.deliveryHours.toLowerCase() }}
            </span>
          </div>
        </div>

        <div class="hero-visual">
          <div class="hero-frame">
            <v-carousel
              v-model="current"
              class="hero-carousel"
              :height="height"
              cycle
              :interval="4800"
              hide-delimiter-background
              show-arrows
              color="secondary"
            >
              <v-carousel-item v-for="slide in slides" :key="slide.src">
                <div class="slide-fill">
                  <img :src="slide.src" :alt="slide.alt" />
                </div>
              </v-carousel-item>
            </v-carousel>
          </div>
          <p class="slide-caption">{{ slides[current]?.caption }}</p>
        </div>
      </div>
    </v-container>
  </section>

  <div class="phrase-ribbon" aria-hidden="true">
    <div class="phrase-track">
      <span v-for="n in 2" :key="n">
        COMIDA CASEIRA · ATENDIMENTO FAMILIAR · FEITA NA HORA · PRATO FEITO TODO DIA · MARMITEX · PARADA TEIXEIRAS ·
      </span>
    </div>
  </div>
</template>
