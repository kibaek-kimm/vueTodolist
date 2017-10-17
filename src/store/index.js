import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import { mutations } from './mutations'


Vue.use(Vuex);

const state = {
    todos : [],
    itemNumber : 1
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});
