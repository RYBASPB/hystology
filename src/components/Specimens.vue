<script setup lang="ts">

import { store } from '@/store'
import { ref } from 'vue'

let specimenInput = ref("");
let id = 0;

function handleSubmit() {
  store.cards.push({
    id: id++,
    specimen: specimenInput.value
  });
  specimenInput.value = "";
}

function addFromTemplate(event: Event) {
  const newSpecimen = (event.target as HTMLButtonElement).textContent;
  store.cards.push({
    id: id++,
    specimen: newSpecimen || ""
  });
}
</script>

<template>
<div class="container">
  <h2>Введите названия препаратов</h2>
  <form @submit.prevent="handleSubmit" class="form">
    <input type="text" v-model="specimenInput" class="input" name="specimen-input">
    <button type="submit">Добавить</button>
  </form>

  <h2>Шаблоны</h2>
  <div class="container-templates">
    <button @click="addFromTemplate">Соскоб эндометрия</button>
    <button @click="addFromTemplate">Соскоб эндоцервикса</button>
    <button @click="addFromTemplate">Биоптат эндометрия</button>
    <button @click="addFromTemplate">Биоптат эндоцервикса</button>
    <button @click="addFromTemplate">Капсула кисты левого яичника</button>
    <button @click="addFromTemplate">Капсула кисты правого яичника</button>
    <button @click="addFromTemplate">Эндометриоидный инфильтрат</button>
    <button @click="addFromTemplate">Морцелированный миоматозный узел</button>
    <button @click="addFromTemplate">Миоматозный узел</button>
    <button @click="addFromTemplate">Матка с придатками</button>
    <button @click="addFromTemplate">Матка с маточными трубами</button>
    <button @click="addFromTemplate">Морцелированный миоматозный узел</button>
    <button @click="addFromTemplate">Биоптат брюшины</button>
  </div>
</div>
</template>

<style scoped>
h2 {
  margin-bottom: 1rem;
}
button {
  padding: 0.5rem;
  border-radius: 100rem;
  border: 0;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  transition: background-color .4s ease-out 100ms;
  background-color: #c3ffaa;
}
button:hover {
  background-color: #208a01;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
}
.container-templates {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}
.form {
  display: flex;
  gap: 1rem;
  width: 100%;
  justify-content: center;
  margin-bottom: 1rem;
}
.input {
  width: 100%;
}
</style>