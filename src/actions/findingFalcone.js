import {GET_PLANETS,GET_VEHICLES,FIND_FALCONE,BASEURL,GET_TOKEN} from '../constants'

import history from '../components/history'
export function getPlanets()
{
    return dispatch => fetch(BASEURL+'planets').then((response) => response.json()).then((responseJson) => {
        let planetsList = responseJson;
        planetsList.map((item)=>{
             item.selected = false
        });
        dispatch({
            payload:planetsList,
            type: GET_PLANETS
        });
    },(error)=>{
        console.log(error);
    })
        .catch((error) => {
            console.error(error);
        });


}
export function getVehicles()
{
    return dispatch => fetch(BASEURL+'vehicles').then((response) => response.json()).then((responseJson) => {
        console.log(responseJson);

        dispatch({
            payload:responseJson,
            type: GET_VEHICLES
        });
    },(error)=>{
        console.log(error);
    })
        .catch((error) => {
            console.error(error);
        });
}
export function getToken()
{

    return dispatch => fetch(BASEURL+'token', {
        method: 'POST',
        headers: {
            'Accept' : 'application/json'
        }

    }).then((response) => response.json()).then((responseJson) => {

        dispatch({
            payload:responseJson,
            type: GET_TOKEN
        });
    },(error)=>{
        console.log(error);
    })
        .catch((error) => {
            console.error(error);
        });
}
export function findFalcone(inputData,timeTaken) {

   console.log('inputData',inputData);
    return dispatch => fetch(BASEURL+'find', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
        body: JSON.stringify(inputData),

    }).then((response) => response.json()).then((responseJson) => {

        console.log("success response", responseJson);
        dispatch({
            payload: responseJson,
            type: FIND_FALCONE
        })
        if(responseJson.status==="success")
        {
            history.push('/thankyou/'+timeTaken);
        }else
        {
            alert('you didnot find the falcone');
            history.replace('/');
        }

    })
    .catch((error) => {
            console.error(error);
        });

}
