import './App.css';
import News from "./news-site"
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

import HomeComponent from "./news-site/home";
import NytScreen from "./nyt";
import NytSearchScreen from "./nyt/nyt-search";
import NytArticleDetailScreen from "./nyt/nyt-article";
function App() {
  return (
      <BrowserRouter>
      <div className="container">
          <Routes>
              <Route index path="/*" element={<News/>}></Route>
              <Route path="/nyt" element={<NytScreen/>}></Route>
              <Route path="/nyt/search" element={<NytSearchScreen/>}></Route>
              <Route path="/nyt/article/:id" element={<NytArticleDetailScreen/>}></Route>

          </Routes>
      </div>
      </BrowserRouter>

  );
}

export default App;
