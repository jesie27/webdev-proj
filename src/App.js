import './App.js';
import {News} from "../src/news-site/index.js"
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";


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
