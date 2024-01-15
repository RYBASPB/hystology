<script setup lang="ts">
import InputTextParser from "@/components/InputTextParser.vue";
import CardsOutput from '@/components/CardsOutput.vue'
import Specimens from '@/components/Specimens.vue'
</script>

<template>
  <main>
    <InputTextParser class="hide-on-print"/>
    <Specimens class="hide-on-print"/>
    <CardsOutput />
  </main>
</template>

<style>
@media print {
  .hide-on-print {
    display: none !important;
  }
}
</style>
