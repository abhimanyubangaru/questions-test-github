import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {questions}  from './components/QuestionBank'
import Game from './components/Game'
import Nav from './components/Navi'
import Welcome from './components/Welcome'

function App(props) {
//    <Route path="/about" component={About}/>
  const qs = questions;
  // actual variable -- the next is the function
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuestions, setShowQuestions] = useState(false);
  const [arrNum, setArrNum] = useState(0);
  const totalLength = questions.length;
  return (
    <Router>
      <Switch>
    <div className="container">
      <Nav/>
      <Route path="/" exact component={Welcome}/>
      <Route
         path="/game"
         render={(props) => (
    <Game {...props}
W

    arrNum= {arrNum}
    lh={() => setArrNum(1)}
    hh={()=> setArrNum(2)}

    />
)}
/>

    </div>
    </Switch>
    </Router>
  );
}

export default App;
