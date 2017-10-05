<template>
    <el-table
        v-bind:data="todoData"
        style="width: 100%"
        v-bind:row-class-name="tableRowClassName">
    >
        <el-table-column
            prop="num"
            label="순서"
            width="80"
            current-row-key>
        </el-table-column>

        <el-table-column
            prop="contents"
            label="할일">
        </el-table-column>
        <el-table-column
            width="120"
            label="기능">
            <template scope="scope">
                <el-button
                    v-on:click="deleteTodo(scope.$index)"
                >삭제
                </el-button>
            </template>

        </el-table-column>
    </el-table>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        props : ['passedTodo'],
        data(){
            return {
                todoData : []
            }
        },
        methods : Object.assign({},
        mapActions(['deleteTodo']),
        {
            tableRowClassName(){

            }
        }),
        created(){
            this.todoData = this.passedTodo
        }
    }
</script>
