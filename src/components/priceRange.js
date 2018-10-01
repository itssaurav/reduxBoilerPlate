import React,{Component,Fragment} from "react";
import { Range } from 'rc-slider';
import {filterByCost,searchFlight} from '../actions/formButtonAction'
import {connect} from 'react-redux'
import 'rc-slider/assets/index.css';
import '../css/header.css'
class PriceRange extends Component {
    state = {
        volume: [0,100000]
    }
    handleOnChange = (value) => {
        this.setState({
          volume: value
        })
      }
    range(item)
    {
    const {flightDetails,flightBasicDetails} = this.props;
        if(flightBasicDetails)
        {
            flightBasicDetails.min = item[0];
            flightBasicDetails.max = item[1];
            this.props.filterByCost(flightBasicDetails,flightDetails);   
            this.setState({
                volume:item
            })
         }
         else 
         alert('Please search the flight before filter.');
 }

render() {
    const {volume} = this.state;
    return (
        <Fragment>
          <p className="marginBottom">Refine Flight Search</p>
          <Range min={0} max={100000} allowCross={false} defaultValue={[0,100000]} onChange={this.range.bind(this)}/>
          <ul className="marginTop">
              <li><span>Intitial</span>: {volume[0]}</li>
              <li><span>Final</span>:{volume[1]}</li>
          </ul>
        </Fragment>
    )
 }
}
function mapStateToProps(state) {
    return{
         flightDetails : state.eventState.flightDetails,
         flightBasicDetails : state.eventState.flightWay
     }
   }
 export default connect(mapStateToProps, {filterByCost,searchFlight})(PriceRange);
