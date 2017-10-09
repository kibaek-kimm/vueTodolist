<template>
    <div class="header">
        <el-input
            placeholder="할일을 입력 해주세요."
            v-model="todoData"
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
        data(){
            return {
                todoData : ''
            }
        },
        methods : Object.assign({},mapActions([
            'addTodo',
            'setSearchedTodos'
        ]),
        {
            validateTodo(){
                let isExsist = this.$store.state.todosOrigin.filter(value => {
                    return value.contents == this.todoData;
                });

                if(isExsist.length == 0){
                    this.addTodo(this.todoData);
                    this.todoData = '';
                }else{
                    alert('같은 할일이 이미 존재합니다.')
                }
            },
            handleInput(){
                const searchedTodos = [];
                this.$store.state.todosOrigin.map( value => {
                    if(value.contents.includes(this.todoData)){
                        searchedTodos.push(value);
                    }
                });

                this.setSearchedTodos(searchedTodos);
            }
        })
    }
</script>
