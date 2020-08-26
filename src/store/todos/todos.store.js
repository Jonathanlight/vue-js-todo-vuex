import todosMutations from '../todos/todos.mutations'
import todosActions from '../todos/todos.actions'
import todosGetters from '../todos/todos.getters'

export default {
  namespaced: true,
  state: {
    todos: [
      {
        name: 'Eat to pizza',
        done: false
      },
      {
        name: 'Work with Paul',
        done: false
      }
    ]
  },
  getters: todosGetters,
  mutations: todosMutations,
  actions: todosActions
}
