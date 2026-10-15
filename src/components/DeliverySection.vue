<script setup>
import { site, whatsappLink } from '../data/site'

const wa = whatsappLink('Olá! Quero pedir pelo delivery da Parada Teixeiras.')
</script>

<template>
  <section id="delivery" class="band band-deep">
    <v-container>
      <div class="delivery-layout">
        <div>
          <p class="script">Peça pelo nosso</p>
          <h2 class="delivery-word">Delivery</h2>
          <div class="gold-rule" aria-hidden="true">
            <i></i><i></i><i></i>
          </div>
          <div class="hours-block">
            <p class="hero-copy" style="margin-bottom: 0">A partir das 18:30</p>
            <strong>{{ site.deliveryHours }}</strong>
          </div>
          <a class="phone-pill" :href="`tel:${site.phoneTel}`">
            <v-icon icon="mdi-whatsapp" size="22" />
            {{ site.phoneDisplay }}
          </a>
          <div class="hero-actions">
            <v-btn class="btn-gold" :href="wa" target="_blank" rel="noopener" elevation="0" size="large">
              Pedir agora
            </v-btn>
          </div>
        </div>
        <div class="mascot-frame">
          <img src="/images/delivery.jpeg" alt="Mascote da Parada Teixeiras com a bandeja na mão" />
        </div>
      </div>
    </v-container>
  </section>
</template>
