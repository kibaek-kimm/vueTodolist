<template>
    <div class="header">
        <el-input
            placeholder="할일을 입력 해주세요."
            v-model="inputedTodo"
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
    import { mapActions , mapGetters } from 'vuex'

    export default {
        props : ['passedTodos'],
        data(){
            return {
                inputedTodo : '',
                todos : []
            }
        },
        computed : mapGetters([
            'getTodos'
        ]),
        methods : Object.assign({},mapActions([
            'addTodo',
            'setSearchedTodos',
            'setTodos'
        ]),
        {
            validateTodo(){

                let isExsist = this.todos.filter(value => {
                    return value.contents == this.inputedTodo;
                });

                if(isExsist.length == 0){
                    this.addTodo(this.inputedTodo);
                    this.inputedTodo = '';
                }else{
                    alert('같은 할일이 이미 존재합니다.')
                }
            },
            handleInput(){
                let filteredTodos;

                if(this.todos.length == 0){
                    this.todos = this.$store.state.todos.slice();
                }

                if(this.inputedTodo !== ''){
                    filteredTodos = this.todos.filter( value => {
                        return value.title.includes(this.inputedTodo);
                    });
                }else{
                    filteredTodos = this.todos;
                }

                this.setTodos(filteredTodos);
            }
        }),
        created(){
            // this.todos = this.passedTodos;
            // console.log(`In created ${this.todos}`);
        }
    }
</script>
