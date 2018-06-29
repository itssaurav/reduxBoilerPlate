import React,{Component} from "react";
import {connect} from 'react-redux'
import{getPlanets,getVehicles,getToken,findFalcone} from '../actions/findingFalcone'
import FirstDestination from './firstDestination';

import SecondDestination from './secondDestination';
import ThirdDestination from './thirdDestination';
import FourthDestination from './fourthDestination';
import Vehicle from './vehicle'
let timeTaken = [];
class Layout extends Component {
    constructor()
    {

        super();
        this.state={
            destination1:'',
            destination2:'',
            destination3:'',
            destination4:'',
            selected:'',
            timeTaken:0,
            vehiclesList:[],
            planets:[]
        }
        this.planets = [];
        this.vehicles = [];
        this.timeTaken = [];
        this.selectDistination1=this.selectDistination1.bind(this);
        this.selectDistination2=this.selectDistination2.bind(this);
        this.selectDistination3=this.selectDistination3.bind(this);
        this.selectDistination4=this.selectDistination4.bind(this);
        this.decreaseCount=this.decreaseCount.bind(this);
    }

    selectDistination1(value,id)
    {
        let selectedDestination = this.state.planets;
        this.planets.push(JSON.parse(value));
            selectedDestination[JSON.parse(value).id].selected = true;
            this.setState({
                destination1: JSON.parse(value),
                planets: selectedDestination,
                selected: JSON.parse(value).distance
            })

    }
    selectDistination2(value,id)
    {
        let selectedDestination = this.state.planets;
        // if(selectedDestination.length>0)
        // {
        //     selectedDestination.map((item,index)=>{
        //         if(item.from===JSON.parse(value).from)
        //         {
        //             item.selected = true
        //         }
        //         else
        //         {
        //             item.selected = false
        //         }
        //     })
        //
        // }
        // selectedDestination[JSON.parse(value).id].selected = true;
        // this.setState({
        //     destination1: JSON.parse(value),
        //     planets: selectedDestination,
        //     selected: JSON.parse(value).distance
        // })
        this.planets.push(JSON.parse(value));
        selectedDestination[JSON.parse(value).id].selected = true;
        this.setState({
            destination2: JSON.parse(value),
            planets: selectedDestination,
            selected: JSON.parse(value).distance
        })
    }
    selectDistination3(value,id)
    {
        let selectedDestination = this.state.planets;
        // if(selectedDestination.length>0)
        // {
        //     selectedDestination.map((item,index)=>{
        //         if(item.from===JSON.parse(value).from)
        //         {
        //             item.selected = true
        //         }
        //         else
        //         {
        //             item.selected = false
        //         }
        //     })
        //
        // }
        this.planets.push(JSON.parse(value));
        selectedDestination[JSON.parse(value).id].selected = true;
        this.setState({
            destination3: JSON.parse(value),
            planets: selectedDestination,
            selected: JSON.parse(value).distance
        })
    }
    selectDistination4(value,id)
    {
        let selectedDestination = this.state.planets;
        console.log('Datais notPerfect',this.state.planets,id);
        this.planets.push(JSON.parse(value));
        selectedDestination[JSON.parse(value).id].selected = true;
        this.setState({
            destination4: JSON.parse(value),
            planets: selectedDestination,
            selected: JSON.parse(value).distance
        })
    }
    componentDidMount()
    {
      this.props.getPlanets();
      this.props.getVehicles();
      this.props.getToken();
    }
    decreaseCount(index,item)
    {
        this.vehicles.push(item.name);
        this.timeTaken.push(this.state.selected/item.speed);
        let sumTimeTaken = this.timeTaken.reduce((a, b) => a + b, 0);
        let vehiclesList = this.state.vehiclesList;
        vehiclesList[index].total_no = vehiclesList[index].total_no-1;
        this.setState({
            vehiclesList:vehiclesList,
            timeTaken:sumTimeTaken
      });
    }
    componentWillReceiveProps(nextProps)
    {

        if(nextProps.gettingPlanets)
        {
          this.setState({
              planets:nextProps.gettingPlanets
          })
        }
        if(nextProps.vehicles)
        {
            this.setState({
                vehiclesList:nextProps.vehicles
            })
        }
    }
    findFalcone()
    {

        let apiPlanetData = [];
        this.planets.map((item)=>{
            apiPlanetData.push(item.name);
        });
        console.log('apiPlanetData',apiPlanetData);
       let apiData = {
           "token": this.props.token.token,
           "planet_names": apiPlanetData,
           "vehicle_names": this.vehicles
        };
        this.props.findFalcone(apiData,this.state.timeTaken);
    }
    render() {
         console.log('What is it',this.planets,this.state.planets);
        return (
            <div>
                   <div className="content-wrapper">
                       <p>Select planets you want to search in : </p>
                       <div className="displayInline">
                            <FirstDestination getPlanetList={this.state.planets} destination1={(value,id)=>this.selectDistination1(value,id)}/>
                           {this.state.destination1?<Vehicle getVehicleData = {this.state.vehiclesList} planetData={this.state.destination1} decreaseCount={(index,item)=>this.decreaseCount(index,item)}/>:null}
                       </div>
                       <div className="displayInline">
                           <SecondDestination getPlanetList={this.state.planets} destination2={(value,id)=>this.selectDistination2(value,id)}/>
                           {this.state.destination2?<Vehicle getVehicleData = {this.state.vehiclesList} planetData={this.state.destination2} decreaseCount={(index,item)=>this.decreaseCount(index,item)}/>:null}
                       </div>
                       <div className="displayInline">
                           <ThirdDestination getPlanetList={this.state.planets} destination3={(value,id)=>this.selectDistination3(value,id)}/>
                           {this.state.destination3?<Vehicle getVehicleData = {this.state.vehiclesList} planetData={this.state.destination3} decreaseCount={(index,item)=>this.decreaseCount(index,item)}/>:null}
                       </div>
                       <div className="displayInline">
                           <FourthDestination getPlanetList={this.state.planets} destination4={(value,id)=>this.selectDistination4(value,id)}/>
                           {this.state.destination4?<Vehicle getVehicleData = {this.state.vehiclesList} planetData={this.state.destination4} decreaseCount={(index,item)=>this.decreaseCount(index,item)}/>:null}
                       </div>
                        <div className="displayInline">
                            <h3>Time Taken : {this.state.timeTaken}</h3>
                        </div>
                   </div>
                  <button onClick={this.findFalcone.bind(this)}>Find Falcone</button>
            </div>
        );
    }
}
function mapStateToProps(state)
{
    return {
          gettingPlanets:state.findingfalcone.planetList,
          vehicles:state.findingfalcone.vehicleList,
          token:state.findingfalcone.token,
    };
}
export default connect(mapStateToProps,{getPlanets,getVehicles,getToken,findFalcone})(Layout);