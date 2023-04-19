import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ProfileComponent} from "./index";
import {updateUser} from "./profile-reducer"
import {Link} from "react-router-dom";
import {profileThunk, editProfileThunk} from "../users/users-thunks";
const EditProfileComponent = () => {

    const {currentUser} = useSelector((state) => state.users)
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    useEffect(  () => {
        dispatch(profileThunk());
    }, []);
    console.log("hi");
    console.log(currentUser);
    const saveButtonHandler = () => {
        dispatch(updateUser(profile));

        console.log(profile);
    }

    return (
        <div>
            {currentUser && (
                <div>
                <h1>Welcome {currentUser.username}</h1>
                    <h2>hi</h2>

                    <div className="wd-button mt-2">
                        <Link to={'/news/profile'}>
                            <button onClick={saveButtonHandler} className="btn btn-primary rounded-4 mb-3">Save</button>
                        </Link>
                    </div>
                    <h3>Edit Profile</h3>
                    <div className="mt-2"><img className="" height={300} width={600}
                                               src={require('../images/ocean.jpg')}/></div>


                    <div className="wd-nudge-up"><img className="rounded-circle" height={150} width={150}
                                                      src={require('../images/bridge.jpg')}/></div>


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

                    <label className="wd-nudge-up pe-2 mt-2" >First Name</label>
                    <input
                        className="wd-nudge-up"
                        value={currentUser.firstName}
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
                        value={profile.lastName}
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
                        value={currentUser.email}
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
                        value={currentUser.phone}
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
                        value={currentUser.location}
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
                        value={currentUser.handle}
                        onChange={(e) =>
                            setProfile({
                                ... profile,
                                handle: e.target.value,
                            })
                        }
                    />

                    <br/>

                    <label className="wd-nudge-up pe-2 mt-3">Bio</label>
                    <input
                        className="wd-nudge-up"
                        value={profile.bio}
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