import React,{Component} from "react";
import {connect} from 'react-redux'


class SecondDestination extends Component {
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
                <p className="searchlabel">Destination2</p>
                <select onChange={(e)=>{this.setState({destination:e.target.value});this.props.destination2(e.target.value);}}>
                    <option value="">Select</option>
                    {this.props.getPlanetList.map((item,index)=>{
                         item.id = index;
                         item.from = 2;
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
export default connect(mapStateToProps)(SecondDestination);