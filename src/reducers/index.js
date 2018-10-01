import { combineReducers } from 'redux';
import {eventReducer} from './auth.js';


const appReducer = combineReducers({
    eventState:eventReducer,
});
export default appReducer;
