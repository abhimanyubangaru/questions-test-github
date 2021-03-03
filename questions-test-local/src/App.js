import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {questions}  from './components/QuestionBank'
import Game from './components/Game'
import Nav from './components/Navi'
import Welcome from './components/Welcome'
import AboutDorms from './components/AboutDorms'

function App(props) {
  // this is the template for any routing component
//    <Route path="/about" component={About}/>
  const qs = questions;
  // these control the current question, the current array from which the questions are from
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [arrNum, setArrNum] = useState(0);
  const totalLength = questions.length;

  return (
    <Router>
      <Switch>
    <div className="container">
      <Nav/>
      {/*Welcome page is supposed to be the first thing the user sees*/}
      <Route path="/" exact component={Welcome}/>
      {/*This route handles the actual game, and each button(dorm name) needs to lead to a different array */}
      <Route
         path="/game"
         render={(props) => (

    <Game {...props}

    arrNum= {arrNum}
    lh={() => setArrNum(1)}
    hh={()=> setArrNum(2)}

          />
      )}
      />
    {/*This handles going to the page about the dorms*/}
    <Route path="/dorms" exact component={AboutDorms}/>

    </div>
    </Switch>
    </Router>
  );
}

export default App;
