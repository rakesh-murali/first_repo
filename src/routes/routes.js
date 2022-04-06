import { createRouter, createWebHistory } from 'vue-router'

const Route1 = { template: '<div style = "border-radius:20px;background-color:cyan;width:200px;height:50px;margin:10px;font-size:25px;padding:10px;">This is router 1</div>' }
const Route2 = { template: '<div style = "border-radius:20px;background-color:green;width:200px;height:50px;margin:10px;font-size:25px;padding:10px;">This is router 2</div>' }

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Route1
  },
  {
    path: '/about',
    name: 'About',
    component: Route2
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router;


<template>
  <header class='header-one'>
    <span class='title'>Account Balance</span>
    <img alt="pay" src="./assets/AspireLogo.svg"/>
  </header>
  <header class="header-two">
    <span class="box">S$</span>
    <span class="price">3,000</span>
    <span class='new-card-cont'>
      <img alt="pay" src="./assets/box.svg"/>
      <span class="new-card">New Card</span>
    </span>
  </header>
</template>

<script>

export default {
  name: '',
}
</script>

<style lang="scss">
</style>
