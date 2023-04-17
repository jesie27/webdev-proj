import React from "react";
import {Link} from "react-router-dom";
import EditProfileComponent from "./edit-profile";
import {useDispatch, useSelector} from "react-redux";
import EditProfile from "./edit-profile";
import "../index.css"
const ProfileComponent = () => {

    const profileArray = useSelector(state => state.profile);
    console.log(profileArray);

    return (
        <div>
            <div className="mt-2"><img className="" height={300} width={600}
                                       src={require('../images/ocean.jpg')}/></div>

            <div className="wd-button mt-2">
                <a href="/news/edit-profile">
                    <button className="btn btn-primary rounded-4">Edit</button>
                </a>
            </div>
            <div className="wd-nudge-up"><img className="rounded-circle" height={150} width={150}
                src={require('../images/bridge.jpg')}/></div>
            <div className="wd-bold wd-nudge-up">{profileArray.firstName} {profileArray.lastName}</div>
            <div className="wd-gray wd-nudge-up">{profileArray.handle}</div>
            <img className="rounded-circle" height={48} src=""/>
            <div className="wd-nudge-up">{profileArray.bio}</div>
            <div className= "wd-nudge-up">
               <i className="bi bi-geo-alt"></i>
               {profileArray.location}
               <i className="bi bi-calendar-heart ps-4 pe-1"></i>
               Joined {profileArray.dateJoined}

            </div>

        </div>
    );
}
export default ProfileComponent;