import React from 'react';
import {Link} from "react-router-dom";
import logo from "../Images/logo-sbs.png";
import { ReactComponent as Back } from '../Icons/arrow-left.svg';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="header">
                {this.props.back && (
                    <Link to={this.props.back}><Back className="header__back" /></Link>
                )}
                <h1>
                    <img className="header__logo" src={logo} alt="Step by step" title="Step by step" />
                </h1>

            </div>
        );
      }
}

export default Header;
