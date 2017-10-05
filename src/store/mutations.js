import * as types from './mutation-types';

export const mutations = {
    [types.ADD_TODO](state , contents){
        state.todos.push({
            num : state.todos.length+1,
            contents
        })
    },
    [types.DELETE_TODO](state , index){
        state.todos.splice(index , 1);
    }
}
