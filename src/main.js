import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Vue from 'vue'

import AddCard from './components/organisms/AddCard/AddCard'
import Home from './components/organisms/Home/Home'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/add-card', component: AddCard, name: 'add-card' }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})

export const store = new Vuex.Store({
  state: {
    currentBalance: 3000,
    cardDetails: [
      {
        name: 'rakesh',
        cvv: 123,
        number: '123456789012',
        expDate: '12/26'
      },
      {
        name: 'rakesh1234',
        cvv: 645,
        number: '904894839839',
        expDate: '10/28'
      }
    ],
    recentTransactions: [
      {
        cost: 120,
        to: 'Hamleys',
        date: '20-May-2020',
        img: 'file-storage'
      },
      {
        cost: 10,
        to: 'Hamleys',
        date: '20-May-2020',
        img: 'flights'
      },
      {
        cost: 1320,
        to: 'Hamleys',
        date: '20-May-2020',
        img: 'megaphone'
      }
    ]
  },
  mutations: {
    addCard (state, cardDetails) {
      state.cardDetails.push(cardDetails)
    }
  }
})

new Vue({
  render: h => h(App),
  store: store,
  router: router
}).$mount('#app')
