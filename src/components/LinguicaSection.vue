<script setup>
import { whatsappLink } from '../data/site'
import SectionHeading from './SectionHeading.vue'

const wa = whatsappLink('Olá! Quero pedir o pão com linguiça da Parada Teixeiras.')
</script>

<template>
  <section id="linguica" class="band band-alt">
    <v-container>
      <div class="media-copy">
        <div class="photo-frame">
          <img
            class="crop-pao"
            src="/images/pao-linguica.png"
            alt="Pão com linguiça da Parada Teixeiras"
          />
        </div>
        <div>
          <SectionHeading
            align="left"
            eyebrow="O clássico da cidade"
            script="Direto da chapa"
            title="O pão com linguiça mais famoso de Teixeiras"
          />
          <p class="hero-copy" style="margin-top: 0">
            Pão macio, linguiça suculenta e queijo derretendo. É o lanche que Teixeiras já conhece de nome
            e volta para repetir — no salão, de noite, ou pelo delivery de sábado e domingo.
          </p>
          <div class="hero-actions">
            <v-btn class="btn-gold" :href="wa" target="_blank" rel="noopener" elevation="0">
              <v-icon icon="mdi-whatsapp" start />
              Pedir o pão com linguiça
            </v-btn>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>
