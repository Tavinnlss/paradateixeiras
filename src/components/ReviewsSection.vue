<script setup>
import { reviews } from '../data/site'

function starIcon(rating, index) {
  if (rating >= index) return 'mdi-star'
  if (rating >= index - 0.5) return 'mdi-star-half-full'
  return 'mdi-star-outline'
}
</script>

<template>
  <section id="avaliacoes" class="band band-deep">
    <v-container>
      <header class="reviews-head">
        <div>
          <p class="reviews-kicker"><i aria-hidden="true"></i>{{ reviews.kicker }}</p>
          <h2>{{ reviews.title }}</h2>
        </div>
        <p class="reviews-note">{{ reviews.note }}</p>
      </header>
      <div class="reviews-grid">
        <article v-for="item in reviews.items" :key="item.name" class="review-card">
          <div class="review-top">
            <img class="review-photo" :src="item.photo" :alt="`Foto de ${item.name}`" />
            <div class="review-who">
              <strong>{{ item.name }}</strong>
              <span>{{ item.date }}</span>
            </div>
            <span class="review-badge">Compra verificada</span>
          </div>
          <div class="review-stars" :aria-label="`${item.rating} de 5 estrelas`">
            <v-icon
              v-for="n in 5"
              :key="n"
              :icon="starIcon(item.rating, n)"
              size="16"
            />
          </div>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </v-container>
  </section>
</template>
