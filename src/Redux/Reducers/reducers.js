import {combineReducers} from "redux";
import {LoaderReducer} from "./loaderReducers";
import {ThemeReducer} from "./themeReducers";
import {Web3Reducer} from "./web3Reducer";

export const reducers = combineReducers({
    loader: LoaderReducer,
    theme: ThemeReducer,
    web3: Web3Reducer
})
