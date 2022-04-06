<template>
  <div class="card-details-body">
    <div class="card-details-container">
      <div class="card-details-option">
        <div class='collapse-header'>
          <img class='details-logo' alt="Card Details" src="../../../assets/card-details.svg"/>
          <span class='card-detail-label'>Card details</span>
          <b-button v-b-toggle.collapse-a.collapse-b class="collapse-btn">
            <img class='arrow' alt="Vue logo" src="../../../assets/up-arrow.svg"/>
          </b-button>
        </div>
      </div>
      <div class="card-details-option">
        <div class="collapse-header">
          <img class='details-logo' alt="Card Details" src="../../../assets/transactions.svg"/>
          <span class='card-detail-label'>Recent transactions</span>
          <b-button v-b-toggle.collapse-a.collapse-b class="collapse-btn">
            <img class='arrow' alt="Vue logo" src="../../../assets/up-arrow.svg"/>
          </b-button>
        </div>
        <b-collapse id="collapse-a" class="mt-2">
          <b-card class="transactions" :key="index" v-for="(transaction, index) in transactions">
            <div class='transaction-logo'>
              <img class='details-logo' alt="Card Details" :src="getImgUrl(transaction.img)"/>
            </div>
              <div class='details-info'>
                <div class='name'>{{transaction.to}}</div>
                <div class='date'>{{transaction.date}}</div>
              </div>
              <div class='cost'>+ S$ {{transaction.cost}}</div>
              <img class='next-logo' alt="Card Details" src="../../../assets/next.svg" />
          </b-card>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CardDetails ',
  props: ['transactions'],
  methods: {
    getImgUrl(img) {
      var images = require.context('../../../assets/', false, /\.svg$/)
      return images('./' + img + ".svg")
    }
  }
}
</script>

<style lang="scss">
@import './CardDetails'
</style>
