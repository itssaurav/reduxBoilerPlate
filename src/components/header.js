import React,{Component} from "react";
import '../css/header.css'
class Header extends Component {
render() {
        return (
            <div className="header-wrapper padding20">
               <div className='heading'>
                    <p>Flight Search Engine</p>
                </div>
            </div>
        );
    }
}

export default Header;
