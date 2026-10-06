<script setup>
import { whatsappLink } from './data/site'
import SiteHeader from './components/SiteHeader.vue'
import HeroSlider from './components/HeroSlider.vue'
import HighlightsBar from './components/HighlightsBar.vue'
import DayNightSection from './components/DayNightSection.vue'
import FeijoadaSection from './components/FeijoadaSection.vue'
import LinguicaSection from './components/LinguicaSection.vue'
import MenuSection from './components/MenuSection.vue'
import DeliverySection from './components/DeliverySection.vue'
import SundaySection from './components/SundaySection.vue'
import LoyaltySection from './components/LoyaltySection.vue'
import LocationSection from './components/LocationSection.vue'
import ContactSection from './components/ContactSection.vue'
import PartnersSection from './components/PartnersSection.vue'
import SiteFooter from './components/SiteFooter.vue'

const wa = whatsappLink('Olá! Quero fazer um pedido na Parada Teixeiras.')
</script>

<template>
  <v-app>
    <a class="skip-link" href="#inicio">Ir para o conteúdo</a>
    <SiteHeader />
    <v-main>
      <HeroSlider />
      <HighlightsBar />
      <DayNightSection />
      <FeijoadaSection />
      <LinguicaSection />
      <MenuSection />
      <DeliverySection />
      <SundaySection />
      <LoyaltySection />
      <LocationSection />
      <ContactSection />
      <PartnersSection />
    </v-main>
    <SiteFooter />
    <a class="wa-float" :href="wa" target="_blank" rel="noopener" aria-label="Chamar no WhatsApp">
      <v-icon icon="mdi-whatsapp" size="30" />
    </a>
  </v-app>
</template>
