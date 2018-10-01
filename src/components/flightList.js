import React,{Component,Fragment} from "react";
import {connect} from 'react-redux'
import '../css/searchResult.css'
class FlightList extends Component {
render() {
    const {flightDetails} = this.props;
    
        return (
               <Fragment>
                {flightDetails.length?flightDetails.map((item,index)=>{
                    return(
                        <div className="flight" key={index}>
                         <div className="flight-result">
                            <p>Rs {item.return?item.returnData?item.Price + item.returnData.Price:item.Price:item.Price}</p> 
                            <div className="flightDetails">
                                <p>{item.flightNo}</p>
                                <p>{item.sourceId} > {item.DestinationId}</p>
                                <p>Depart : {item.DepartTime}</p>
                                <p>Arrive : {item.ArrivalTime}</p>
                            </div> 
                            {item.return?item.returnData?<div className="flightDetails">
                                <p>{item.returnData.flightNo}</p>
                                <p>{item.returnData.sourceId} > {item.returnData.DestinationId}</p>
                                <p>Depart : {item.returnData.DepartTime}</p>
                                <p>Arrive : {item.returnData.ArrivalTime}</p>
                            </div>:null:null}

                            </div>
                            <div className="logoDiv">
                                <div className="flightLogo">
                                <img src = "https://cdn.ek.aero/uk/english/images/WhatsOnYourFlight_BG_tcm275-2201824.jpg" alt="flight Logo"/>
                                </div>
                                <button>Book Ticket</button>
                            </div>
                       </div>
                    )
                }):<p className="noData">No Flight found</p>}
                </Fragment>
           
        );
    }
}
function mapStateToProps(state) {
  
    return{
         flightDetails : state.eventState.flightDetails
     }
   }
export default connect(mapStateToProps)(FlightList);