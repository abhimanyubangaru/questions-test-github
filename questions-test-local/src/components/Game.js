import Header from './Header'
import Question from './Question'
import React, { useState } from 'react';
import Donate from './Donate'
import {deucefive} from './QuestionBank'
import {LongHouse} from './QuestionBank'
import {SchoolHouse} from './QuestionBank'
import {Pars} from './QuestionBank'
import {CHW} from './QuestionBank'
import {CHE} from './QuestionBank'
import {Savage} from './QuestionBank'
import {Bothin} from './QuestionBank'




  const Game = (props) => {

  const [arrNum,setArrNum] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);




    var qs = deucefive;

    //the next two if statements take care of which array to take the questions from
    if (arrNum === 1) {
        qs = deucefive;

  }

  if (arrNum === 2) {
      qs = LongHouse;

  }

  if (arrNum === 3) {
    qs = SchoolHouse;
  }

  if (arrNum === 4 ) {
    qs = Pars
  }

  if (arrNum === 5) {
    qs = Lido
  }

  if (arrNum === 5) {
    qs = CHW
  }

  if (arrNum === 6) {
    qs = CHE
  }

  if (arrNum === 7) {
    qs = Savage
  }

  if (arrNum === 8) {
    qs = Bothin
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
            {arrNum}
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
              dormButton = {((index) => setArrNum(index))}
              />
            }



            </p>
          </div>

        );
}

export default Game;
