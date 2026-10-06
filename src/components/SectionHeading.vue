<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  script: { type: String, default: '' },
  title: { type: String, default: '' },
  lede: { type: String, default: '' },
  align: { type: String, default: 'center' },
})
</script>

<template>
  <header class="section-head" :class="`is-${align}`">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2>
      <span v-if="script" class="script">{{ script }}</span>
      <span v-if="title" class="display">{{ title }}</span>
    </h2>
    <p v-if="lede" class="lede">{{ lede }}</p>
    <div class="gold-rule" aria-hidden="true">
      <i></i><i></i><i></i>
    </div>
  </header>
</template>
