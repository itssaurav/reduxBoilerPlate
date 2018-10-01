import React,{Component} from "react";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import PriceRange from './priceRange'
import {selectTab,storeJSON,getCities,searchCities,searchFlight,clearFlightSearch} from '../actions/formButtonAction'
import {connect} from 'react-redux'
import 'react-datepicker/dist/react-datepicker.css';
import '../css/sideBar.css'
class SideBar extends Component {
  state = {
    departureDate: '',
    returnDate:'',
    source:'',
    destination:'',
    focus:'',
    validation:false
  }
  componentDidMount()
  {
    this.props.storeJSON();
    this.props.getCities();
  }
  onChange = (date,placeholder) => {
    if(placeholder==="Departure Date")
    {
      this.setState({ departureDate:date })
    }
    else 
    {
      this.setState({ returnDate:date})
    }
    
  }
  selectInput = (event)=>{
       this.props.searchCities(event.target.value);
       this.setState({
         [event.target.name]:event.target.value
       })
  }
  buttonClick = selectTab => {
    let selected;
    switch(selectTab)
    {
      case 'One Way':
        selected = false;
        this.props.selectTab(selected);
      break;

      case 'Return':
        selected = true;
        this.props.selectTab(selected);
      break;
        case 'Search':
          this.submitForm()
        break;

      default:

    }
  }
  submitForm()
  {
    
    const {departureDate,returnDate,sourceId,destinationId,noOfPassenger,source,destination} = this.state;
    let condition;
    let requestObj={
      'departureDate':departureDate.format('DD/MM/YYYY'),
      'sourceId':sourceId,
      'source':source,
      'destination':destination,
      'destinationId':destinationId,
      'noOfPassenger':noOfPassenger,
      'return':this.props.formTab
    };
    this.props.clearFlightSearch();
    if(this.props.formTab)
    {
     condition = departureDate && returnDate && sourceId && destinationId && noOfPassenger;
     requestObj.returnDate = returnDate.format('DD/MM/YYYY');
    }
    else
    condition = departureDate && sourceId && destinationId && noOfPassenger;
  
    if(condition)
    {
      if(sourceId!==destinationId)
      {
        this.props.searchFlight(requestObj)
        this.setState({
          validation:false
        })
      }
      else 
      {
        alert('Source and Destination can be same');
      }
    }
    else 
    {
      this.setState({
        validation:true
      })
    }
  }
  selectCity(name,item)
  {
    this.setState({
      [name]:item.cityName,
      [name+'Id']:item.cityId,
      'focus':''
    })
  }
  selectOtion(e)
  {
    this.setState({
      [e.target.name]:e.target.value
    })
    
  }

render() {
  const {citiesList} = this.props;
  
    const calenderInput = (departureDate,minDate,placeholder)=>{
      return(
        <div className="input-form">
        <DatePicker
            dateFormat="DD/MM/YYYY"
            selected={departureDate}
            onChange={(departureDate)=>this.onChange(departureDate,placeholder)}
            minDate={minDate}
            placeholderText={placeholder}
          />
       </div>
      )
    }
    const inputSearchRender = (type,name,placeholder,data,className,value)=>{
      return(
        <div className="input-form">
        <input list="dataList" name={name} placeholder={placeholder} value={value} onFocus={()=>{this.setState({'focus':name})}} onChange={(value)=>this.selectInput(value)}/>
          {this.state.focus===name?<ul className={className}>
           {data.map((item,index)=>{
             return(
              <option key={index} value={item.cityId} onClick={()=>{this.selectCity(name,item)}}>{item.cityName}</option>
              )
            })
          }
          </ul>:null}
        </div>
      )
   }
   const selectInput = (name,list)=>{
     return (
       <div  className="input-form">
       <select name={name} onChange={(e)=>{this.selectOtion(e)}}>
         <option value="">Passenger</option>
         {list.map((item,index)=>{
             return(
                <option key={index} value={item}>{item}</option>
              )
            })
          }
        </select>
        </div>
     )
   }
   const button = (type,text)=>{
     return(
      <button type={type} onClick={()=>this.buttonClick(text)}>{text}</button>
     )
   }

        return (
            <div className="side-wrapper padding20">
                <div className='side-wrapperHeader'>
                    <div className="side-wrapperButton oneWayTrip">
                       {button('button','One Way')}
                    </div>
                    <div className="side-wrapperButton roundTrip">
                    {button('button','Return')}
                    </div>
                </div>
                <div className="side-wrapperForm">
                    {this.state.validation?<p className="error">* All the fields are required</p>:null}
                    {inputSearchRender('text','source','Enter origin city',citiesList,'search originCity',this.state.source)}
                    {inputSearchRender('text','destination','Enter destination city',citiesList,'search destinationCity',this.state.destination)}
                    {calenderInput(this.state.departureDate,moment(),"Departure Date")}
                    {this.props.formTab?calenderInput(this.state.returnDate,moment(this.state.departureDate),"Return Date"):null}
                    {selectInput("noOfPassenger",[1,2,3,4,5])}
                    {button('button','Search')}
                </div>
                <div className="rangeSlider">
                   <PriceRange/>
                </div>
                
            </div>
        );
    }
}
function mapStateToProps(state) {
 return{
      formTab : state.eventState.selectedTab,
      citiesList : state.eventState.citiesList
  }
}
export default connect(mapStateToProps, {selectTab,storeJSON,getCities,searchCities,searchFlight,clearFlightSearch})(SideBar);
