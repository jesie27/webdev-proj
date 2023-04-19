import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "../index.css"
import {Link} from "react-router-dom";
import {loginThunk, logoutThunk, profileThunk} from "../users/users-thunks";
import {useNavigate} from "react-router-dom";
import editProfile from "./edit-profile";

const ProfileComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(  () => {
        dispatch(profileThunk());
    }, []);
    return (
        <div>
            <div>
                {currentUser && (
                <div>
                    <h1>Welcome {currentUser.firstName} {currentUser.lastName}</h1>
                    <div className="mt-2"><img className="" height={300} width={600}
                                               src={require('../images/ocean.jpg')}/>
                    </div>
                    <div className="wd-button mt-2">
                        <Link to={'/news/edit-profile'}>
                            <button className="btn btn-primary rounded-4">Edit</button>
                        </Link>
                    </div>


                    <div className="wd-nudge-up"><img className="rounded-circle" height={150} width={150}
                                                      src={(require('../images/bridge.jpg'))}/></div>
                    <div className="wd-bold wd-nudge-up">{currentUser.firstName} {currentUser.lastName}</div>
                    <div className="wd-gray wd-nudge-up">{currentUser.handle}</div>
                    <img className="rounded-circle" height={48} src=""/>
                    <div className="wd-nudge-up">{currentUser.bio}</div>
                    <div className= "wd-nudge-up mt-2">
                        <i className="bi bi-geo-alt"></i>
                        {currentUser.location}
                        <i className="bi bi-calendar-heart ps-4 pe-1"></i>
                        Joined {currentUser.dateJoined}
                    </div>

                </div>
                )}
            </div>
            <button className="btn btn-danger wd-nudge-up mt-3" onClick={() => {
                dispatch(logoutThunk());
                navigate("/news/login");
            }}>Logout</button>

        </div>
    );
}
export default ProfileComponent;