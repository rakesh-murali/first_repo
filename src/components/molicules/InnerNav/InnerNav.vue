<template>
  <div class="inner-nav">
    <div class="inner-nav-container">
      <a href="#/">My debit cards</a>
      <a href="#/">All Company Cards</a>
    </div>
    <component :is="currentView" />
  </div>
</template>

<script>

import DebtCards from '../DebtCards/DebtCards'
import CompanyDetails from '../CompanyDetails/CompanyDetails'

const routes = {
  '/': DebtCards,
  '/about': CompanyDetails
}

export default {
  name: 'InnerNavBar',
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || ''
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
		})
  }
}
</script>

<style lang='scss'>
@import './InnerNav.scss'
</style>
