import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "../index.css"
const ProfileComponent = () => {
    const {user} = useSelector((state) => state.profile)
    const [profile, setProfile] = useState(user);

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
                src={(require('../images/bridge.jpg'))}/></div>
            <div className="wd-bold wd-nudge-up">{profile.firstName} {profile.lastName}</div>
            <div className="wd-gray wd-nudge-up">{profile.handle}</div>
            <img className="rounded-circle" height={48} src=""/>
            <div className="wd-nudge-up">{profile.bio}</div>
            <div className= "wd-nudge-up mt-2">
               <i className="bi bi-geo-alt"></i>
               {profile.location}
               <i className="bi bi-calendar-heart ps-4 pe-1"></i>
               Joined {profile.dateJoined}

            </div>

        </div>
    );
}
export default ProfileComponent;