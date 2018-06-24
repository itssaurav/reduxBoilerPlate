import React,{Component} from "react";
import {connect} from 'react-redux'
import{findingFalcone} from '../actions/findingFalcone'
class Layout extends Component {
    componentDidMount()
    {
        this.props.findingFalcone();
    }
    render() {
        return (
            <div className="App">
                <p>{this.props.userType}</p>
                <h1>Saurav</h1>
            </div>
        );
    }
}
function mapStateToProps(state)
{
    return {
        userType:state.userType
    };
}
export default connect(mapStateToProps,{findingFalcone})(Layout);