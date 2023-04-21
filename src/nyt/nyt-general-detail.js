import {useParams} from "react-router";
import {Link} from "react-router-dom";
import React from "react";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {current} from "@reduxjs/toolkit";
function NytArticleDetailScreen() {
    const {headline} = useParams();
    const {currentUser} = useSelector((state) => state.users);
    const likeArticle = async() => {

    }
    return(
        <div>
            <h1>nyt general article detail screen </h1>
            <h2>{headline}</h2>
            <div>

                {currentUser && (
            <h2>{currentUser.firstName}</h2>)
                }
            </div>

        </div>
    )
}
export default NytArticleDetailScreen;