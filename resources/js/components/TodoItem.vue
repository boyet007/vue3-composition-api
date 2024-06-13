<template>
    <li>
      <div v-if="!isEditing">
        {{ todo }}
        <button @click="isEditing = true">Edit</button>
        <button @click="removeTodo">Remove</button>
      </div>
      <div v-else>
        <input v-model="updatedTodo" @keyup.enter="saveTodo" />
        <button @click="saveTodo">Save</button>
        <button @click="cancelEdit">Cancel</button>
      </div>
    </li>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  import { defineProps } from 'vue';
  
  const props = defineProps({
    todo: String,
    index: Number
  });
  
  const store = useStore();
  const isEditing = ref(false);
  const updatedTodo = ref(props.todo);
  
  const removeTodo = () => {
    store.dispatch('removeTodo', props.index);
  };
  
  const saveTodo = () => {
    if (updatedTodo.value.trim()) {
      store.dispatch('updateTodo', { index: props.index, newTodo: updatedTodo.value });
      isEditing.value = false;
    }
  };
  
  const cancelEdit = () => {
    updatedTodo.value = props.todo;
    isEditing.value = false;
  };
  </script>
  
  <style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.edit-todo {
  display: flex;
  gap: 10px;
}
  </style>
  