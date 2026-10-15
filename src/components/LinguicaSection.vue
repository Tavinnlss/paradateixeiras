<script setup>
import { whatsappLink } from "../data/site";
import SectionHeading from "./SectionHeading.vue";

const wa = whatsappLink(
  "Olá! Quero pedir o pão com linguiça da Parada Teixeiras.",
);
</script>

<template>
  <section id="linguica" class="band band-alt">
    <v-container>
      <div class="media-copy">
        <div class="photo-frame">
          <img
            src="/images/paoComLinguicaParada.jpg"
            alt="Pão com linguiça da Parada Teixeiras"
          />
        </div>
        <div>
          <SectionHeading
            align="left"
            script="Direto da chapa"
            title="O pão com linguiça mais famoso de Teixeiras"
          />
          <p class="hero-copy" style="margin-top: 0">
            Pão macio, linguiça suculenta e queijo derretido na medida certa. Um
            lanche irresistível, famoso em Teixeiras e que sempre dá vontade de
            pedir de novo!
          </p>
          <div class="hero-actions">
            <v-btn
              class="btn-gold"
              :href="wa"
              target="_blank"
              rel="noopener"
              elevation="0"
            >
              Eu quero!
            </v-btn>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.photo-frame {
  min-height: 0;
}

.photo-frame img {
  width: 100%;
  height: auto;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center 46%;
}
</style>
