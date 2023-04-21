import {useParams} from "react-router";
import {Link} from "react-router-dom";
import React from "react";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {current} from "@reduxjs/toolkit";
import {userLikesArticle} from "../news-site/likes/likes-service";
import {getArticle} from "./nyt-service";

function NytArticleDetailScreen() {
    const {headline} = useParams();
    const {currentUser} = useSelector((state) => state.users);
    const [article, setArticle] = useState({})
    const likeArticle = async() => {
        const response = userLikesArticle(currentUser.uid, headline);
        console.log(response);
    }
    // const fetchArticle = async () => {
    //     const response = await getArticle(id);
    //     setArticle(response);}

    // useEffect(() => {
    //     fetchArticle();
    // }, []);
    return(
        <div>
            <h1>nyt general article detail screen </h1>
            <h2>{headline}</h2>
            <button className="btn btn-success" onClick={likeArticle}>Like</button>
            <div>

                {currentUser && (
            <h2>{currentUser.firstName}</h2>)
                }
            </div>

        </div>
    )
}
export default NytArticleDetailScreen;