<template>
    <div class="header">
        <el-input
            placeholder="할일을 입력 해주세요."
            v-model="searchValue"
            v-on:change="handleInput"
        ></el-input>
        <el-button
            type="primary"
            v-on:click="validateTodo"
        >
            추가하기
        </el-button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        props : ['passedSearchValue'],
        data(){
            return {
                searchValue : ''
            }
        },
        methods : Object.assign({},mapActions([
            'addTodo',
            'setSearchedTodos',
            'setSearchValue'
        ]),
        {
            validateTodo(){
                let isExsist = this.todos.filter(value => {
                    return value.contents == this.searchValue;
                });

                if(isExsist.length == 0){
                    this.addTodo(this.searchValue);
                    this.searchValue = '';
                    this.setSearchValue('');
                }else{
                    alert('같은 할일이 이미 존재합니다.')
                }
            },
            handleInput(){
                const searchedTodos = [];
                // this.$store.state.todos.map( value => {
                //     if(value.contents.includes(this.todoData)){
                //         searchedTodos.push(value);
                //     }
                // });
                this.setSearchValue(this.searchValue);
            }
        }),
        created(){
            this.todos = this.$store.state.todos;
            this.searchValue = this.passedSearchValue;
        }
    }
</script>
