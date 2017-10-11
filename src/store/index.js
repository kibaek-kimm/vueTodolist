import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import { mutations } from './mutations'

Vue.use(Vuex);

const state = {
    todos : [],
    searchValue : '',
    itemNumber : 1
};

export default new Vuex.Store({
    state,
    mutations,
    actions
});
