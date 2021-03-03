import Header from './Header'
import Question from './Question'
import React, { useState } from 'react';
import Donate from './Donate'
import {questions} from './QuestionBank'
import {questions2} from './QuestionBank'





function Game(props) {

  const [currentQuestion, setCurrentQuestion] = useState(0);




    var qs = questions;

    if (props.arrNum === 1) {
        qs = questions;

  }

  if (props.arrNum === 2) {
      qs = questions2;

  }

    console.log(qs);

    // actual variable -- the next is the function
    const totalLength = qs.length;
        return (
          <div className="Game">
            <p>

              {() => setCurrentQuestion(0)}

              <Header />

              {currentQuestion < totalLength ?
              <Question
              media= {qs[currentQuestion].media}
              questionNumber = {currentQuestion}
              Click={() => setCurrentQuestion(currentQuestion + 1)}
              type = {qs[currentQuestion].type}
              title = {qs[currentQuestion].title}
              questionText={qs[currentQuestion].questionText}
              answerOptions= {qs[currentQuestion].answerOptions}
              qNum = {currentQuestion}
              lh = {props.lh}
              hh = {props.hh}
              />
            :
            <h2> Please navigate to a different question section </h2>}


            </p>
          </div>

        );
}

export default Game;
