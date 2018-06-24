import {PUT_USER_TYPE} from '../constants'
export function findingFalcone()
{
    return dispatch=>{
        dispatch({
            type:PUT_USER_TYPE,
            payload:"Saurav"
        })
    }
}