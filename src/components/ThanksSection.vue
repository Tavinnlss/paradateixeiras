<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { mapsLink } from "../data/site";

const showTop = ref(false);
let frame = 0;

function update() {
  const contact = document.getElementById("contato");
  if (!contact) return;
  showTop.value = contact.getBoundingClientRect().top <= window.innerHeight * 0.85;
}

function onScroll() {
  if (frame) return;
  frame = window.requestAnimationFrame(() => {
    frame = 0;
    update();
  });
}

onMounted(() => {
  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onScroll);
  window.cancelAnimationFrame(frame);
});
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
            src="/images/IMG/mascote-visita.png?v=2"
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
            <span class="thanks-google" aria-hidden="true">
              <svg viewBox="0 0 48 48">
                <path
                  fill="#FFC107"
                  d="M43.611 20.083H42V20H24v8h11.303C33.654 32.657 29.195 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.176 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>

    </v-container>

    <a
      class="to-top"
      :class="{ 'is-on': showTop }"
      href="#inicio"
      aria-label="Voltar ao início"
      :aria-hidden="showTop ? undefined : 'true'"
      :tabindex="showTop ? undefined : -1"
    >
      <v-icon icon="mdi-chevron-up" size="28" />
    </a>
  </section>
</template>


<style scoped>
@media (max-width: 800px){
  .thanks-copy{
    text-align: center;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center ;
  }
 
 }
</style>
