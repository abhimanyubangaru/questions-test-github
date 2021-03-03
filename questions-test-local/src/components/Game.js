import Header from './Header'
import Question from './Question'
import React, { useState } from 'react';
import Donate from './Donate'
import {questions} from './QuestionBank'
import {questions2} from './QuestionBank'





  const Game = (props) => {

  const [currentQuestion, setCurrentQuestion] = useState(0);




    var qs = questions;

    //the next two if statements take care of which array to take the questions from
    if (props.arrNum === 1) {
        qs = questions;

  }

  if (props.arrNum === 2) {
      qs = questions2;

  }

  const Click = () => {
    if(currentQuestion < totalLength -1 ){
      setCurrentQuestion(currentQuestion + 1)
    }
  }


    console.log(qs);


    const totalLength = qs.length;

    //the bottom is mainly to pass in the props to the question object
        return (
          <div className="Game">
            <p>

              {() => setCurrentQuestion(0)}

              <Header />
              {currentQuestion == totalLength - 1 && <h2> FINAL QUESTION</h2>}
              {currentQuestion < totalLength &&
              <Question
              media= {qs[currentQuestion].media}
              questionNumber = {currentQuestion}
              Click={Click}
              onClick={() => setCurrentQuestion(0)}
              type = {qs[currentQuestion].type}
              title = {qs[currentQuestion].title}
              questionText={qs[currentQuestion].questionText}
              answerOptions= {qs[currentQuestion].answerOptions}
              final = {totalLength}
              lh = {props.lh}
              hh = {props.hh}
              />
            }



            </p>
          </div>

        );
}

export default Game;
