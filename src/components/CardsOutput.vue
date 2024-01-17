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
button {
  padding: 0.5rem;
  border-radius: 100rem;
  border: 0;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  transition: background-color .4s ease-out 100ms;
  background-color: #ffc3c3;
}
button:hover {
  background-color: #ff0000;
}
.cards-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
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