import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Articles from "./Components/Articles/Articles";
import About from "./Components/About/About"

const App = (props) => {

  return (
    <div className="app_wrapper">
      <Header></Header>
      <div className="content_wrapper">
        <Routes>
          <Route 
          path="/articles" 
          element={<Articles 
            state={props.state.articlesPage}
            addArticle={props.addArticle}
            updateNewArticleText={props.updateNewArticleText}
          />} ></Route>

          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
