/**
 * The application store
 *
 * You can probably leave this code as it is.
 *
 * The only reason you have to touch this file, is that you might want to add
 * some new plugins for your store.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import TodoModule from './todoModule'

Vue.use(Vuex)

const debug = process.env.NODE_ENV === 'development'

const plugins = [
  // Vuex Promise Middleware
  // https://github.com/MatteoGabriele/vuex-promise-middleware
  require('vuex-promise-middleware')
]

if (debug) {
  plugins.push(
    require('vuex/dist/logger')()
  )
}

export default new Vuex.Store({
  modules: {
    todo: TodoModule
  },
  // ...TodoModule, // not working
  strict: debug,
  plugins
})
