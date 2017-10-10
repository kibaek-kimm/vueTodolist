import * as types from './mutation-types'

export const addTodo = async ({commit} , contents) => {
    const result = await commit(types.ADD_TODO , contents);
    return result;
}

export const deleteTodo = async ({commit} , index) => {
    const result = await commit(types.DELETE_TODO , index);
    return result;
}

export const setSearchedTodos = ({commit} , searchedTodos) => {
    if(searchedTodos.length > 0){
        commit(types.SET_SEARCHED_TODOS , searchedTodos);
    }
}
