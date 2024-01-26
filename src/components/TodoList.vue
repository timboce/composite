<template>
    <div>
        <!-- Check if todos array is not empty before displaying the title -->
        <h2 v-if="todos.length > 0" class="text-center my-2">{{ title }}</h2>

        <!-- Check if todos array is not empty -->
        <ul v-if="todos.length" class="list-group">
            <!-- Loop through each todo item -->
            <li v-for="(todo, index) of todos" :key="todo.text" class="list-group-item">
                <!-- Your existing todo item structure -->
                <input type="checkbox" class="form-check-input me-2" :checked="todo.done" @change="toggleTodo(todo)">
                <span :class="{ 'text-decoration-line-through': todo.done }">{{ todo.text }}</span>
                <button class="btn btn-transparent-primary btn-sm float-end" @click="deleteTodo(todo)">
                    Törlés
                </button>
            </li>
        </ul>

        <!-- Display a message when todos array is empty -->
        <p v-else class="text-center">A ToDo lista üres</p>
    </div>
</template>

<script>
export default {
    name: 'TodoList', // Component name
    props: {
        title: String, // Prop to receive the list title from the parent component
        todos: Array // Prop to receive the list from the parent component 
    },
    methods: {
        // Method to emit 'delete' event when deleting a todo
        deleteTodo(todo) {
            this.$emit('delete', todo);
        },
        // Method to emit 'toggle' event when toggling todo status
        toggleTodo(todo) {
            this.$emit('toggle', todo);
        }
    }
}
</script>
