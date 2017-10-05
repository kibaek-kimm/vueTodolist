<template>
    <div id="app">
        <Header />
        <TodoList
            v-bind:passed-todo="$store.state.todos"
        />
    </div>
</template>

<script>
    import Header from './Header.vue'
    import TodoList from './TodoList.vue'

    export default {
        components : {
            Header,
            TodoList
        }
    }
</script>
