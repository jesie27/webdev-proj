import React from "react";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {profileThunk} from "./users-thunks";

function CurrentUserContext({children}) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(profileThunk());
    }, []);
    return children;
}
export default CurrentUserContext;