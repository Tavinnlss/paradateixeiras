<script setup>
import { whatsappLink } from "../data/site";
import SectionHeading from "./SectionHeading.vue";

const wa = whatsappLink(
  "Olá! Quero saber como alugar o espaço da Parada Teixeiras no domingo.",
);
</script>

<template>
  <section id="aluguel" class="band">
    <v-container>
      <div class="media-copy sunday-layout">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Domingo"
            script="Portas fechadas"
            title="O salão pode ser seu"
          />
          <p class="hero-copy" style="margin-top: 0">
            Aos domingos, a Parada Teixeiras fecha as portas para o atendimento
            habitual, mas abre espaço para momentos especiais! Nosso ambiente
            pode ser reservado para aniversários, confraternizações e encontros
            em família, com todo o aconchego e clima de casa que você já
            conhece.
          </p>
          <div class="hero-actions">
            <v-btn
              class="btn-gold"
              :href="wa"
              target="_blank"
              rel="noopener"
              elevation="0"
            >
              <v-icon icon="mdi-whatsapp" start />
              Quero alugar
            </v-btn>
          </div>
        </div>

        <div class="reel">
          <iframe
            src="https://www.youtube-nocookie.com/embed/Z2rmKXn0FoA?autoplay=1&mute=1&loop=1&playlist=Z2rmKXn0FoA&controls=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&fs=0"
            title="Seu evento merece um lugar especial — Parada Teixeiras"
            allow="
              accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture;
              web-share;
            "
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
@media (max-width: 1199px) {
  .sunday-layout {
    grid-template-columns: minmax(0, 1fr) minmax(168px, 32%);
    gap: 24px;
  }

  .sunday-layout > .reel {
    width: 100%;
  }

  .sunday-layout :deep(.display) {
    font-size: clamp(2.5rem, 4.6vw, 3.25rem);
  }
}

@media (max-width: 600px) {
  .sunday-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;
  }

  .sunday-layout > .reel {
    width: min(70vw, 260px);
  }

  .sunday-layout :deep(.display) {
    font-size: clamp(2.8rem, 6vw, 4.6rem);
  }
}
</style>
