<script setup>
import { computed, ref } from 'vue'
import { menu } from '../data/site'
import SectionHeading from './SectionHeading.vue'

const filters = [
  { id: 'todos', label: 'Tudo' },
  { id: 'almoco', label: 'Almoço' },
  { id: 'noite', label: 'Noite' },
]

const current = ref('todos')

const visible = computed(() => {
  if (current.value === 'todos') return menu
  return menu.filter((item) => item.category === current.value)
})
</script>

<template>
  <section id="cardapio" class="band">
    <v-container>
      <SectionHeading
        eyebrow="Cardápio"
        script="Escolhe o seu"
        title="O que sai da cozinha"
        lede="De dia, almoço. De noite, porções e o pão com linguiça. Um recorte do que a casa serve — o cardápio completo você confirma no salão ou no WhatsApp."
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

      <v-row>
        <v-col v-for="item in visible" :key="item.id" cols="12" sm="6" lg="3">
          <article class="dish" :class="{ 'is-featured': item.featured }">
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
            </div>
            <div class="dish-body">
              <span class="dish-tag">{{ item.categoryLabel }}</span>
              <h3>{{ item.name }}</h3>
              <p>{{ item.description }}</p>
              <span v-if="item.badge" class="badge">{{ item.badge }}</span>
            </div>
          </article>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
