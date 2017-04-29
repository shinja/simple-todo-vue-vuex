<template>
  <div>
    <input type="text" v-model="todo"> <span><button @click.prevent="addTodo">Add todo</button></span>
    <p v-if="pending">Saving the todo....</p>
    <h2>Todos</h2>
    <ul>
      <li v-for="todo in todos">{{ todo }}</li>
    </ul>
  </div>
</template>


<script>
/**
 * @name home page
 */
import todoEvents from '../store/events'
import { mapGetters } from 'vuex'

export default {
  name: 'todo',

  data() {
    return {
      todo: ''
    }
  },

  computed: {
    ...mapGetters([
      'todos',
      'pending'
    ])
  },

  methods: {
    addTodo() {
      if (this.todo === '') {
        return
      }

      this.$store.dispatch(todoEvents.ADD_TODO, this.todo)
    }
  },
}

</script>

<style scoped>
.page {
  padding: 50px;
}
</style>


