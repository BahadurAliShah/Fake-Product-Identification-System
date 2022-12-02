import {reducers} from "./Reducers/reducers";
import {createStore} from "redux";

function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (e) {
        console.log(e);
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

const persistedState = loadFromLocalStorage();

function configureStore() {
    const store = createStore(reducers, persistedState);
    store.subscribe(() => saveToLocalStorage(store.getState()));
    return store;
}

export const store = configureStore();
