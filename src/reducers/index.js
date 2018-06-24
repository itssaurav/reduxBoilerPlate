import { combineReducers } from 'redux';
import {userType} from './auth.js';


const appReducer = combineReducers({
    userType:userType,
});

const rootReducer = (state, action) => {
    if (action.type === 'DO_LOGIN') {
        state = undefined
    }
    return appReducer(state, action)
}
export default rootReducer;
