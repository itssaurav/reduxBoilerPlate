import React,{Component} from "react";
import {connect} from 'react-redux'


class ThirdDestination extends Component {
    constructor()
    {
        super();
        this.state={
            destination:''
        }
    }
    componentDidMount()
    {

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
                <p className="searchlabel">Destination3</p>
                <select onChange={(e)=>{this.setState({destination:e.target.value});this.props.destination3(e.target.value,3);}}>
                    <option value="">Select</option>
                    {this.props.getPlanetList.map((item,index)=>{
                        item.id = index;
                        item.from = 3;
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
export default connect(mapStateToProps)(ThirdDestination);