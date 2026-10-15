<script setup>
import SectionHeading from "./SectionHeading.vue";
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
            A estrela do nosso almoço é a feijoada! Preparada com carinho,
            ingredientes selecionados e aquele tempero caseiro que conquista a
            cada garfada. Um sabor especial que já é tradição e conquista o
            paladar de Teixeiras.
          </p>
          <!-- <div class="hero-actions">
            <v-btn class="btn-gold" href="#cardapio" elevation="0"
              >Ver no cardápio</v-btn
            >
          </div> -->
        </div>
        <aside class="feijoada-side"></aside>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.feijoada-side {
  border: 1px solid var(--gold);
}
</style>
