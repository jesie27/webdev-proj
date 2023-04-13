import NavigationSidebar from "./navigation";
import {Route, Routes} from "react-router";
import HomeComponent from "./home";
import ProfileComponent from "./profile";
import SearchComponent from "./search";
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
                    <Route path="/news/search" element={<SearchComponent/>}>Search</Route>

                </Routes>
            </div>
        </div>
    );
}
export default News