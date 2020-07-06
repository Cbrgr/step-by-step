import React from 'react';
import {Link} from "react-router-dom";
import { ReactComponent as Profile } from '../Icons/user.svg';
import { ReactComponent as New } from '../Icons/plus.svg';
import { ReactComponent as Home } from '../Icons/home.svg';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="footer">
                <nav className="nav">
                    <div className="nav__item">
                        <Link className="nav__item-home" to="/"><Home /></Link>
                    </div>
                    <div className="nav__item">
                        <Link className="nav__item-new" to="/new"><New /></Link>
                    </div>
                    <div className="nav__item">
                        <Link className="nav__item-profile" to="/profile"><Profile /></Link>
                    </div>
                </nav>
            </div>
        );
      }
}

export default Footer;
