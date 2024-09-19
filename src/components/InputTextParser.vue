<script setup lang="ts">
import {ref, watch} from 'vue'
import {store} from '@/store'
import {RegExps} from "@/data/RegExps";

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
    <textarea v-model="inputText"
              class="text-input"
              placeholder="Вставьте текст из НАПРАВЛЕНИЯ НА ПРИЖИЗНЕННОЕ ПАТОЛОГО-АНАТОМИЧЕСКОЕ ИССЛЕДОВАНИЕ БИОПСИЙНОГО (ОПЕРАЦИОННОГО) МАТЕРИАЛА"
              name="text-input">
    </textarea>
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}
.text-input {
  margin-top: 1rem;
  width: 100%;
  height: 10rem;
  resize: none;
}
</style>