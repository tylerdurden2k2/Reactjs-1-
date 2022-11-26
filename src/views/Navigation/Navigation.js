import React from "react";
import "./Navigation.scss";
import { Link, NavLink } from "react-router-dom";

class Navigation extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink exact={true} activeClassName="active" to="/">
                    Home
                </NavLink>
                <NavLink activeClassName="active" to="/Todo">
                    Todo
                </NavLink>
                <NavLink activeClassName="active" to="/About">
                    About
                </NavLink>
            </div>
        );
    }
}

export default Navigation;
