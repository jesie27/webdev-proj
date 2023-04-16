import NavigationSidebar from "../news-site/navigation";
import {Route, Routes} from "react-router";
import ProfileComponent from "../news-site/profile";
import NytSearchPopularScreen from "./nyt-search-popular";
import NytGeneralScreen from "./nyt-search-general";

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
                    <Route path="/nyt/popular-search" element={<NytSearchPopularScreen/>}>NYT Search</Route>
                    <Route path="/nyt/general-search" element={<NytGeneralScreen/>}>NYT Search</Route>

                </Routes>
            </div>

        </div>
    )
}
export default NytScreen;