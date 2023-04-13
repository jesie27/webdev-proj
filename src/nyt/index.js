import {Link} from "react-router-dom";

function NytScreen() {
    return (
        <div>
            <h1>NYT Screen</h1>
            <a href="/nyt/search"><button className="btn btn-primary">Search</button></a>
        </div>
    )
}
export default NytScreen;