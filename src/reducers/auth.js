import * as type from '../constants';

export function userType(state = null,action)
{

    switch(action.type){
      case type.PUT_USER_TYPE:
      return action.payload;
        default:
        return state;
    }
}





