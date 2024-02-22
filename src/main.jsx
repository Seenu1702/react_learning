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


// create a reducer function
// having the arguments inital state and aciton
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

// create a new store
const store = createStore(counterReducer);

// subscriber method is called whenever we dispatch an action

store.subscribe(() => {
  const stateNow = store.getState();
  console.log(stateNow);
})

// console.log(store.getState());
store.dispatch({type: 'INCR'});
store.dispatch({type: 'INCR'});
store.dispatch({type: 'DECR'});
store.dispatch({type: 'ZERO'});
// console.log(store.getState());

  ReactDOM.createRoot(document.getElementById('root')).render(<App />);



