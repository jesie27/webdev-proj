import React, {useState} from "react";

const EditProfileComponent = () => {
    const [profile, setProfile] = useState({
        firstName: "Nola",
        lastName: "Corgi",
        handle: "@nolathecorgi",
        bio: "A corgi living in Boston",
        location: "Boston, MA",
        email: "nolathecorgi@gmail.com",
        phone: "617-123-5678",
        address: "11 First Ave",
        dateJoined: "03/2023"

    } )

    return (
        <div>
            <div><button>X</button></div>
            <div className="wd-button mt-2">
                <a href="/news/profile">
                    <button className="btn btn-primary rounded-4 mb-3">Save</button>
                </a>
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
            <div className= "wd-nudge-up">
                <i className="bi bi-geo-alt"></i>
                {profile.location}
                <i className="bi bi-calendar-heart ps-4 pe-1"></i>
                Joined {profile.dateJoined}

            </div>

            <label className="wd-nudge-up pe-2 mt-2" >First Name</label>
            <input
                className="wd-nudge-up"
                value={profile.firstName}
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
                value={profile.email}
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
                value={profile.phone}
                onChange={(e) =>
                    setProfile({
                        ...profile,
                        phone: e.target.value,
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
    );
}
export default EditProfileComponent;