import Header from './components/Header'
import Question from './components/Question'
import React, { useState } from 'react';
import Donate from './components/Donate'
import {questions}  from './components/QuestionBank'
import Menu from './Menu'
import Game from './components/Game'


function App(props) {

  const qs = questions;
  // actual variable -- the next is the function
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuestions, setShowQuestions] = useState(true);
  const [arrNum, setArrNum] = useState(0);
  const totalLength = questions.length;
  return (
    <div className="container">
      <Menu
        lh={() => setArrNum(1)}
        onClick={() => setShowQuestions(!showQuestions)}
        hh={()=> setArrNum(2)}/>
      {arrNum}
      {showQuestions && <Game arrNum= {arrNum}/>}
    </div>

  );
}

export default App;
