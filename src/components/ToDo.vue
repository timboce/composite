<template>
    <div class="container">
        <!-- Check if both checkedTodos and uncheckedTodos arrays are empty before displaying the titles -->
        <h1 v-if="uncheckedTodos.length > 0 || checkedTodos.length > 0" class="text-center my-4">To Do List</h1>

        <todo-form @add="addTodo"></todo-form>

        <!-- Pass title as 'Unchecked' only if there are uncheckedTodos -->
        <todo-list v-if="uncheckedTodos.length > 0" :title="'Unchecked'" :todos="uncheckedTodos" @delete="deleteTodo"
            @toggle="toggleTodo"></todo-list>

        <!-- Pass title as 'Checked' only if there are checkedTodos -->
        <todo-list v-if="checkedTodos.length > 0" :title="'Checked'" :todos="checkedTodos" @delete="deleteTodo"
            @toggle="toggleTodo"></todo-list>

        <!-- Display "A ToDo lista üres" when both checkedTodos and uncheckedTodos arrays are empty -->
        <p v-if="uncheckedTodos.length === 0 && checkedTodos.length === 0" class="text-center">A ToDo lista üres</p>
    </div>
</template>

<script>
import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';

export default {
    name: 'ToDo',
    components: { TodoForm, TodoList },
    data() {
        return { todos: [] };
    },
    computed: {
        checkedTodos() {
            return this.todos.filter(todo => todo.done);
        },
        uncheckedTodos() {
            return this.todos.filter(todo => !todo.done);
        }
    },
    methods: {
        addTodo(todo) {
            this.todos.unshift(todo);
        },
        deleteTodo(todo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
        },
        toggleTodo(todo) {
            this.todos[this.todos.indexOf(todo)].done = !this.todos[this.todos.indexOf(todo)].done;
        }
    }
}
</script>

<style>
body {
    background-color: dimgray;
    color: antiquewhite;
}
</style>
