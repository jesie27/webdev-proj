import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ProfileComponent} from "./index";
import {updateUserThunk} from "../users/users-thunks";
import {Link, useNavigate} from "react-router-dom";
import {profileThunk, editProfileThunk} from "../users/users-thunks";
const EditProfileComponent = () => {
    const {currentUser} = useSelector((state) => state.users)
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const saveButtonHandler = () => {
        dispatch(updateUserThunk(profile));
        navigate('/news/profile');
        console.log(profile);
        console.log(profile.payload);
    }

    return (
        <div>
            {currentUser && (
                <div>
                <h2>Welcome {profile.firstName} {profile.lastName}</h2>

                    <div className="wd-button mt-2">
                        <button onClick={saveButtonHandler} className="btn btn-primary rounded-4 mb-3">Save</button>
                    </div>
                    <h3>Edit Profile</h3>
                    <div className="mt-2"><img className="" height={300} width={600}
                                               src={require('../images/ocean.jpg')}/></div>


                    <div className="wd-nudge-up"><img className="rounded-circle" height={150} width={150}
                                                      src={require('../images/bridge.jpg')}/></div>


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
                    <label className="wd-nudge-up pe-2 mt-3">Username</label>
                    <input
                        className="wd-nudge-up"
                        placeholder={profile.username}
                        onChange={(e) =>
                            setProfile({
                                ...profile,
                                username: e.target.value,
                            })
                        }
                    />
                    <br/>
                    <label className="wd-nudge-up pe-2 mt-3">Password</label>
                    <input
                        className="wd-nudge-up"
                        placeholder={profile.password}
                        onChange={(e) =>
                            setProfile({
                                ...profile,
                                password: e.target.value,
                            })
                        }
                    />
                    <br/>

                    <label className="wd-nudge-up pe-2 mt-3" >First Name</label>
                    <input
                        className="wd-nudge-up"
                        placeholder={profile.firstName}
                        onChange={(e) =>
                            setProfile({
                                ...profile,
                                firstName: e.target.value,
                            })
                        }
                    />
                    <br/>
                    <label className="wd-nudge-up pe-2 mt-3">Last Name</label>
                    <input
                        className="wd-nudge-up"
                        placeholder={profile.lastName}
                        onChange={(e) =>
                            setProfile({
                                ...profile,
                                lastName: e.target.value,
                            })
                        }
                    />

                    <br/>
                    <label className="wd-nudge-up pe-2 mt-3">Email</label>
                    <input
                        className="wd-nudge-up"
                        placeholder={currentUser.email}
                        onChange={(e) =>
                            setProfile({
                                ...profile,
                                email: e.target.value,
                            })
                        }
                    />

                    <br/>
                    <label className="wd-nudge-up pe-2 mt-3">Phone</label>
                    <input
                        className="wd-nudge-up"
                        placeholder={currentUser.phone}
                        onChange={(e) =>
                            setProfile({
                                ...profile,
                                phone: e.target.value,
                            })
                        }
                    />


                    <br/>
                    <label className="wd-nudge-up pe-2 mt-3">Location</label>
                    <input
                        className="wd-nudge-up"
                        placeholder={currentUser.location}
                        onChange={(e) =>
                            setProfile({
                                ... profile,
                                location: e.target.value,
                            })
                        }
                    />

                    <br/>

                    <label className="wd-nudge-up pe-2 mt-3">Handle</label>
                    <input
                        className="wd-nudge-up"
                        placeholder={currentUser.handle}
                        onChange={(e) =>
                            setProfile({
                                ... profile,
                                handle: e.target.value,
                            })
                        }
                    />

                    <br/>

                    <label className="wd-nudge-up pe-2 mb-3">Bio</label>
                    <input
                        className="wd-nudge-up"
                        placeholder={profile.bio}
                        onChange={(e) =>
                            setProfile({
                                ... profile,
                                bio: e.target.value,
                            })
                        }
                    />
                </div>
            )



            }


    </div>
    );
}
export default EditProfileComponent;