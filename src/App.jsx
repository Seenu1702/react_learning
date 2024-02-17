/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './styles/App.css';

function Button({value, onClick}){
  return(
    <button className='square' onClick={onClick}>{value}</button>
  )
}

function App() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    const nextSqares = squares.slice();
    if(squares[i] || calculateWinner(squares)){
      return;
    }

    if(xIsNext){
      nextSqares[i] = 'X';
    }
    else{
      nextSqares[i] = 'O'
    }
    // console.log(nextSqares);
    setSquares(nextSqares);
    setXIsNext(!xIsNext);
  }

  function calculateWinner(squares){
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],  
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
  ];

  for(let i=0;i<lines.length;i++){
    const [a,b,c] = lines[i];

    if(squares[a] && squares[a] == squares[b] && squares[a] == squares[c]){
      return squares[a];
    }
  }
  return null;
  }
  let winner = calculateWinner(squares)
  let status;
  if(winner){
    status = 'Winner: ' + winner;
  }
  else{
    status = 'Next Player: ' + (xIsNext ? 'X' : 'O')
  }


  return (
    <div className='body'>
      <div>
        {status}
      </div>
      <div className='column'>
        <Button value = {squares[0]} onClick={() =>handleClick(0)}/>
        <Button value = {squares[1]} onClick={() => handleClick(1)} />
        <Button value = {squares[2]} onClick={() => handleClick(2)}/>
        
      </div>
      <div className='column'>
        <Button value = {squares[3]} onClick={() => handleClick(3)}/>
        <Button value = {squares[4]} onClick={() => handleClick(4)}/>
        <Button value = {squares[5]} onClick={() => handleClick(5)}/>
      </div>
      <div className='column'>
        <Button value = {squares[6]} onClick={() => handleClick(6)}/>
        <Button value = {squares[7]} onClick={() => handleClick(7)}/>
        <Button value = {squares[8]} onClick={() => handleClick(8)}/>
      </div>
    </div> 
  )
}

export default App;