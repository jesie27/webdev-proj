import { createSlice } from "@reduxjs/toolkit";
import profileArray from "./profile.json"

const initialState = {
    user: {
        "firstName": "Nola",
        "lastName": "Corgi",
        "handle": "@nolathecorgi",
        "profilePicture": "../images/bridge.jpg",
        "bannerPicture": "../images/ocean.jpg",
        "email": "nolathecorgi@gmail.com",
        "phone": "617-123-5678",
        "bio": "A corgi living in Boston",
        "location": "Boston, MA",
        "dateOfBirth": "09/18/2018",
        "dateJoined": "3/2023",
        "followingCount": 100,
        "followersCount": 1000000
    }
};

const profileSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        updateUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export default profileSlice.reducer;
export const {updateUser} = profileSlice.actions;