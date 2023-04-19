import {useState} from "react";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {current} from "@reduxjs/toolkit";
import {useNavigate} from "react-router-dom";
import {registerThunk} from "../users/users-thunks";

function RegisterScreen () {
    const {currentUser} = useSelector((state) => state.users);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [role, setRole] = useState("");
    const [location, setLocation] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toggleRegister = () => {
        try {
            dispatch(registerThunk({username, password, firstName, lastName, dateOfBirth, location, role}));
            navigate("/news/profile");
            console.log(currentUser.firstName);
            console.log(username);

        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <h1>Register</h1>
            <div>
                <label htmlFor="username" >Username</label>
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
                    className="form-control ms-2"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
            </div>
            <div className="mb-3 mt-3">
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    className="form-control ms-2"
                    value={firstName}
                    onChange={(e) => {
                        setFirstName(e.target.value);
                    }}
                />
            </div>


            <div>
                <label htmlFor="lastName" >Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    className = "form-control ms-2"
                    value = {lastName}
                    onChange={(e) => {
                        setLastName(e.target.value);
                    }}
                />
            </div>

            <div>
                <label htmlFor="birthday" >Date of Birth</label>
                <input
                    type="text"
                    id="birthday"
                    className = "form-control ms-2"
                    value = {dateOfBirth}
                    onChange={(e) => {
                        setDateOfBirth(e.target.value);
                    }}
                />
            </div>

            <div>
                <label htmlFor="location" >Location</label>
                <input
                    type="text"
                    id="location"
                    className = "form-control ms-2"
                    value = {location}
                    onChange={(e) => {
                        setLocation(e.target.value);
                    }}
                />
            </div>



            <div className="mb-2">Select your role</div>
            <div>

                <input
                type="radio" value="WRITER" id="radio-writer" name="radio-role"
                />
                <label htmlFor="radio-writer" className="pe-4">
                    Writer</label>

                <input
                    type="radio" value="READER" id="radio-reader" name="radio-role"
                />
                <label htmlFor="radio-reader">
                    Reader</label>
            </div>
            <button onClick={toggleRegister} className="btn btn-primary mt-3">Register</button>
        </div>

    );
}
export default RegisterScreen;