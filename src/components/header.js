import React,{Component} from "react";
import '../App.css'
class Header extends Component {


    render() {
        return (
            <div>
               <p className="header">
                   <span>reset</span> | <span>Greek Trust Home</span>
               </p>
                <div className='heading'>
                    <h1>Finding Falcone !</h1>
                </div>
            </div>
        );
    }
}

export default Header;