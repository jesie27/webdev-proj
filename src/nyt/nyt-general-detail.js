import {useParams} from "react-router";
import {Link} from "react-router-dom";
import React from "react";
function NytArticleDetailScreen() {
    const {headline} = useParams();
    return(
        <div>
            <h1>nyt general article detail screen </h1>
            <h2>{headline}</h2>
        </div>
    )
}
export default NytArticleDetailScreen;