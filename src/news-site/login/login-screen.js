import {useState} from "react";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../../controllers/users/users-thunks";

function loginScreen () {
    const {currentUser} = useSelector((state) => state.user);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const login = () => {
        dispatch(loginThunk({username, password}));
    }
    return (
        <div>
            <h1>Login</h1>
            <div>
            <label for="username" >Username</label>
            <input
            type="text"
            id="username"
            className = "formControl ms-2"
            value = {username}
            onChange={(e) => {
            setUsername(e.target.value);
            }}
            />
            </div>
        <div className="mb-3 mt-3">
            <label htmlFor="password">Password</label>
            <input
                type="text"
                id="password"
                className="formControl ms-2"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
        </div>
            <button className="btn btn-primary">Login</button>
        </div>

    );
}
export default loginScreen;