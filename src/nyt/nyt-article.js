import {useParams} from "react-router";
import {Link} from "react-router-dom";
import React from "react";
function NytArticleDetailScreen() {
    const {id} = useParams();

    return(
        <div>
            <h1>nyt article detail screen {id}</h1>

        </div>
    )
}
export default NytArticleDetailScreen;