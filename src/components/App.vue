<template>
    <div id="app">
        <TodoHeader
            v-bind:search-value="$store.state.searchValue"
        />
        <TodoList
            v-bind:passed-todo="todos"
        />
    </div>
</template>

<script>
    import TodoHeader from './TodoHeader.vue'
    import TodoList from './TodoList.vue'

    export default {
        data(){
            return {
                todos : []
            }
        },
        components : {
            TodoHeader,
            TodoList
        },
        created(){
            this.todos = this.$store.state.todos;
        }
    }
</script>
