import Header from './components/Header'
import Question from './components/Question'
import React, { useState } from 'react';
import Donate from './components/Donate'
import questions from './components/QuestionBank'

function App(props) {


  // actual variable -- the next is the function
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const totalLength = questions.length;
  return (
    <div className="container">
      <p>

        <Header /> 
        {currentQuestion < totalLength ?
        <Question
        media= {questions[currentQuestion].media}
        questionNumber = {currentQuestion}
        Click={() => setCurrentQuestion(currentQuestion + 1)}
        type = {questions[currentQuestion].type}
        title = {questions[currentQuestion].title}
        questionText={questions[currentQuestion].questionText}
        answerOptions= {questions[currentQuestion].answerOptions}/>
      :
      <h2> all out! </h2>}





      </p>
    </div>

  );
}

export default App;
