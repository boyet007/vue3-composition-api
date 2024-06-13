import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    ADD_TODO (state, todo) {
      state.todos.push(todo);
    },
    REMOVE_TODO (state, todoIndex) {
      state.todos.splice(todoIndex, 1);
    },
    UPDATE_TODO (state, { index, newTodo }) {
      state.todos[index] = newTodo;
    }
  },
  actions: {
    addTodo ({ commit }, todo) {
      commit('ADD_TODO', todo);
    },
    removeTodo ({ commit }, todoIndex) {
      commit('REMOVE_TODO', todoIndex);
    },
    updateTodo ({ commit }, payload) {
      commit('UPDATE_TODO', payload);
    }
  },
  getters: {
    getTodos: state => state.todos
  }
});
