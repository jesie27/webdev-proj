import React from 'react'
import NavigationSidebar from "./navigation/index.js";
import {Route, Routes} from "react-router";
import HomeComponent from "../news-site/home/index.js"
import ProfileComponent from "../news-site/profile/index.js";
import NytSearchPopular from "../nyt/nyt-search-popular.js";
import NytGeneralScreen from "../nyt/nyt-search-general.js";
import NytPopularDetailScreen from "../nyt/nyt-popular-detail.js";
import NytGeneralDetailScreen from "../nyt/nyt-general-detail.js";
import EditProfileComponent from "./profile/edit-profile.js";
import ProfileReducer from "./profile/profile-reducer.js";
import LoginScreen from "./login/login-screen.js";
import RegisterScreen from "./login/register-screen";
import AdminScreen from "./admin/admin";
import currentUserContext from "./users/current-user-context";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import usersReducer from "./users/users-reducer";
import CurrentUserContext from "./users/current-user-context";
const store = configureStore(
    {reducer: {users: usersReducer}});
export function News() {
    return(
        <Provider store={store}>
        <CurrentUserContext>
        <div className="row mt-4">
            <div className="col-2 col-md-2 col-lg-2 col-xl-2">
                <NavigationSidebar/>
            </div>
            <div className="col-10 col-md-10 col-lg-10 col-xl-10">

                <Routes>
                    <Route path="/news/home" element={<HomeComponent/>}>Home</Route>
                    <Route path="/news/profile" element={<ProfileComponent/>}>Profile</Route>
                    <Route path="/news/profile/:userId" element={<ProfileComponent/>}>Profile</Route>

                    <Route path="/news/edit-profile" element={<EditProfileComponent/>}>Profile</Route>
                    <Route path="/news/login" element={<LoginScreen/>}>Login</Route>
                    <Route path="/news/register" element={<RegisterScreen/>}>Login</Route>
                    <Route path="/news/admin" element={<AdminScreen/>}>Login</Route>

                    <Route path="/news/general-search" element={<NytGeneralScreen/>}>General Search</Route>
                    <Route path="/news/general-search/:searchTerm" element={<NytGeneralScreen/>}>General Search</Route>
                    <Route path="/news/popular-search" element={<NytSearchPopular/>}>Popular Search</Route>
                    <Route path="/news/popular-article/:id" element={<NytPopularDetailScreen/>}></Route>
                    <Route path="/news/general-article/:headline" element={<NytGeneralDetailScreen/>}></Route>

                </Routes>
            </div>
        </div>
        </CurrentUserContext>
    </Provider>
    );
}
export default store;