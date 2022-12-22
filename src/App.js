import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Articles from "./Components/Articles/Articles";
import Writers from "./Writers/Writers";
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
          dispatch={props.dispatch}
          />} 
          ></Route>
          <Route path='/writers' 
          element={<Writers 
          state={props.state.writersPage}
          dispatch={props.dispatch}
          />}/>
          

          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
