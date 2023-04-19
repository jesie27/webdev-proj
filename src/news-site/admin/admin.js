import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findAllUsersThunk} from "../users/users-thunks";
import React from "react";
function AdminScreen() {
    const{currentUser,users} = useSelector((state) => state.users);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findAllUsersThunk());
    }, []);
    return(
        <div>
            <h1>Admin</h1>
            <ul>
                {users && users.map((user) => {
                    return(
                        <li key={user.id}>
                            <h2>{user.username}</h2>
                            <h2>{user.role}</h2>

                        </li>
                    )
                })}

            </ul>
        </div>

    )
}
export default AdminScreen;