import {Link} from "react-router-dom";
import NavigationSidebar from "../news-site/navigation";
import {Route, Routes} from "react-router";
import HomeComponent from "../news-site/home";
import ProfileComponent from "../news-site/profile";
import NytSearchScreen from "./nyt-search";

function NytScreen() {
    return (
        <div className="row mt-4">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6">

                <h1>NYT Screen</h1>
                <a href="/nyt/search"><button className="btn btn-primary">Search</button></a>
                <Routes>
                    <Route path="/nyt" element={<NytScreen/>}>Home</Route>
                    <Route path="/nyt/search" element={<NytSearchScreen/>}>NYT Search</Route>
                </Routes>
            </div>

        </div>
    )
}
export default NytScreen;