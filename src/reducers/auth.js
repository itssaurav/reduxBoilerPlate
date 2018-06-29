import * as type from '../constants';

const findingFalcone = {
    planetList:'',
    vehicleList:'',
    findFalcone:'',
    token:''
 }
export function findingFalconeReducer(state = findingFalcone,action)
{

    switch(action.type)
    {
      case type.GET_PLANETS:
      state ={
          ...state,
          planetList:action.payload
      }
      break;

      case type.GET_VEHICLES:
          state ={
              ...state,
              vehicleList:action.payload
          }
      break;
        case type.FIND_FALCONE:
            state ={
                ...state,
                findFalcone:action.payload
            }
            break;
        case type.GET_TOKEN:
            state ={
                ...state,
                token:action.payload
            }
            break;
      default:

    }
    return state;
}





