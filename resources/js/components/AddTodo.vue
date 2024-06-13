<template>
    <div>
      <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo" />
      <button @click="addTodo">Add</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const newTodo = ref('');
  
  const addTodo = () => {
    if (newTodo.value.trim()) {
      store.dispatch('addTodo', newTodo.value);
      newTodo.value = '';
    }
  };
  </script>
  
  <style scoped>
.add-todo {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
  </style>
  