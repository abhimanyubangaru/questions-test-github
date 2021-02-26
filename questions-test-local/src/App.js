import Header from './components/Header'
import Question from './components/Question'
import React, { useState } from 'react';
import Donate from './components/Donate'
function App() {
  const questions = [ // first array
    { //first question
      questionText : 'When was I a freshman?',
      answerOptions : [
        {answerText: "2020" , isCorrect: false},
        {answerText: "2018", isCorrect: false},
        {answerText: "2017", isCorrect: true},
        {answerText:"2019", isCorrect: false},
      ],
      media : 'https://vimeo.com/208208929',
      type: 'video',
      title: 'my Welcome to Cate video',
    },
    {
      questionText : 'What school do I go to?',
      answerOptions : [
        {answerText: "Blair" , isCorrect: false},
        {answerText: "Cate", isCorrect: true},
        {answerText: "Thacher", isCorrect: false},
        {answerText:"PHS", isCorrect: false},
      ],
      media : 'https://www.cate.org/wp-content/uploads/2018/08/I0A6394.jpg',
      type: 'photo',
      title: 'a picture of the barns',
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const totalLength = questions.length;
  return (
    <div className="container">
      <p>

        <Header />
        {currentQuestion < totalLength ?
        <Question media= {questions[currentQuestion].media}
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
