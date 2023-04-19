import {useState} from "react";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../users/users-thunks";
import {useNavigate} from "react-router-dom";

function LoginScreen () {
    const {currentUser} = useSelector((state) => state.users);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toggleLogin = () => {
        try {
            dispatch(loginThunk({username, password}));
            navigate("/news/profile");

        } catch (err) {
            console.log(err);
        }


    }
    return (
        <div>
            <h1>Login</h1>
            <div>
            <label htmlFor="username">Username</label>
            <input
            type="text"
            id="username"
            className = "form-control ms-2"
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
                className="password ms-2"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
        </div>
            <button onClick={toggleLogin} className="btn btn-primary">Login</button>
        </div>

    );
}
export default LoginScreen;