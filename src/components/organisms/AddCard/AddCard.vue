<template>
  <div class='add-card'>
    <router-link class="new-card" to="/home">Back to Home</router-link>
    <form class="add-card-form">
      <label for="cname">Name on Card:</label>
      <input type="text" v-model="formData.name" id="cname" name="cname" placeholder="Name on Card"><br><br>
      <label for="cnum">Card Number:</label>
      <input type="text" id="cnum" v-model="formData.number" name="cnum" placeholder="0000 0000 0000 0000"><br><br>
      <div class='exp-date'>
        <label class='exp-date' for="cdate">Expiration Date:</label>
        <input class='exp-date' type="text" placeholder="MM/YY" id="cdate" name="cdate" v-model="formData.expDate"><br><br>
      </div>
      <div class='cvv'>
        <label class='exp-date' for="cvv">CVV:</label>
        <input class='exp-date' type="text" placeholder="***" id="cvv" name="cvv" v-model="formData.cvv"><br><br>
      </div>
      <input type="submit" value="Submit" v-on:click="addCard">
    </form>
  </div>
</template>

<script>

// import { router } from '../../../main'

export default {
  name: 'AddCard',
  data () {
    return {
      formData: {
        name: '',
        expDate: '',
        number: '',
        cvv: ''
      }
    }
  },
  methods: {
    addCard: function (e) {
      e.preventDefault()
      this.$store.commit('addCard', this.formData)
      console.log(this.$route)
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style lang="scss">

label {
  display: block !important;
}

.add-card {
  margin: auto;
}

.exp-date, .cvv {
  display: inline-block;
}

.add-card-form {
  margin: auto;
  padding: 55px;
}
</style>
