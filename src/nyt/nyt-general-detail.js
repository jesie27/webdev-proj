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

    const {currentUser} = useSelector((state) => state.users);
    const [article, setArticle] = useState({})
    const likeArticle = async() => {
        console.log(currentUser);
        const response = userLikesArticle(currentUser._id, headline);
        console.log(response);
    }
    const fetchArticle = async () => {
        const response = await getArticle(headline);
        setArticle(response);}

    useEffect(() => {
       // fetchArticle().then(response => setArticle(response));
       fetchArticle();
    }, []);
    const  test = JSON.parse(JSON.stringify(article,null, 2));
    console.log(test);
    return(

        <div>
            <div>
                {currentUser && (
                        <div>

                            <h2>Welcome {currentUser.firstName}</h2>
                        </div>
                    )}
            </div>

            <Link to={article.web_url}><h2>{headline}</h2></Link>
            <div className="mt-1">{article.pub_date}</div>
            {/*<div>{test.byline.original}</div>*/}
            <div className="">{article.abstract}</div>
            <div>{/*article.lead_paragraph*/}</div>
            <div>
                {currentUser && (
                    <div>
                        <button className="btn btn-success mt-3"  onClick={likeArticle}>Like</button>
                    </div>
                    )

                }
            </div>
        </div>
    )
}
export default NytGeneralDetailScreen;