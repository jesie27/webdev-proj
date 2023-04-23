import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "../index.css"
import {Link} from "react-router-dom";
import {editProfileThunk, loginThunk, logoutThunk, profileThunk} from "../users/users-thunks";
import {useNavigate}  from "react-router-dom";
import editProfile from "./edit-profile";
import {current} from "@reduxjs/toolkit";
import {findLikesByUserId} from "../likes/likes-service";

const ProfileComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [profile, setProfile] = useState(currentUser);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [likes, setLikes] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fetchLikes = async() => {
        const likes = await findLikesByUserId(currentUser.id);
        setLikes(likes);
    }
    useEffect(  () => {
        dispatch(profileThunk());
    }, []);
    const toggleEditProfile = () => {
        try {
            //dispatch(editProfileThunk({username, password}));
            navigate("/news/edit-profile");

        } catch (err) {
            console.log(err);
        }
    }


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
                    <div className="wd-nudge-up mb-3">{currentUser.bio}</div>
                    <div className= "wd-nudge-up mt-2">
                        <i className="bi bi-geo-alt pe-2"></i>
                        {currentUser.location}
                        <i className="bi bi-calendar-heart ps-4 pe-2"></i>
                        Joined {currentUser.dateJoined}
                    </div>

                </div>
                )}
            </div>
            <button className="btn btn-danger wd-nudge-up mt-3" onClick={() => {
                dispatch(logoutThunk());
                navigate("/news/login");
            }}>Logout</button>
            <div>

            </div>

            <div>
                {!current &&(
                    <h2>Must log in to see profile screen</h2>
                )}
            </div>

        </div>
    );
}
export default ProfileComponent;