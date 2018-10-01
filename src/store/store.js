
import thunkMiddleware from 'redux-thunk';
import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
const middlewares = [thunkMiddleware];

const store = createStore(rootReducer , compose(
    applyMiddleware(...middlewares),
  ));

export default store;
