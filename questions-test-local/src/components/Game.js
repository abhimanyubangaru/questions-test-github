import Header from './Header'
import Question from './Question'
import React, { useState } from 'react';
import Donate from './Donate'
import {questions} from './QuestionBank'
import {questions2} from './QuestionBank'




function Game(props) {


  var qs = [];

  if (props.arrNum === 1) {
      qs = questions;

}

if (props.arrNum === 2) {

    qs = questions2;

}

  console.log(qs);

  // actual variable -- the next is the function
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const totalLength = qs.length;
  return (
    <div className="Game">
      <p>
        <Header />
        {currentQuestion < totalLength ?
        <Question
        media= {qs[currentQuestion].media}
        questionNumber = {currentQuestion}
        Click={() => setCurrentQuestion(currentQuestion + 1)}
        type = {qs[currentQuestion].type}
        title = {qs[currentQuestion].title}
        questionText={qs[currentQuestion].questionText}
        answerOptions= {qs[currentQuestion].answerOptions}/>
      :
      <h2> all out! </h2>}






      </p>
    </div>

  );
}

export default Game;
