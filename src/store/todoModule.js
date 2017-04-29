import events from './events'

export default {
  state: {
    pending: false,
    error: false,
    todos: []
  },

  actions: {
    [events.ADD_TODO] ({ commit }, payload) {
      commit(events.ADD_TODO, new Promise(resolve => {
        setTimeout(() => {
          resolve(payload)
        }, 1000)
      }))
    }
  },

  mutations: {
    [events.ADD_TODO] (state) {
      state.pending = true
      state.error = false
    },

    [events.ADD_TODO_FAILED] (state, error) {
      state.pending = false
      state.error = error.message || error
    },

    [events.ADD_TODO_SUCCEEDED] (state, todo) {
      state.pending = false
      state.todos.push(todo)
    }
  },

  getters: {
    todos: state => state.todos,
    pending: state => state.pending
  }
}
