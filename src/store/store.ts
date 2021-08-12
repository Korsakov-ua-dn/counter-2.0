import { combineReducers, createStore } from "redux"
import { counterReducer } from './counter-reducer'

const rootReducer = combineReducers({
    data: counterReducer
})
export type AppRootStateType = ReturnType<typeof rootReducer>

let preloadedState

const dataFromLocalstorage = localStorage.getItem("state")
if (dataFromLocalstorage) {

    preloadedState = JSON.parse(dataFromLocalstorage)
}

export const store = createStore(rootReducer, preloadedState)

store.subscribe(() => {
    localStorage.setItem("state", JSON.stringify(store.getState()))
})