import './App.css';
import News from "./news-site"
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

import NytScreen from "./nyt";
import NytSearchScreen from "./nyt/nyt-search-popular";
import NytPopularDetailScreen from "./nyt/nyt-popular-detail";
import NytGeneralScreen from "./nyt/nyt-search-general";
import NytSearchPopular from "./nyt/nyt-search-popular";
import NytGeneralDetail from "./nyt/nyt-general-detail";
function App() {
  return (
      <BrowserRouter>
      <div className="container">
          <Routes>
              <Route index path="/*" element={<News/>}></Route>
              <Route path="/nyt" element={<NytScreen/>}></Route>
              <Route path="/nyt/search" element={<NytSearchScreen/>}></Route>
              <Route path="/nyt/popular-article/:id" element={<NytPopularDetailScreen/>}></Route>
              <Route path="/nyt/general-article/:headline" element={<NytGeneralDetail/>}></Route>

              <Route path="/nyt/popular-search" element={<NytSearchPopular/>}></Route>

              <Route path="/nyt/general-search" element={<NytGeneralScreen/>}></Route>

          </Routes>
      </div>
      </BrowserRouter>

  );
}

export default App;
