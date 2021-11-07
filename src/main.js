import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from '@/routes/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { getSchedule, getSpots } from '@/api/getSheetData'

import './style/main.scss'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes
})

const store = new Vuex.Store({
  state: {
    schedule: {},
    spots: []
  },
  mutations: {
    updateSchedule (state, schedule) {
      state.schedule = schedule
    },
    updateSpots (state, spots) {
      state.spots = spots
    }
  },
  actions: {
    async getScheduleData({ commit }) {
      const schedule = await getSchedule()
      await commit("updateSchedule", schedule)
    },
    async getSpotsData({ commit }) {
      const spots = await getSpots()
      await commit("updateSpots", spots)
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#main')


