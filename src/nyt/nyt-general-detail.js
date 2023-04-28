import {useNavigate, useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import React from "react";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {current} from "@reduxjs/toolkit";
import {findLikersByArticle, findLikesByUserId, userLikesArticle} from "../news-site/likes/likes-service";
import {getArticle} from "./nyt-service";

function NytGeneralDetailScreen() {
    const {headline} = useParams();
    console.log({headline})
    const [likers, setLikers] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    const fetchLikers = async() => {
        // if(currentUser) {
         const likers = await findLikersByArticle(headline);
         setLikers(likers);
        // }
        console.log(likers);
    }
        useEffect(() => {
       // fetchArticle().then(response => setArticle(response));
       fetchArticle();
       fetchLikers();
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

            <div>
                <h1>Likers</h1>
                <ul className="list-group">
                    {likers.map((liker) => (
                        <li className="list-group-item">
                            <Link to = {`http://localhost:3000/news/profile/${liker.userId}`}><h4><i className="bi bi-heart-fill"></i> {liker.userId}</h4></Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default NytGeneralDetailScreen;