<template>
  <div id="app" class="container p-5">
    <h4> Ajouter une Todo </h4>
    <hr class="my-4" />
    <div class="d-flex mb-4">
        <input v-model="todo" type="text" class="form-control mr-5" />
        <button @click="addTodo({ name: todo, done: false})" class="btn btn-primary"> Ajouter </button>
        <button @click="asyncAddTodo({ name: todo, done: false})" class="btn btn-danger"> Ajouter Async </button>
    </div>
    <div class="card">
        <div class="card-header d-flex flex-row justify-content-between align-items-center">
           <span>Todo List </span>
           <span> {{ todosLength }} </span>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li @click="toggleTodo(index)" v-for="(todo, index) in todos" :key="todo.name" class="list-group-item d-flex d-flex-row justify-content-between align-items-center">
                    <span> {{ todo.name }} </span>
                    <span>
                        <input class="mx-3" type="checkbox" :checked="todo.done" />
                        <button @click="deleteTodo(index)" class="btn btn-sm btn-danger"> Delete </button>
                    </span>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';
import { mapState } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      todo: ''
    }
  },
  computed: {
    ...mapState('todos', [
      'todos'
    ]),
    ...mapGetters('todos', [
      'todosLength'
    ])
  },
  methods: {
    ...mapMutations('todos', [
      'addTodo',
      'toggleTodo',
      'deleteTodo'
    ]),
    ...mapActions('todos', [
      'asyncAddTodo'
    ]),
  }
}
</script>

<style>
#app {
}
</style>
