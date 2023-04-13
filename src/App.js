import './App.css';
import News from "./news-site"
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

import HomeComponent from "./news-site/home";
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
