import {CHANGETAB,flightData,CITIES,GET_FLIGHT_JSON,GET_CITIES,GETDATEANDPLACE} from '../constants'

export function selectTab(selectedTab)
{
      return dispatch=>dispatch({
            payload:selectedTab,
            type: CHANGETAB
        });
}
export function storeJSON()
{
    
    return dispatch => 
        dispatch({
            payload:flightData.flightDetails,
            type: GET_FLIGHT_JSON
        });
    
}
export function getCities()
{
    return dispatch => 
        dispatch({
            payload:CITIES,
            type: GET_CITIES
        });
   
}
export function searchCities(text)
{
    
    const citiesList = CITIES.filter((item)=>{
      return item.cityName.toLowerCase().startsWith(text.toLowerCase())
    });
    return dispatch => 
        dispatch({
            payload:citiesList,
            type: GET_CITIES
        });
}
export function searchFlight(requestObj)
{
    
    let flightDataList = JSON.parse(JSON.stringify(flightData));
    let responseData = [] ;
    if(!requestObj.return)
    {
        responseData = flightDataList.flightDetails.filter((item)=>{
            item.Price = parseInt(item.Price,10)*requestObj.noOfPassenger;
            item.return = requestObj.return;
            return (item.sourceId===requestObj.sourceId && item.DestinationId===requestObj.destinationId && item.Date===requestObj.departureDate)
        })
    }
    else 
    {
        let returnData = flightDataList.flightDetails.filter((item)=>{
            item.Price = parseInt(item.Price,10)*requestObj.noOfPassenger;
            item.return = requestObj.return;
            return (item.sourceId===requestObj.destinationId && item.DestinationId===requestObj.sourceId && item.Date===requestObj.returnDate)
        })   
        responseData = flightDataList.flightDetails.filter((item,index)=>{
            item.Price = parseInt(item.Price,10)*requestObj.noOfPassenger;
            item.return = requestObj.return;
            item.returnData = returnData[index]
            return (item.sourceId===requestObj.sourceId && item.DestinationId===requestObj.destinationId && item.Date===requestObj.departureDate)
        })      
    }    
    return dispatch => {
        dispatch({
            payload:requestObj,
            type: GETDATEANDPLACE
        });
        dispatch({
            payload:responseData,
            type: GET_FLIGHT_JSON
        });
       
     }
    
}
export function clearFlightSearch()
{
    return dispatch=>
    dispatch({
        payload:[],
        type: GET_FLIGHT_JSON
    });

}
export function filterByCost(requestObj,filterData)
{  
    let responseData; 
    let flightDataList = JSON.parse(JSON.stringify(flightData.flightDetails));
    if(!requestObj.return)
    {
        responseData = flightDataList.filter((item)=>{
            return (item.sourceId===requestObj.sourceId && item.DestinationId===requestObj.destinationId && item.Date===requestObj.departureDate && (parseInt(item.Price,10)>=parseInt(requestObj.min,10) && parseInt(item.Price,10)<=parseInt(requestObj.max,10)))
        })
    }
    else 
    {
        let returnData = flightDataList.filter((item)=>{
                item.Price = parseInt(item.Price,10)*requestObj.noOfPassenger;
                return (item.sourceId===requestObj.destinationId && item.DestinationId===requestObj.sourceId && item.Date===requestObj.returnDate)
        })   
        responseData = flightDataList.filter((item,index)=>{
                item.Price = parseInt(item.Price,10)*requestObj.noOfPassenger;
                item.return = requestObj.return;
                item.returnData = returnData[index]
                let totalPrice = item.returnData?parseInt(item.Price,10)+parseInt(item.Price,10):parseInt(item.Price,10);
                return (item.sourceId===requestObj.sourceId && item.DestinationId===requestObj.destinationId && item.Date===requestObj.departureDate && item.Date===requestObj.departureDate && (totalPrice>=parseInt(requestObj.min,10) && totalPrice<=parseInt(requestObj.max,10)))
        })      
           
    }
    return dispatch => {
            
        dispatch({
            payload:responseData,
            type: GET_FLIGHT_JSON
        });
        dispatch({
            payload:requestObj,
            type: GETDATEANDPLACE
        });
  }
    
}



