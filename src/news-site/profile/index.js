import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "../index.css"
import {Link, useParams} from "react-router-dom";
import {logoutThunk, profileThunk, findUserByIdThunk} from "../users/users-thunks";
import {useNavigate}  from "react-router-dom";
import {current} from "@reduxjs/toolkit";
import {findLikesByUserId} from "../likes/likes-service";
import {findUserById} from "../users/users-service.js";
import {userFollowsUser, findFollowsByFollowedId, findFollowsByFollowerId} from "../follows/follows-service";

const ProfileComponent = () => {
    const {userId}= useParams();
    console.log(userId);
    const {currentUser} = useSelector((state) => state.users)
    const [profile, setProfile] = useState(currentUser);
    const [visiting, setVisting] = useState({});
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [likes, setLikes] = useState([]);
    const [following, setFollowing] = useState([]);
    const [follows, setFollows] =useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();
   // console.log(currentUser);
   //console.log(currentUser.firstName);
   // console.log(profile);
    const constFindUserProfile = async (userId) => {
        const response = await findUserByIdThunk(userId);
            return response.data;
            setVisting(response.data);
    }
    const fetchProfile = async () => {
        if (userId) {
            console.log(userId);
            const user = await findUserById(userId);
            setProfile(user);
            return;
        }
        //await dispatch(profileThunk());
        const response = await dispatch(profileThunk());
        console.log(response);
        setProfile(response.payload);
    }
    const followUser = async() => {
        await userFollowsUser(currentUser._id, profile._id);
    }
    const fetchLikes = async () => {
        if(currentUser) {
      const likes = await findLikesByUserId(currentUser._id);
            setLikes(likes);
        }
        console.log(likes);
        //console.log(profile);
    }
    const fetchVisitingLikes = async () => {
        // console.log(profile);
        // if(profile) {
        //     const visitingLikes = await findLikesByUserId(profile._id);
        //     setLikes(visitingLikes);
        // }
        // console.log(visitingLikes);
    }

    const fetchFollowing = async() => {
        const following = await findFollowsByFollowerId(profile._id);
        setFollowing(following);

    }
    const loadScreen = async() => {
        await fetchProfile();
       await fetchLikes();
       await constFindUserProfile();
       await fetchVisitingLikes();
       if (profile) {
           await fetchFollowing();

       }
    }
    useEffect(  () => {
            loadScreen();
        //loadScreen();
    }, [userId]);
    const toggleEditProfile = () => {
        try {
            //dispatch(editProfileThunk({username, password}));
            navigate("/news/edit-profile");

        } catch (err) {
            console.log(err);
        }
    }
    console.log(profile);
    console.log(visiting);

    if(profile) {
    console.log(profile.firstName);
}


        return (
        <div>
            <div>
                {currentUser ?
                    <>
                        {currentUser._id == userId ?
                            <>
                                <h1>Welcome {currentUser.firstName} {currentUser.lastName}</h1>
                                <div className="mt-2"><img className="" height={300} width={1050}
                                                           src={require('../images/ocean.jpg')}/>
                                </div>
                                <div className="wd-button mt-2">
                                    <Link to={'/news/edit-profile'}>
                                        <button className="btn btn-primary rounded-4">Edit</button>
                                    </Link>
                                </div>
                                <div>
                                    {currentUser.photo && (
                                        <div className="wd-nudge-up"><img className="rounded-circle" height={150} width={150}
                                                                          src={require(`${currentUser.photo}`)}/></div>
                                    )}

                                </div>

                                <div className="wd-bold wd-nudge-up">{currentUser.firstName} {currentUser.lastName}</div>
                                <div className="wd-gray wd-nudge-up">@{currentUser.handle}</div>
                                <img className="rounded-circle" height={48} src=""/>
                                <div className="wd-nudge-up mb-3">{currentUser.bio}</div>
                                <div className= "wd-nudge-up mt-2">
                                    <i className="bi bi-geo-alt pe-2"></i>
                                    {currentUser.location}
                                    <i className="bi bi-calendar-heart ps-4 pe-2"></i>
                                    Joined {currentUser.dateJoined}
                                </div>
                                <div>
                                <button className="btn btn-danger wd-nudge-up mt-3" onClick={() => {
                                    dispatch(logoutThunk());
                                    navigate("/news/login");
                                }}>Logout</button></div>
                                <div>
                                    <h1>Likes</h1>
                                    <ul className="list-group">
                                        {likes.map((like) => (
                                            <li className="list-group-item">
                                                <Link to = {`http://localhost:3000/news/general-article/${like.articleId}`}><h4><i className="bi bi-heart-fill"></i> {like.articleId}</h4></Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/*<div>*/}
                                {/*    <h1>Following</h1>*/}
                                {/*        <ul className="list-group">*/}
                                {/*            {following.map((follow) => (*/}
                                {/*                <li className="list-group-item">*/}
                                {/*                    <h4>{follow.follower}</h4>*/}
                                {/*                    <h4>{follow.followed}</h4>*/}
                                {/*                </li>*/}
                                {/*            ))}*/}
                                {/*        </ul>*/}
                                {/*</div>*/}
                            </>

                            :

                            ""}
                    </>

                    :""}

                <div>
                    {profile ?
                        <>
                            {currentUser?
                             <>
                                 {currentUser._id == userId ?
                                     ""

                                     :   <>
                                            <h1>{profile.firstName} {profile.lastName}</h1>
                                            <button className="btn btn-success" onClick={followUser}>Follow</button>
                                         <div className="mt-2"><img className="" height={350} width={1000}
                                                                    src={require('../images/seaport.jpg')}/>
                                         </div>
                                         {profile.photo ? <div className="wd-nudge-up"><img className="rounded-circle" height={150} width={150}
                                                                                            src={require(`${profile.photo}`)}/></div>
                                             :

                                             <div className="wd-nudge-up"><img className="rounded-circle" height={150} width={150}
                                             src={require("./grassnola.jpg")}/></div> }

                                         <div className="wd-gray wd-nudge-up">{profile.handle}</div>


                                         <div className="wd-nudge-up mb-3">{profile.bio}</div>
                                         <div className= "wd-nudge-up mt-2">
                                             <i className="bi bi-geo-alt pe-2"></i>
                                             {profile.location}
                                             <i className="bi bi-calendar-heart ps-4 pe-2"></i>
                                             Joined April 2023</div>
                                         <div className="mb-5">
                                             <h1>Likes</h1>
                                             <ul className="list-group">
                                                 {likes.map((like) => (
                                                     <li className="list-group-item">
                                                         <Link to = {`http://localhost:3000/news/general-article/${like.articleId}`}><h4><i className="bi bi-heart-fill"></i> {like.articleId}</h4></Link>
                                                     </li>
                                                 ))}
                                             </ul>
                                         </div>
                                        </>
                                 }
                            </>
                                :
                            <>
                                <h1>{profile.firstName} {profile.lastName}</h1>
                                <button className="btn btn-success" onClick={followUser}>Follow</button>
                                <div className="mt-2"><img className="" height={350} width={1000}
                                                           src={require('../images/seaport.jpg')}/>
                                </div>
                                <div className="wd-nudge-up"><img className="rounded-circle" height={150} width={150}
                                                                  src={require(`${profile.photo}`)}/></div>
                                <div className="wd-gray wd-nudge-up">{profile.handle}</div>


                                <div className="wd-nudge-up mb-3">{profile.bio}</div>
                                <div className= "wd-nudge-up mt-2">
                                    <i className="bi bi-geo-alt pe-2"></i>
                                    {profile.location}
                                    <i className="bi bi-calendar-heart ps-4 pe-2"></i>
                                    Joined {profile.dateJoined}</div>
                                <div className="mb-5">
                                    <h1>Likes</h1>
                                    <ul className="list-group">
                                        {likes.map((like) => (
                                            <li className="list-group-item">
                                                <Link to = {`http://localhost:3000/news/general-article/${like.articleId}`}><h4><i className="bi bi-heart-fill"></i> {like.articleId}</h4></Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </>
                            }

                        </>
                        :""}
                </div>

            </div>


        </div>
    );
}
export default ProfileComponent;