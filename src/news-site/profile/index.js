import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "../index.css"
import {Link, useParams} from "react-router-dom";
import {logoutThunk, profileThunk, findUserByIdThunk} from "../users/users-thunks";
import {useNavigate}  from "react-router-dom";
import {current} from "@reduxjs/toolkit";
import {findLikesByUserId} from "../likes/likes-service";
import {findUserById} from "../users/users-service.js";
import {userFollowsUser} from "../follows/follows-service";

const ProfileComponent = () => {
    const {userId}= useParams();
    const {currentUser} = useSelector((state) => state)
    const [profile, setProfile] = useState(currentUser);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [likes, setLikes] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
   // console.log(currentUser);
   //console.log(currentUser.firstName);
    //console.log(profile);
    // const constFindUserProfile = async (userId) => {
    //     const response = await findUserByIdThunk(userId);
    //     setVisitProfile(response)
    // }
    const fetchProfile = async () => {
        if (userId) {
            const user = await findUserById(userId);
            setProfile(user);
            return;
        }
        const response = await dispatch(profileThunk());
        setProfile(response.payload);
    }
    const followUser = async() => {

        //await userFollowsUser(currentUser._id, profile._id);
    }
    const fetchLikes = async() => {

       // const likes = await findLikesByUserId(profile._id);
      // setLikes(likes);
        console.log(currentUser);
        console.log(profile);
    }
    const loadScreen = async() => {
        await fetchProfile();
       await fetchLikes();
    }
    useEffect(  () => {
            loadScreen();
        //loadScreen();
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
            <h1>Profile {userId}</h1>
            <button className="float-end btn btn-success" onClick={followUser}>Follow</button>
            <div>
                {currentUser && (
                <div>
                    <h1>Welcome {currentUser.firstName} {currentUser.lastName}</h1>
                    <div className="mt-2"><img className="" height={300} width={1000}
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
                    <button className="btn btn-danger wd-nudge-up mt-3" onClick={() => {
                        dispatch(logoutThunk());
                        navigate("/news/login");
                    }}>Logout</button>
                    <div>
                        <h1>Likes</h1>
                        <ul className="list-group">
                            {likes.map((like) => (
                                <li className="list-group-item">
                                    <h3>{like.articleId}</h3>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                )}

            </div>
            <div>
                {!currentUser &&(
                    <h2>Must log in to see profile screen</h2>
                )}
            </div>

        </div>
    );
}
export default ProfileComponent;