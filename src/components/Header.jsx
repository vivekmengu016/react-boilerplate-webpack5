import React from "react";
import { Link } from "react-router-dom";

const Header = ({ setUser }) => {

    const logout = (e) => {
        e.preventDefault();
        setUser(null);
    }

    return(
        <div className="header">
            <div className="header-logo">
                <h3 className="logo">React &bull; Boilerplate &bull; Webpack5</h3>
            </div>
            <div className="header-menu">
                <ul className="menu">
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/products"> Products </Link></li>
                    <li><Link to="/products/bags"> Bags </Link></li>
                    <li><span className="icon" onClick={logout} ><ion-icon name="lock-open"></ion-icon></span></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;