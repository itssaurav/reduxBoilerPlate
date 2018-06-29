import React,{Component} from "react";
import {connect} from 'react-redux'
import '../App.css'
import history from './history'

class Thankyou extends Component {

    render() {
        return (
            <div className="thankyou">
                <p>Success! Congratulations on Finding Falcone King Shan is mighty pleased</p>
                <p>Time Taken : {this.props.match.params.id}</p>
                <p>Planet Found : {this.props.findFalcone.planet_name}</p>
                <button onClick={()=>history.push('/')}>Start Again</button>
            </div>
        );
    }
}
function mapStateToProps(state)
{

   return {
        findFalcone:state.findingfalcone.findFalcone
    };
}
export default connect(mapStateToProps)(Thankyou);
