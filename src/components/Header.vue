<template lang="html">
    <div class="header">
        <el-input placeholder="할일을 입력 해주세요." v-model="todoData"></el-input>
        <el-button
            type="primary"
            v-on:click="addTodo(todoData)"
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
        methods : mapActions([
            'addTodo'
        ])
    }
</script>
