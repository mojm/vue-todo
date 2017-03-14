export default {
    addTodo (state) {
        const newTodo = {
            text: 'New todo',
            done: false
        }
        state.todos.push(newTodo)
        state.activeTodo = newTodo
    },
    deleteTodo (state) {
            state.todos.splice(state.todos.indexOf(state.activeTodo), 1)
            state.activeTodo = state.todos.find(todo => todo.done === false) || {text: '', done: null}
    },
    toggleTodo (state, todo) {
        todo.done = !todo.done
    },
    editTodo (state, text) {
        state.activeTodo.text = text
    },
    setActiveTodo (state, todo) {
        state.activeTodo = todo
    },
    clearCompleted (state) {
        state.activeTodo = state.todos.find(todo => todo.done === false) || {text: '', done: null}
        state.todos = state.todos.filter(todo => !todo.done)
    },
    sortTodo (state) {
        const done = state.todos.filter(todo => todo.done)
        const undo = state.todos.filter(todo => !todo.done)
        state.todos = undo.concat(done)
    }
}
