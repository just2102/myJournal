import { Routes, Route } from "react-router-dom";

import HeaderContainer from "./Components/Header/HeaderContainer";
import ArticlesContainer from "./Components/Articles/ArticlesContainer";
import WritersContainer from "./Components/Writers/WritersContainer";
import About from "./Components/About/About";
import LoginContainer from "./Components/Login/LoginContainer";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";

const App = (props) => {
  return (
    <div className="app_wrapper">
      <HeaderContainer></HeaderContainer>
      <div className="content_wrapper">
        <Routes>
          <Route path="/articles/">
            <Route path=":writerId" element={<ArticlesContainer />} />
          </Route>
          <Route path="/writers/" element={<WritersContainer />} />

          <Route path="/about" element={<About />} />

          <Route path="/login" element={<LoginContainer />} />
          <Route path="/login_form" element={<Login />} />
          <Route path="/register_form" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
