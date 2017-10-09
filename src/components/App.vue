<template>
    <div id="app">
        <TodoHeader />
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
            console.log(this.todos);
        }
    }
</script>
