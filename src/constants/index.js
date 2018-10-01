export const CHANGETAB = 'CHANGETAB';
export const PUT_USER_TYPE = 'PUT_USER_TYPE';
export const GET_PLANETS = 'GET_PLANETS';
export const GET_VEHICLES = 'GET_VEHICLES';
export const FIND_FALCONE = 'FIND_FALCON';
export const GET_TOKEN = 'GET_TOKEN';
export const GET_FLIGHT_JSON = 'GET_FLIGHT_JSON';
export const GET_CITIES = 'GET_CITIES';
export const GETDATEANDPLACE = 'GETDATEANDPLACE';
export const BASEURL = 'https://findfalcone.herokuapp.com/';

export const CITIES = [
    {
       'cityId':'LKO',
       'cityName':'Lucknow'
    },
    {
        'cityId':'BLR',
        'cityName':'Bangalore'
     },
     {
        'cityId':'DLI',
        'cityName':'Delhi'
     },
     {
        'cityId':'HYD',
        'cityName':'Hyderbad'
     }
 ]
export const flightData = {
    "flightDetails":[
             {
                 "flightNo":"A001",
                 "airlines":"IndiGo",
                 "source":"Lucknow",
                 "sourceId":"LKO",
                 "Destination":"Bangalore",
                 "DestinationId":"BLR",
                 "Date":"22/10/2018",
                 "DepartTime":"10:00AM",
                 "ArrivalTime":"01:00PM",
                 "Price":"2000"
             },
             {
                "flightNo":"A010",
                "airlines":"IndiGo",
                "source":"Lucknow",
                "sourceId":"LKO",
                "Destination":"Bangalore",
                "DestinationId":"BLR",
                "Date":"22/10/2018",
                "DepartTime":"7:00AM",
                "ArrivalTime":"01:00PM",
                "Price":"1000"
            },
             {
                "flightNo":"A002",
                "airlines":"IndiGo",
                "source":"Bangalore",
                "sourceId":"BLR",
                "Destination":"Lucknow",
                "Date":"28/10/2018",
                "DestinationId":"LKO",
                "DepartTime":"9:00PM",
                "ArrivalTime":"01:00PM",
                "Price":"2000"
            },
            {
                "flightNo":"A003",
                "airlines":"IndiGo",
                "source":"Delhi",
                "sourceId":"DLI",
                "Destination":"Lucknow",
                "Date":"01/10/2018",
                "DestinationId":"LKO",
                "DepartTime":"9:00PM",
                "ArrivalTime":"01:00PM",
                "Price":"1000"
            },
            {
                "flightNo":"A004",
                "airlines":"IndiGo",
                "source":"Lucknow",
                "sourceId":"LKO",
                "Destination":"Delhi",
                "Date":"02/10/2018",
                "DestinationId":"DLI",
                "DepartTime":"9:00PM",
                "ArrivalTime":"01:00PM",
                "Price":"1000"
            },
            {
                "flightNo":"A005",
                "airlines":"IndiGo",
                "source":"Delhi",
                "sourceId":"DLI",
                "Destination":"Bangalore",
                "Date":"15/10/2018",
                "DestinationCode":"BLR",
                "DepartTime":"9:00PM",
                "ArrivalTime":"01:00PM",
                "Price":"1050"
            },
            {
                "flightNo":"A006",
                "airlines":"IndiGo",
                "source":"Bangalore",
                "sourceId":"BLR",
                "Destination":"Delhi",
                "Date":"20/10/2018",
                "DestinationId":"DLI",
                "DepartTime":"9:00AM",
                "ArrivalTime":"01:00AM",
                "Price":"2050"
            },
            {
                "flightNo":"A010",
                "airlines":"IndiGo",
                "source":"Lucknow",
                "sourceId":"LKO",
                "Destination":"Bangaluru",
                "Date":"28/10/2018",
                "DestinationId":"BLR",
                "DepartTime":"10:00AM",
                "ArrivalTime":"01:00PM",
                "Price":"2000"
            },
            {
               "flightNo":"A020",
               "airlines":"IndiGo",
               "source":"Bangalore",
               "sourceId":"BLR",
               "Destination":"Lucknow",
               "Date":"30/10/2018",
               "DestinationId":"LKO",
               "DepartTime":"9:00PM",
               "ArrivalTime":"01:00PM",
               "Price":"2050"
           }

        ]
    }
    

