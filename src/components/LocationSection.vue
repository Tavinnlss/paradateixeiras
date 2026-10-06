<script setup>
import { mapsEmbedUrl, mapsLink, site } from '../data/site'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="localizacao" class="band">
    <v-container>
      <SectionHeading
        eyebrow="Onde estamos"
        script="Vem sentar"
        title="Na BR-120, em Teixeiras"
        lede="Estamos na beira da BR-120. Estaciona, entra e senta como se fosse em casa."
      />
      <div class="location-layout">
        <div class="address-card">
          <span class="badge">Localização</span>
          <h3>{{ site.addressLine }}<br />{{ site.city }}</h3>
          <p>Comida caseira no caminho de quem passa por Teixeiras e de quem mora aqui.</p>
          <p>
            <v-icon icon="mdi-phone" size="18" />
            <a :href="`tel:${site.phoneTel}`">{{ site.phoneDisplay }}</a>
          </p>
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
