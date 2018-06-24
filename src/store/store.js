
import thunkMiddleware from 'redux-thunk';
import {createStore, compose, applyMiddleware, combineReducers} from 'redux';
import rootReducer from '../reducers';

import {loadState,saveState} from './localStorage.js';


const middlewares = [thunkMiddleware];
let persistedState = loadState();

// if(persistedState){
//   persistedState.form = formReducer;
// }else{
//   persistedState = {};
// }

const store = createStore(rootReducer, persistedState , compose(
    applyMiddleware(...middlewares),

  ));



store.subscribe(() => {
  saveState(store.getState())
})
export default store;
