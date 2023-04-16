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
          </Routes>
      </div>
      </BrowserRouter>

  );
}

export default App;
