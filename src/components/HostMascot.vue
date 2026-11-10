<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const HIDE_AFTER = 48;

const away = ref(false);
let frame = 0;

function onScroll() {
  if (frame) return;
  frame = window.requestAnimationFrame(() => {
    frame = 0;
    away.value = window.scrollY > HIDE_AFTER;
  });
}

onMounted(() => {
  away.value = window.scrollY > HIDE_AFTER;
  window.addEventListener("scroll", onScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
  window.cancelAnimationFrame(frame);
});
</script>

<template>
  <aside class="host" :class="{ 'is-away': away }" :aria-hidden="away || undefined">
    <p class="host-bubble">Olá! Seja bem-vindo ao Parada.</p>
    <img class="host-figure" src="/images/IMG/mascote.png?v=2" alt="" />
  </aside>
</template>
