import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/redux-store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
function renderTree() {
root.render(
  <Provider store={store}>
  <BrowserRouter>
  <React.StrictMode>
    <App 
    state={store.getState()}
    dispatch={store.dispatch.bind(store)}
    />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>
);
}
renderTree();

store.subscribe(renderTree)