<script setup>
import { ref } from 'vue'
import { nav, site, whatsappLink } from '../data/site'

const open = ref(false)
const wa = whatsappLink('Olá! Quero fazer um pedido na Parada Teixeiras.')
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="#inicio" @click="open = false">
        <span class="brand-logo">
          <img src="/images/logoparadatexas.jpg" alt="Logo Parada Teixeiras" />
        </span>
        <span class="brand-text">
          <strong>PARADA</strong>
          <small>Teixeiras</small>
        </span>
      </a>

      <nav class="desktop-nav" aria-label="Seções">
        <a v-for="item in nav" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>

      <v-btn class="btn-gold header-cta" :href="wa" target="_blank" rel="noopener" elevation="0">
        <v-icon icon="mdi-whatsapp" start />
        {{ site.phoneDisplay }}
      </v-btn>

      <button class="menu-toggle" type="button" :aria-expanded="open" aria-label="Abrir menu" @click="open = !open">
        <v-icon :icon="open ? 'mdi-close' : 'mdi-menu'" />
      </button>
    </div>
  </header>

  <nav v-if="open" class="mobile-nav" aria-label="Menu móvel">
    <a v-for="item in nav" :key="item.href" :href="item.href" @click="open = false">{{ item.label }}</a>
    <v-btn class="btn-gold" :href="wa" target="_blank" rel="noopener" elevation="0" @click="open = false">
      WhatsApp
    </v-btn>
  </nav>
</template>
