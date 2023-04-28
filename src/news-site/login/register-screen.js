import {useState} from "react";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
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
    const [photo, setPhoto] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toggleRegister = () => {
        try {

            dispatch(registerThunk({username, password, firstName, lastName, dateOfBirth, location, role}));
            navigate("/news/profile/");
            console.log(currentUser.firstName);

        } catch (err) {
            console.log(err);
        }
    }

    const onOptionChange = e => {
        setRole(e.value)
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


            <div className="mb-2">
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

            <div className="mb-2">
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
            <div className="mb-2">
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
            <div className="mb-2"></div>
            <div>
                <label htmlFor="role" >Select your role: READER, WRITER, ADMIN</label>
                <input
                    type="text"
                    id="role"
                    className = "form-control ms-2"
                    value = {role}
                    onChange={(e) => {
                        setRole(e.target.value);
                    }}
                />
                <div className="mb-2"></div>
                <div>
                    <label htmlFor="photo" >Enter photo URL</label>
                    <input
                        type="text"
                        id="photo"
                        className = "form-control ms-2"
                        value = {"./corgi-center.jpg"}
                        onChange={(e) => {
                            setPhoto(e.target.value);
                        }}
                    />
                </div>



                    {/*<input*/}
                {/*type="radio" value="WRITER" id="radio-writer" name="radio-role"*/}
                {/*/>*/}
                {/*<label htmlFor="radio-writer" className="pe-4 ms-1">*/}
                {/*    Writer</label>*/}
                {/*<input*/}
                {/*    type="radio" value="READER" id="radio-reader" name="radio-role"  onClick={onOptionChange}*/}

                {/*/>*/}
                {/*<label htmlFor="radio-reader" className="ms-1">*/}
                {/*    Reader</label>*/}
            </div>
            <button onClick={toggleRegister} className="btn btn-primary mt-3">Register</button>
        </div>

    );
}
export default RegisterScreen;