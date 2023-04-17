import {useParams} from "react-router";
import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getArticle} from "./nyt-service";
function NytPopularDetailScreen() {
    const {id} = useParams();
    const[article, setArticle] = useState({});
    console.log('test');

    const fetchArticle = async () => {
        const response = await getArticle(id);
        setArticle(response);
    };
    useEffect(()=>{
        fetchArticle();
        },
        []);
    console.log('test');
    console.log({article})

    return(
        <div>
            <h1>nyt popular article detail screen {id}</h1>
            <h2></h2>


        </div>
    )
}
export default NytPopularDetailScreen;