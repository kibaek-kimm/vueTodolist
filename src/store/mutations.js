import * as types from './mutation-types';

export const mutations = {
    [types.ADD_TODO](state , title){
        console.log(state.todos);
        state.todos.push({
            id : state.itemNumber,
            title
        });
        state.itemNumber++;
    },
    [types.DELETE_TODO](state , index){
        state.todos.splice(index , 1);
    },
    [types.SET_SEARCHED_TODOS](state , searchedTodos){

    },
    [types.INIT_TODOS](state , todos){
        state.todos.splice(0, ...todos)
    },
    [types.SET_TODOS](state , todos){
        state.todos.splice(0, ...todos)
    }
}
