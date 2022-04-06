<template>
  <div class="card-details">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="500"
      controls
      indicators
    >
      <b-carousel-slide :key="index" v-for="(card, index) in cardDetails">
        <template #img>
          <Card :cardDetails="card" />
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import Card from '../../atoms/Card/Card'

export default {
  name: 'DebtCards',
  components: {
    Card
  },
  computed: {
    cardDetails () {
      return this.$store.state.cardDetails.length > 0 && this.$store.state.cardDetails
    }
  }
}
</script>

<style lang="scss">

.card-details {

}

</style>
