<template>
    <div id="app">
        <TodoHeader />
        <TodoList
            v-bind:passed-todo="$store.state.todos"
        />
    </div>
</template>

<script>
    import TodoHeader from './TodoHeader.vue'
    import TodoList from './TodoList.vue'

    export default {
        components : {
            TodoHeader,
            TodoList
        }
    }
</script>
