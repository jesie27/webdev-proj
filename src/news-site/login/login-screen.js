import {useState} from "react";
import React from "react";
function loginScreen () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div>
            <h1>login</h1>
            <input
            type="text"
            className = "formControl"
            value = {username}
            onChange={(e) => {
            setUsername(e.target.value);
            }}
            />
        </div>
    );
}
export default loginScreen;