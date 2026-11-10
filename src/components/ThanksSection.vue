<script setup>
import { mapsLink } from "../data/site";
</script>

<template>
  <section class="band band-deep thanks" aria-labelledby="thanks-title">
    <v-container>
      <div class="thanks-layout">
        <div class="thanks-stage">
          <div class="thanks-orb" aria-hidden="true">
            <span class="thanks-ripple"></span>
            <span class="thanks-ripple"></span>
            <span class="thanks-ripple"></span>
          </div>
          <img
            class="thanks-mascot"
            src="/images/mascote-visita.png?v=2"
            alt=""
          />
        </div>

        <div class="thanks-copy">
          <p class="thanks-kicker">
            <i></i> Obrigado por escolher a Parada Teixeiras <i></i>
          </p>
          <h2 id="thanks-title">
            FOi um prazer receber você!
            <span>Volte sempre que quiser.</span>
          </h2>
          <p>
            Esperamos que tenha aproveitado sua visita! Sua presença é muito
            importante para nós. Se você gostou da experiência, deixe sua
            avaliação no Google. Seu feedback nos ajuda a melhorar e também
            orienta outras pessoas que passam pela BR-120 a conhecer nossa casa.
          </p>
          <a
            class="btn-gold thanks-btn"
            :href="mapsLink"
            target="_blank"
            rel="noopener"
          >
            Deixe sua avaliação
            <v-icon icon="mdi-google" size="18" />
          </a>
        </div>
      </div>

      <a class="to-top" href="#inicio">
        <v-icon icon="mdi-chevron-up" size="20" />
        Voltar ao início
      </a>
    </v-container>
  </section>
</template>
