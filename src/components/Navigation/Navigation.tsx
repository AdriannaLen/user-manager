import React from "react";
import "./Navigation.scss";
import { Link } from "react-router-dom";

const Navigation:React.FC = () => {

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/UserForm">User Form</Link></li>
                <li><Link to="/UserList">User List</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;