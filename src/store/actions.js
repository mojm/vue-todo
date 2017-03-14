export const addTodo = ({commit}) => {
    commit('addTodo')
    commit('sortTodo')
}

export const editTodo = ({commit}, e) => {
    commit('editTodo', e.target.value)
}

export const deleteTodo = ({commit}) => {
    commit('deleteTodo')
}

export const toggleTodo = ({commit}, todo) => {
    commit('toggleTodo', todo)
    commit('sortTodo')
}

export const setActiveTodo = ({commit}, todo) => {
    commit('setActiveTodo', todo)
}

export const clearCompleted = ({commit}) => {
    commit('clearCompleted')
}