<script setup>
import { site, whatsappLink } from '../data/site'

const wa = whatsappLink('Olá! Quero falar com a Parada Teixeiras.')
</script>

<template>
  <footer class="site-footer">
    <v-container>
      <div class="footer-grid">
        <div>
          <div class="footer-brand">
            <span class="brand-logo">
              <img src="/images/logo.png" alt="Logo Parada Teixeiras" />
            </span>
            <div>
              <strong>PARADA TEIXEIRAS</strong>
              <span class="eyebrow">Desde {{ site.since }}</span>
            </div>
          </div>
          <p>{{ site.tagline }}.</p>
        </div>
        <div>
          <h3>Visite</h3>
          <ul>
            <li>{{ site.addressLine }}</li>
            <li>{{ site.city }}</li>
            <li>
              <a :href="`tel:${site.phoneTel}`">{{ site.phoneDisplay }}</a>
            </li>
            <li>Delivery: {{ site.deliveryHours }}</li>
          </ul>
        </div>
        <div>
          <h3>Redes</h3>
          <div class="social-row">
            <a :href="site.instagramUrl" target="_blank" rel="noopener" :aria-label="`Instagram ${site.instagramHandle}`">
              <v-icon icon="mdi-instagram" size="24" />
            </a>
            <a :href="wa" target="_blank" rel="noopener" aria-label="WhatsApp da Parada Teixeiras">
              <v-icon icon="mdi-whatsapp" size="24" />
            </a>
          </div>
          <p style="margin-top: 12px">{{ site.instagramHandle }}</p>
        </div>
      </div>
      <div class="legal">
        <span>© {{ new Date().getFullYear() }} Parada Teixeiras. Comida caseira em Teixeiras - MG.</span>
        <span>Aos domingos o restaurante fecha. O salão pode ser alugado.</span>
      </div>
    </v-container>
  </footer>
</template>
