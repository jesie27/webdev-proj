import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {

    return (
    <div className="list-group">

        <Link to="/news/home" className="list-group-item">Home</Link>
        <Link to="/news/profile" className="list-group-item">Profile</Link>
        <Link to="/news/nyt/general-search" className="list-group-item">NYT General Search</Link>
        <Link to="/news/nyt/popular-search" className="list-group-item">NYT Most Popular Search</Link>

    </div>
);
    }
export default NavigationSidebar;