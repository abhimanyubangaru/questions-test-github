import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Header from './Header'
import Button from './Button'
import Donate from './Donate'


  const Question = (props) => {
    const [score, setScore] = useState(0);

    // to reset the score for every question and then move onto the next question
    const setZero = () => {
      setScore(0);
      if(props.Click){
      props.Click()
    }
    }




      const isOptionCorrect = (isCorrect) => {

        if (isCorrect) {
          setScore(1);
          if(props.type === 'video'){
            setScore(2);
          }
        }
        else{
          setScore(-1);
        }
        console.log(score);
      };



        return (

          <div className='question-section'>

              {score > 0 && <Donate media= {props.media} title={props.title}/>}

            <h3>{props.questionNumber+1}. {props.questionText}     <Button
                   onClick= {() => setZero()}
                   text = "Next"
                   color = "dodgerblue">
                 </Button></h3>



              {props.answerOptions.map((answerOption) => (
                <ul><button onClick={() => isOptionCorrect(answerOption.isCorrect)}>
                    {answerOption.answerText}</button> </ul>
              ))}



              {score == 1 && <h4 style={{color : 'limegreen'}}> You Got It! Here is {props.title}! </h4>}
              {score == 1 && <img src={props.media} width='500'/>}
              {score == 2 && <h4 style={{color : 'limegreen'}}> You Got It! Here is {props.title}! </h4>}
              {score == 2 && <ReactPlayer url={props.media} controls/> }
             {score == -1 && <h4 style={{color : 'red'}}> Uh oh! Try Again </h4>}



          </div>



        )
      }

      export default Question
