export const STORAGE_KEY = 'vue-todo'

export const localStoragePlugin = store => {
    store.subscribe((mutation, state) => {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos))
    })
}
