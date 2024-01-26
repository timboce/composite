<template>
    <!-- Todo input form -->
    <form class="input-group mb-3" @submit.prevent="submitTodo">
        <!-- Input field for entering a new task -->
        <input type="text" class="form-control" placeholder="Enter a task" v-model="todo">
        <!-- Button to add the task -->
        <button class="btn btn-primary" type="submit">Új elem</button>
    </form>
</template>

<script>
export default {
    name: 'TodoForm', // Component name
    data() {
        // Local data property to store the new todo
        return {
            todo: ''
        };
    },
    methods: {
        // Method to handle todo submission
        submitTodo() {
            // Check if todo is not empty
            if (this.todo) {
                // Emit 'add' event with the new todo object
                this.$emit('add', { text: this.todo, done: false });
                // Clear the input field after adding todo
                this.todo = '';
            }
        }
    }
}
</script>
