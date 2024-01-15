<script setup lang="ts">

import { type BasicInfo, type CardInfo } from '@/store'
const props = defineProps<BasicInfo & CardInfo>();
</script>

<template>
<div class="card">
  <div>
    <p>ФИО: {{props.name}}</p>
    <p>Дата рождения: {{props.dateOfBirth}}</p>
    <p>№ м/к: {{props.cardNumber}}</p>
    <p>Дата операции: {{props.date}}</p>
    <p>Отделение: {{props.department}}</p>
    <p>Препарат: {{props.specimen}}</p>
  </div>
</div>
</template>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    border: 1px solid;
    padding: 0.5rem;
    width: 18rem;
    line-height: 1.4rem;
  }

  @media print {
    .card {
      font-size: 10pt;
      line-height: 1.2rem;
      padding-top: 2rem;
    }
  }
</style>