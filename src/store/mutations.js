import * as types from './mutation-types';

export const mutations = {
    [types.ADD_TODO](state , contents){
        state.todosOrigin.push({
            num : state.todosOrigin.length+1,
            contents
        });

        state.todos.splice(0 ,state.todos.length)
        state.todosOrigin.map(value => {
            state.todos.push(value);
        });

        console.log(state.todosOrigin);
    },
    [types.DELETE_TODO](state , index){
        state.todosOrigin.splice(index , 1);
        state.todosOrigin.map((value , index) => {
            value.num = index+1
        })
        state.todos.splice(0 ,state.todos.length)
        state.todosOrigin.map(value => {
            state.todos.push(value);
        });
    },
    [types.SET_SEARCHED_TODOS](state , searchedTodos){
        state.todos.splice(0,state.todos.length);
        searchedTodos.map(value => {
            state.todos.push(value);
        });
    }
}
