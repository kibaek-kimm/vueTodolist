import * as types from './mutation-types'

export const addTodo = ({commit} , contents) => {
    commit(types.ADD_TODO , contents)
}

export const deleteTodo = ({commit} , index) => {
    commit(types.DELETE_TODO , index);
}
