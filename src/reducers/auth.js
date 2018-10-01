import * as type from '../constants';

const initialState = {
    selectedTab:false,
    citiesList:[],
    flightDetails:[],
    flightWay:'',
    token:''
 }
export function eventReducer(state = initialState,action)
{

    switch(action.type)
    {
      case type.CHANGETAB:
      state ={
          ...state,
          selectedTab:action.payload
      }
      break;

      case type.GET_CITIES:
          state ={
              ...state,
              citiesList:action.payload
          }
      break;
        case type.GET_FLIGHT_JSON:
            state ={
                ...state,
                flightDetails:action.payload
            }
            break;
        case type.GETDATEANDPLACE:
            state ={
                ...state,
                flightWay:action.payload
            }
            break;    
       
      default:

    }
    return state;
}





