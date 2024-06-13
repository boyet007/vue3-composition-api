<template>
    <div>
        <ul>
            <TodoItem
                v-for="(todo, index) in todos"
                :key="index"
                :todo="todo"
                :index="index"
            />
        </ul>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import TodoItem from "./TodoItem.vue";

const store = useStore();
const todos = computed(() => store.getters.getTodos);
</script>
