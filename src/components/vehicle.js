import React, {Component} from "react";

class Vehicles extends Component {
    constructor()
    {
        super();
        this.state = {
            vehiclesSelected:'',
            selectedIndex:''
        }
        this.decreaseCount=this.decreaseCount.bind(this);
    }
    componentWillReceiveProps(nextProps,nextState)
    {
        if(nextProps.vehicles)
        {
            this.setState({
                vehiclesList:nextProps.vehicles
            })
        }
    }
    shouldComponentUpdate(nextProps,nextState)
    {
        return (nextState.vehiclesSelected==='' || nextState.vehiclesSelected!==this.state.vehiclesSelected);
    }
    decreaseCount(index,item)
    {
       this.setState({
           vehiclesSelected:item.name,
           selectedIndex:index
       });
       this.props.decreaseCount(index,item);
    }

    render() {

        return (
            <div className="vehicles">
                <form className="vehicleRadioButton">
                {this.props.getVehicleData.map((item,index)=>{
                    return(
                        <React.Fragment key={index}>
                            <input type="radio" value={JSON.stringify(item)} disabled={(item.max_distance<this.props.planetData.distance) || (item.total_no<=0)} onChange={()=>{this.decreaseCount(index,item)}} checked={this.state.selectedIndex===index}/><span className="labelRadioButton">{item.name+'('+item.total_no+')'}</span><br/>
                        </React.Fragment>
                )})
                }
                </form>
            </div>

        );
    }
}

export default Vehicles;