import React,{Component} from "react";
import {connect} from 'react-redux'
import '../css/searchResult.css'
import FlightList from './flightList'
class SearchResult extends Component {
render() {
      const {flightBasicDetails} = this.props;
      return (
            <div className="result-wapper borderTop0 borderRight0">
              {flightBasicDetails?<div>
               <div className='result-wapper-heading'>
                    <ul>
                        <li><p>{flightBasicDetails.source} > {flightBasicDetails.destination} {flightBasicDetails.return?' > '+ flightBasicDetails.source:null}</p></li>
                        <li>
                            <p>Depart : {flightBasicDetails.departureDate}</p>
                            {flightBasicDetails.return?<p>Return : {flightBasicDetails.returnDate}</p>:null}
                        </li>
                    </ul>
                </div>
                <FlightList/>
                </div>:<div className="noData"><p>Search the data</p></div>}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return{
         flightBasicDetails : state.eventState.flightWay,
     }
   }
export default connect(mapStateToProps)(SearchResult);
