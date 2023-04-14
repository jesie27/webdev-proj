import {useParams} from "react-router";
function NytArticleDetailScreen() {
    const {id} = useParams();

    return(
        <div>
            <h1>nyt article detail screen {id}</h1>

        </div>
    )
}
export default NytArticleDetailScreen;