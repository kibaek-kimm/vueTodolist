<template>
    <el-table
        v-bind:data="todos"
        style="width: 100%">
    >
        <el-table-column
            prop="id"
            label="순서"
            width="80"
            current-row-key>
        </el-table-column>

        <el-table-column
            prop="title"
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
    import { mapActions , mapGetters } from 'vuex'

    export default {
        computed : mapGetters([
            'getTodos'
        ]),
        data(){
            return {
                todos : []
            }
        },
        methods :mapActions(['deleteTodo']),
        created(){
            this.todos = this.getTodos;
        },
    }
</script>
