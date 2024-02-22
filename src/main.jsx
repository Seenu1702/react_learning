/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';



const notes = [
  {
    id: 1,
    content: 'Working with List',
    important: true
  },
  {
    id: 2,
    content: 'Usage of Keys',
    important: false
  },
  {
    id: 3,
    content: 'Conditional Rendering',
    important: true
  },
  {
    id: 4,
    content: 'Handling Events',
    important: true
  },
  {
    id: 5,
    content: 'Props Vs State',
    important: false
  }
]

const counterReducer = (state = 0, action) =>{
  switch (action.type){
    case 'INCR':
      return state + 1;
    case 'DECR':
      return state - 1;
    case 'ZERO':
      return 0;
    default:
      return state;
  }
}


const store = createStore(counterReducer);

  ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store = {store}>
      <App />
    </Provider>
  );



