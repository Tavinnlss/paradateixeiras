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
            src="/images/IMG/paoComLinguicaParada.jpg"
            alt="Pão com linguiça da Parada Teixeiras"
          />
        </div>
        <div class="containerLinguica">
          <SectionHeading class="teste"
            align="center"
            script="Direto da chapa"
            title="O pão com linguiça mais famoso de Teixeiras"
          />
          <p class="hero-copy">
            Pão quentinho, queijo derretido e o sabor marcante de um clássico
            que conquistou Teixeiras. Nosso pão com linguiça é a escolha certa
            para quem busca um lanche saboroso e quer sempre repetir a
            experiência!
          </p>
          <!-- <div class="hero-actions">
            <v-btn
              class="btn-gold"
              :href="wa"
              target="_blank"
              rel="noopener"
              elevation="0"
            >
              Eu quero!
            </v-btn>
          </div> -->
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

.containerLinguica p{
  text-align: center;
  margin: 0 auto;
 }

@media (max-width: 800px){


 .containerLinguica{
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
 }



}

/* @media (max-width: 800px) and (min-width: 500px){
 
} */
</style>
