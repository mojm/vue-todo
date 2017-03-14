import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import * as actions from './actions.js'
import { STORAGE_KEY, localStoragePlugin } from './plugins.js'

const state = {
	todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]'),
	activeTodo: {
        text: '',
        done: false
    }
}

const getters = {
    todos: state => state.todos,
    activeTodo: state => state.activeTodo
}
Vue.use(Vuex)

export default new Vuex.Store({
	state,
    getters,
	mutations,
    actions,
    plugins: [localStoragePlugin]
})

