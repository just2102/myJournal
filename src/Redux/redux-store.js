import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import articlesReducer from "./articlesReducer";
import authReducer from "./authReducer";
import writersReducer from "./writersReducer";

let reducers = combineReducers({
    articlesPage:articlesReducer,
    writersPage:writersReducer,

    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store