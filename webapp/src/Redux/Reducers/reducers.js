import {combineReducers} from "redux";
import {LoaderReducer} from "./loaderReducers";
import {ThemeReducer} from "./themeReducers";

export const reducers = combineReducers({
    loader: LoaderReducer,
    theme: ThemeReducer,
})
