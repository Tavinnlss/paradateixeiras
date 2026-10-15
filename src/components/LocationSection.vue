<script setup>
import { mapsEmbedUrl, mapsLink, site } from '../data/site'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="localizacao" class="band">
    <v-container>
      <SectionHeading
        script="Onde estamos?"
        title="BR-120, em Teixeiras"
        lede="Saída para Ponte Nova, ao lado do Posto de Gasolina Teixeiras. Passe por aqui e aproveite o melhor da Parada!"
      />
      <div class="location-layout">
        <div class="address-card">
          <span class="badge">Localização</span>
          <h3>{{ site.city }}</h3>
          <p class="textCardLocation">Comida caseira no caminho de quem passa por Teixeiras e de quem mora aqui.</p>
          <div class="textNumberContact">
            <v-icon icon="mdi-whatsapp" size="25" color="green" />
            <a :href="`tel:${site.phoneTel}`">{{ site.phoneDisplay }}</a>
          </div>
          <div>
            <v-btn class="btn-gold" :href="mapsLink" target="_blank" rel="noopener" elevation="0">
              <v-icon icon="mdi-map-marker" start />
              Abrir no Google Maps
            </v-btn>
          </div>
        </div>
        <div class="map-frame">
          <iframe
            title="Mapa da Parada Teixeiras na BR-120, 1068, Teixeiras - MG"
            :src="mapsEmbedUrl"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.textCardLocation{
  font-weight: bold;
}
.textNumberContact{
  display: flex;
  align-items: center;
  gap: 5px;
}


</style>
