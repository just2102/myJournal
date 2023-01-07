import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import ArticlesContainer from "./Components/Articles/ArticlesContainer";
import WritersContainer from "./Components/Writers/WritersContainer";
import About from "./Components/About/About";
import LoginContainer from "./Components/Login/LoginContainer";

const App = (props) => {
  return (
    <div className="app_wrapper">
      <Header></Header>
      <div className="content_wrapper">
        <Routes>
          <Route path="/articles/">
            <Route path=":writerId" element={<ArticlesContainer />} />
          </Route>
          <Route path="/writers/" element={<WritersContainer />} />

          <Route path="/about" element={<About />} />

          <Route path="/login" element={<LoginContainer />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
