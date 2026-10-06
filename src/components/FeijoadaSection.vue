<script setup>
import SectionHeading from './SectionHeading.vue'
</script>

<template>
  <section id="feijoada" class="band band-deep">
    <v-container>
      <div class="feijoada-layout">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Almoço"
            script="O mais pedido"
            title=""
          />
          <p class="mega">Feijoada</p>
          <p class="hero-copy">
            O prato mais vendido do almoço é a feijoada. É ela que a casa mais serve quando o sol está alto:
            comida caseira, panela caprichada e o ponto que a freguesia de Teixeiras já conhece.
          </p>
          <div class="hero-actions">
            <v-btn class="btn-gold" href="#cardapio" elevation="0">Ver no cardápio</v-btn>
          </div>
        </div>
        <aside class="feijoada-side">
          <span class="badge">Mais vendido</span>
          <strong>Feijoada da casa</strong>
          <p>
            Sai no almoço, junto com o prato feito, a tilápia e a marmitex. Se for para escolher um só,
            a mesa escolhe a feijoada.
          </p>
        </aside>
      </div>
    </v-container>
  </section>
</template>
