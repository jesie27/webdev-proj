import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {findAllUsersThunk} from "../users/users-thunks";

import React from "react";
function AdminScreen() {
    const{currentUser, users} = useSelector((state) => state.users);
    const [profile, setProfile] = useState(currentUser);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findAllUsersThunk());
    }, []);
    return(
            <div>
                <div>
                    {profile && profile.role === "ADMIN" ?
                        <>
                        <h1>Admin</h1>
                        <ul className="list-group">
                    {users && users.map((user) => {
                        return (
                        <li key={user.id} className="list-group-item">
                        <div><span className="wd-bold">First Name: </span>{user.firstName}</div>
                        <div><span className="wd-bold">Last Name: </span>{user.lastName}</div>
                        <div><span className="wd-bold">ID: </span>{user._id}</div>

                        <div><span className="wd-bold">Username: </span> {user.username}</div>
                        <div><span className="wd-bold">Password: </span> {user.password}</div>

                        <div><span className="wd-bold">Date of Birth: </span>{user.dateOfBirth}</div>
                        <div><span className="wd-bold">Date Joined: </span>{user.dateJoined}</div>
                        <div><span className="wd-bold">Location: </span>{user.location}</div>

                        <div><span className="wd-bold">Role: </span>{user.role}</div>

                        </li>
                        )
                    })}
                        </ul>
                        </>

                        : <h2>Must be an admin to view this page</h2>}

                </div>

            </div>

    )
}
export default AdminScreen;