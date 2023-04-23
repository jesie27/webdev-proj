import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import React from "react";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {current} from "@reduxjs/toolkit";
import {userLikesArticle} from "../news-site/likes/likes-service";
import {getArticle} from "./nyt-service";

function NytGeneralDetailScreen() {
    const {headline} = useParams();
    console.log({headline})

    //const {id} = useParams();
    const {currentUser} = useSelector((state) => state.users);
    const [article, setArticle] = useState({})
    const likeArticle = async() => {
        const response = userLikesArticle(currentUser.uid, headline);
        console.log(response);
    }
    const fetchArticle = async () => {
        const response = await getArticle(headline);
        setArticle(response);}

    useEffect(() => {
       // fetchArticle().then(response => setArticle(response));
       fetchArticle();
    }, []);
    //console.log(article);
    const  test = JSON.parse(JSON.stringify(article,null, 2));
    console.log(test);
    return(
        <div>
            <Link to={article.web_url}><h2>{headline}</h2></Link>
            <div>{article.pub_date}</div>
            {/*<div>{test.byline.original}</div>*/}
            <div>{}</div>
            <div>{article.abstract}</div>
            <div>{}</div>

            <button className="btn btn-success" >Like</button>
            <div>

                {currentUser && (
            <h2>{currentUser.firstName}</h2>)
                }
            </div>
        </div>
    )
}
export default NytGeneralDetailScreen;