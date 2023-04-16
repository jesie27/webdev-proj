import NavigationSidebar from "./navigation";
import {Route, Routes} from "react-router";
import HomeComponent from "./home";
import ProfileComponent from "./profile";
import SearchComponent from "./search";
import NytSearchPopular from "../nyt/nyt-search-popular";
import NytGeneralScreen from "../nyt/nyt-search-general";
import NytScreen from "../nyt";
import NytSearchScreen from "../nyt/nyt-search-popular";
import NytPopularDetailScreen from "../nyt/nyt-popular-detail";
import NytGeneralDetail from "../nyt/nyt-general-detail";
import EditProfileComponent from "./profile/edit-profile";
function News() {
    return(
        <div className="row mt-4">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar/>

            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6">

                <Routes>
                    <Route path="/news/home" element={<HomeComponent/>}>Home</Route>
                    <Route path="/news/profile" element={<ProfileComponent/>}>Profile</Route>
                    <Route path="/news/edit-profile" element={<EditProfileComponent/>}>Profile</Route>
                    <Route path="/news/nyt/general-search" element={<NytGeneralScreen/>}>General Search</Route>
                    <Route path="/news/nyt/popular-search" element={<NytSearchPopular/>}>Popular Search</Route>
                    <Route path="/nyt/popular-article/:id" element={<NytPopularDetailScreen/>}></Route>
                    <Route path="/nyt/general-article/:headline" element={<NytGeneralDetail/>}></Route>

                </Routes>
            </div>
        </div>
    );
}
export default News