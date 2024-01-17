<script setup lang="ts">
import InputTextParser from "@/components/InputTextParser.vue";
import CardsOutput from '@/components/CardsOutput.vue'
import Specimens from '@/components/Specimens.vue'

function printPapers() {
  window.print()
}

</script>

<template>
  <main>
    <div class="button_container hide-on-print">
      <button @click="printPapers" class="button">Печатать</button>
    </div>
    <InputTextParser class="hide-on-print"/>
    <Specimens class="hide-on-print"/>
    <CardsOutput />
  </main>
</template>

<style>
.button_container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.button {
  width: 15rem;
  height: 5rem;
  border-radius: 100rem;
  border: 0;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  transition: background-color .4s ease-out 100ms;
  background-color: #c3ffaa;
  font-size: 2rem;
}

.button:hover {
  background-color: #208a01;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

@media print {
  .hide-on-print {
    display: none !important;
  }
}
</style>
