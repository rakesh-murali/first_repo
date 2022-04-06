<template>
  <div class="debit-card">
    <div>
      <img class="card-aspire-logo" alt="logo" src="../../../assets/card-logo.svg"/>
    </div>
    <div class="name">
      {{cardDetails.name}}
    </div>
    <div class="number">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot space"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot space"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="space last-num">{{cardDetails.number.slice(cardDetails.number.length - 4)}}</span>
    </div>
    <div class="card-secure">
      <span class="exp-date"> Thru: {{cardDetails.expDate}} </span>
      <span class="cvv"> CVV: ***</span>
    </div>
    <div class="card-logo">
      <img alt="logo" src="../../../assets/visa-logo.svg"/>
    </div>
  </div>
  
</template>

<script>

export default {
  name: 'DebtCard',
  props: ['cardDetails']
}
</script>

<style lang="scss">

@import './Card.scss'
</style>
