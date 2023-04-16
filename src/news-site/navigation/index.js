import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {

    return (
    <div className="list-group">

        <Link to="/news/home" className="list-group-item">Home</Link>
        <Link to="/news/profile" className="list-group-item">Profile</Link>
        <Link to="/nyt/popular-search" className="list-group-item">NYT Popular Search</Link>
        <Link to="/nyt/general-search" className="list-group-item">NYT General Search</Link>

    </div>
);
    }
export default NavigationSidebar;