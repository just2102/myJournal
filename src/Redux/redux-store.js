import { combineReducers, createStore } from "redux";
import articlesReducer from "./articlesReducer";
import writersReducer from "./writersReducer";

let reducers = combineReducers({
    articlesPage:articlesReducer,
    writersPage:writersReducer,
})

let store = createStore(reducers)


export default store