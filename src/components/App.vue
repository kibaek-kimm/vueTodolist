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
    import { mapActions } from 'vuex';
    import TodoHeader from './TodoHeader.vue'
    import TodoList from './TodoList.vue'

    export default {
        data(){
            return {
                todos : []
            }
        },
        methods : mapActions([
            'setTodos'
        ]),
        components : {
            TodoHeader,
            TodoList
        },
        created(){
            this.setTodos();
            this.todos = this.$store.state.todos;
            console.log('in App.vue');
            console.log(this.todos);
        }
    }
</script>
