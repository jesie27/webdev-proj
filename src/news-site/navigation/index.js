import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {useSelector} from "react-redux";

const NavigationSidebar = () => {
    const currentUser = useSelector((state) => state.users);
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
    <div className="list-group">

        <Link to="/news/home" className={`list-group-item
            ${active==='home' ? 'active':''}`}>
            Home</Link>

        {currentUser &&
            <Link to="/news/profile" className={`list-group-item             
        ${active === 'profile' ? 'active' : ''}`}>
            Profile</Link>  }


        {currentUser && (
            <Link to="/news/login" className={`list-group-item             
        ${active === 'login' ? 'active' : ''}`}>
                Login</Link>)}


        {currentUser &&
            (
                    <><Link to="/news/register" className={`list-group-item             
            ${active === 'register' ? 'active' : ''}`}>
                    Register</Link></>)
        }



        <Link to="/news/general-search" className={`list-group-item
         ${active === 'general-search' ? 'active' : ''}`}>
        NYT General Search</Link>
        <Link to="/news/popular-search" className={`list-group-item
         ${active === 'popular-search' ? 'active' : ''}`}>
        NYT Most Popular Search</Link>

    </div>
);
    }
export default NavigationSidebar;