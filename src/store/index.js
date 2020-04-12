import { createStore, combineReducers } from "redux";
import loggedUserReducer from '../reducer/loggedUserReducer';

var reducers = combineReducers({
  loggedUserReducer
});

const store = createStore(reducers);

store.subscribe(() => {});

export default store;
