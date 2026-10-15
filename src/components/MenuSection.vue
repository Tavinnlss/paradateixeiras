<script setup>
import { computed, ref, watch } from 'vue'
import { menu, whatsappLink } from '../data/site'
import SectionHeading from './SectionHeading.vue'

function orderLink(item) {
  return whatsappLink(`Olá! Quero pedir ${item.name} na Parada Teixeiras.`)
}

const filters = [
  { id: 'todos', label: 'Tudo' },
  { id: 'almoco', label: 'Dia' },
  { id: 'noite', label: 'Noite' },
]

const current = ref('todos')
const track = ref(null)

const visible = computed(() => {
  if (current.value === 'todos') return menu
  return menu.filter((item) => item.category === current.value)
})

watch(current, () => {
  track.value?.scrollTo({ left: 0, behavior: 'smooth' })
})

function scrollDishes(direction) {
  const el = track.value
  if (!el) return
  const card = el.querySelector('.dish')
  const gap = 14
  const amount = (card?.offsetWidth || el.clientWidth * 0.86) + gap
  el.scrollBy({ left: direction * amount, behavior: 'smooth' })
}
</script>

<template>
  <section id="cardapio" class="band">
    <v-container>
      <SectionHeading
        eyebrow="Cardápio"
        script="Escolha seu favorito"
        title="NOSSOS PRATOS"
      />

      <div class="filters" role="tablist" aria-label="Filtrar cardápio">
        <button
          v-for="filter in filters"
          :key="filter.id"
          class="filter-btn"
          :class="{ 'is-on': current === filter.id }"
          type="button"
          role="tab"
          :aria-selected="current === filter.id"
          @click="current = filter.id"
        >
          {{ filter.label }}
        </button>
      </div>

      <div class="dish-scroller">
        <div
          ref="track"
          class="dish-grid"
          role="region"
          aria-label="Pratos do cardápio"
          tabindex="0"
        >
          <article
            v-for="item in visible"
            :key="item.id"
            class="dish"
            :class="{ 'is-featured': item.featured }"
          >
            <div class="dish-media">
              <img
                v-if="item.image"
                :src="item.image"
                :alt="item.name"
                :style="{
                  objectPosition: item.imagePosition,
                  transform: `scale(${item.zoom || 1})`,
                  transformOrigin: item.imagePosition,
                }"
              />
              <v-icon v-else :icon="item.icon" size="46" />
              <span v-if="item.badge" class="badge dish-badge">{{ item.badge }}</span>
            </div>
            <div class="dish-body">
              <span class="dish-tag">{{ item.categoryLabel }}</span>
              <h3>{{ item.name }}</h3>
              <p>{{ item.description }}</p>
              <a
                class="dish-wa"
                :href="orderLink(item)"
                target="_blank"
                rel="noopener"
                :aria-label="`Pedir ${item.name} pelo WhatsApp`"
              >
                <v-icon icon="mdi-whatsapp" size="18" />
                Quero este prato
              </a>
            </div>
          </article>
        </div>
        <div class="dish-nav">
          <button type="button" aria-label="Prato anterior" @click="scrollDishes(-1)">
            <v-icon icon="mdi-chevron-left" />
          </button>
          <button type="button" aria-label="Próximo prato" @click="scrollDishes(1)">
            <v-icon icon="mdi-chevron-right" />
          </button>
        </div>
      </div>
    </v-container>
  </section>
</template>
