<script setup lang="ts">
import { type CardInfo, store } from '@/store'
import HystologyCard from '@/components/HystologyCard.vue'

function deleteCard(card: CardInfo) {
  store.cards = store.cards.filter(c => c !== card)
}
</script>

<template>
  <div class="cards-container">
    <div v-for="card in store.cards" :key="card.id" class="card-with-controls">
      <HystologyCard v-bind="{...store.basicInfo, ...card}" />
      <button @click="deleteCard(card)" class="hide-on-print">Удалить</button>
    </div>
  </div>
</template>

<style scoped>
.cards-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  justify-content: start;
  gap: 1rem;
  margin-top: 2rem;
}
.card-with-controls {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

@media print {
  .cards-container {
    margin: 0;
    gap: 0;
  }
}
</style>