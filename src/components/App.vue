<template>
    <div id="app">
        <TodoHeader
            v-bind:passed-todos="passedTodos"
        />
        <TodoList />
    </div>
</template>

<script>
    import { mapActions , mapGetters } from 'vuex';
    import TodoHeader from './TodoHeader.vue'
    import TodoList from './TodoList.vue'

    export default {
        data(){
            return {
                todos : [],
                passedTodos : []
            }
        },
        computed : mapGetters([
            'getTodos'
        ]),
        methods : mapActions([
            'initTodos'
        ]),
        components : {
            TodoHeader,
            TodoList
        },
        created(){
            this.initTodos();
            this.todos = this.getTodos;
            console.log(this.todos);
        }
    }
</script>
