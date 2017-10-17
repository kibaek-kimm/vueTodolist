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

export const initTodos = ({commit} , contents) => {
    // fetch('https://jsonplaceholder.typicode.com/todos?userId=2',{
    fetch('https://jsonplaceholder.typicode.com/todos',{
        method : 'GET'
    })
    .then(response => response.json())
    .then(json => {
        console.log('THis is last then');
        commit(types.INIT_TODOS , json);
    });
}

export const setTodos = ({commit} , todos) => {
    commit(types.SET_TODOS , todos);
};
