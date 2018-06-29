import React,{Component} from "react";
import {connect} from 'react-redux'


class FourthDestination extends Component {
    constructor()
    {
        super();
        this.state={
            destination:''
        }
    }
    shouldComponentUpdate(nextProps,nextState)
    {
        if(nextState.destination!=='')
        {
            console.log('true');
            return false
        }
        else
        {
            console.log('false');
            return true
        }
    }
    render() {
        return (
            <React.Fragment>
                <p className="searchlabel">Destination4</p>
                <select onChange={(e)=>{this.setState({destination:e.target.value});this.props.destination4(e.target.value,4);}}>
                    <option value="">Select</option>
                    {this.props.getPlanetList.map((item,index)=>{
                        item.id = index;
                        item.from = 4;
                        return(
                            <React.Fragment>
                                {item.selected?null:<option key={index} value={JSON.stringify(item)}>{item.name}</option>}
                            </React.Fragment>
                        )})}
                 </select>
            </React.Fragment>

        );
    }
}
function mapStateToProps(state)
{
    return {
        userType:state.userType
    };
}
export default connect(mapStateToProps)(FourthDestination);