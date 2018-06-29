import { combineReducers } from 'redux';
import {findingFalconeReducer} from './auth.js';


const appReducer = combineReducers({
    findingfalcone:findingFalconeReducer,
});

const rootReducer = (state, action) => {
    if (action.type === 'DO_LOGIN') {
        state = undefined
    }
    return appReducer(state, action)
}
export default rootReducer;
