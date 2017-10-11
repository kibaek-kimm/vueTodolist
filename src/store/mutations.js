import * as types from './mutation-types';

export const mutations = {
    [types.ADD_TODO](state , contents){
        state.todos.push({
            num : state.itemNumber,
            contents
        });
        state.itemNumber++;
    },
    [types.DELETE_TODO](state , index){
        state.todos.splice(index , 1);
    },
    [types.SET_SEARCHED_TODOS](state , searchedTodos){
        state.todos.splice(0,state.todos.length);
        searchedTodos.map(value => {
            state.todos.push(value);
        });
    },
    [types.SET_SEARCH_VALUE](state , value){
        state.searchValue = value;
    }
}
