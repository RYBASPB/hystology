<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { store } from '@/store'

type RegExpsForCardInfo = {
  [key in "cardNumber" | "name" | "dateOfBirth"]: RegExp
}

const RegExps : RegExpsForCardInfo = {
  cardNumber: /МЕДИЦИНСКАЯ\sКАРТА\s№\s*(\d+\/С\d+)\s*СТАЦИОНАРНОГО БОЛЬНОГО /ims,
  name: /1\.Фамилия, имя, отчество\s+((?:[а-яё]+\s){2}(?:[а-я]+)?)/is,
  dateOfBirth: /\((\d{2}\.\d{2}\.\d{4})\)/i
}

function getCardFromInputText() {
  counter.value++
  Object.assign(store.basicInfo, {
    cardNumber: infoMatcher(RegExps.cardNumber),
    date: new Date().toLocaleDateString(),
    dateOfBirth: infoMatcher(RegExps.dateOfBirth),
    department: "ГО1",
    name: infoMatcher(RegExps.name)
  });
}

function infoMatcher(re: RegExp) {
  const matchInfo = inputText.value.match(re);
  if (matchInfo) {
    return matchInfo[1];
  }
  return "";
}

let inputText = ref("")
let counter = ref(0)
watch(inputText, getCardFromInputText)
</script>

<template>
  <div class="input-container">
    <h2>Вставьте данные о пациенте</h2>
    <textarea v-model="inputText" class="text-input"></textarea>
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.text-input {
  width: 100%;
  height: 10rem;
  resize: none;
}
</style>