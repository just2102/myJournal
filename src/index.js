import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
function renderTree(state) {
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App 
    state={store.getState()} 
    addArticle={store.addArticle.bind(store)}
    updateNewArticleText={store.updateNewArticleText.bind(store)}
    />
  </React.StrictMode>
  </BrowserRouter>
);
}
renderTree(store.getState);

store.subscribe(renderTree)