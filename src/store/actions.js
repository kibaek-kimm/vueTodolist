import * as types from './mutation-types'

export const addTodo = ({commit} , contents) => {
    commit(types.ADD_TODO , contents);
}

export const deleteTodo = ({commit} , index) => {
    commit(types.DELETE_TODO , index);
}

export const setSearchedTodos = ({commit} , searchedTodos) => {
    if(searchedTodos.length > 0){
        commit(types.SET_SEARCHED_TODOS , searchedTodos);
    }
}

export const initTodos = async ({commit} , contents) => {
    const json = await fetch('https://jsonplaceholder.typicode.com/todos',{
        method : 'GET'
    })
    .then(response => response.json());
    commit(types.INIT_TODOS , json);
}

export const setTodos = ({commit} , todos) => {
    commit(types.SET_TODOS , todos);
};
