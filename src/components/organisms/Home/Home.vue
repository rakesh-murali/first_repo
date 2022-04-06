<template>
    <div class='body-container'>
      <div class="container">
        <AppHeader :balance="currentBalance"/>
        <InnerNav/>
      </div>
      <CardActions/>
      <CardDetails :transactions="recentTransactions"/>  
      <div class='nav-bar'>
        <NavBar/>
      </div>
    </div>
</template>

<script>
import InnerNav from '../../molicules/InnerNav/InnerNav'
import CardActions from '../../atoms/CardActions/CardActions'
import CardDetails from '../../atoms/CardDetails/CardDetails'
import AppHeader from '../../molicules/AppHeader/AppHeader'
import NavBar from '../../atoms/NavBar/NavBar'

export default {
  name: 'HomePage',
  components: {
    NavBar,
    InnerNav,
    CardActions,
    CardDetails,
    AppHeader
  },
  computed: {
    recentTransactions () {
      return this.$store.state.recentTransactions.length > 0 && this.$store.state.recentTransactions
    },
    currentBalance () {
      return this.$store.state.currentBalance
    }
  }
}
</script>

<style lang="scss">
</style>
