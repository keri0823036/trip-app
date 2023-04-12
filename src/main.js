import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from '@/routes/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { getSchedule, getSpots, getInfo } from '@/api/getSheetData'

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
    spots: [],
    info: {}
  },
  getters: {
    schedule: (state) => state.schedule,
    spots: (state) => state.spots,
    info: (state) => state.info
  },
  mutations: {
    setSchedule (state, schedule) {
      state.schedule = schedule
    },
    setSpots (state, spots) {
      state.spots = spots
    },
    setInfo (state, info) {
      state.info = info
    }
  },
  actions: {
    async getScheduleData({ commit }) {
      const schedule = await getSchedule()
      await commit("setSchedule", schedule)
    },
    async getSpotsData({ commit }) {
      const spots = await getSpots()
      await commit("setSpots", spots)
    },
    async getInfoData({ commit }) {
      const info = await getInfo()
      await commit("setInfo", info)
    },
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#main')


