import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import WritersContainer from "./Components/Writers/WritersContainer";
import About from "./Components/About/About"
import ArticlesContainer from "./Components/Articles/ArticlesContainer";


const App = (props) => {

  return (
    <div className="app_wrapper">
      <Header></Header>
      <div className="content_wrapper">
        <Routes>
          <Route 
          path="/articles" 
          element={<ArticlesContainer 
          />} 
          ></Route>
          <Route path='/writers' 
          element={<WritersContainer 
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
