<script setup>
import { loyalty } from '../data/site'
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="fidelidade" class="band band-alt">
    <v-container>
      <SectionHeading
        :eyebrow="loyalty.provisional ? 'Texto provisório' : 'Programa da casa'"
        :script="loyalty.script"
        :title="loyalty.title"
        :lede="loyalty.intro"
      />
      <div class="loyalty-layout">
        <article class="stamp-card" aria-label="Modelo do cartão fidelidade">
          <div class="stamp-head">
            <span class="brand-logo">
              <img src="/images/logo.png" alt="" />
            </span>
            <div>
              <strong>Cartão fidelidade</strong>
              <span>Parada Teixeiras</span>
            </div>
          </div>
          <div class="stamp-grid">
            <span v-for="n in 10" :key="n" class="stamp" :class="{ 'is-on': n <= 3 }">
              <v-icon v-if="n <= 3" icon="mdi-check-bold" size="18" />
              <template v-else>{{ n }}</template>
            </span>
          </div>
        </article>
        <ol class="rules">
          <li v-for="(rule, index) in loyalty.rules" :key="rule">
            <span class="n">{{ index + 1 }}</span>
            <span>{{ rule }}</span>
          </li>
        </ol>
      </div>
    </v-container>
  </section>
</template>
