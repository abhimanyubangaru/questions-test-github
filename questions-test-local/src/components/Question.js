import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import Header from './Header'
import Button from './Button'
import Donate from './Donate'
import Menu from './Menu'
import DormsList from './DormsList'

  const Question = (props) => {
    const [score, setScore] = useState(0);
    const[hitLast,setHitLast] = useState(false);


    const clickDormButton = (index) => {
      props.dormButton(parseInt(index) + 1);
      props.onClick();
      setScore(0);

    }



    // to reset the score for every question and then move onto the next question
    const setZero = () => {
      setScore(0);
      if(props.Click){
      props.Click()
    }
    }

    const element =  <Button
                       onClick= {() => setZero()}
                       text = "Next"
                       color = "darkblue">
                     </Button> ;




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

        if(props.questionNumber === props.final){
          setHitLast(true);
        }
        console.log(score);
      };






        return (



          <div className='question-section'>
                {/*props from the app.js changes the array from the question bank */}
          {/*}  <button onClick={clickLH}> 25 House</button>
        <button onClick={clickHH}> High House</button> */}

          {DormsList.map((dorm,index) => (
            <button
              value = {index + 1}
              onClick={() =>  clickDormButton(index)}>
              {dorm}
            </button>

          ))}
            <br/>
            <br/>




            {score > 0 && <Donate media= {props.media} title={props.title}/>}

                {/*we only want to show the next button if there is a next question. This takes care of that problem*/}
            <h3>{props.questionNumber+1}. {props.questionText}
             {props.questionNumber < props.final - 1 && element}
            </h3>



                {/*this reads all the answeroptions and maps them into buttons which different values and onclick functions. This helps to automate the process*/}
              {props.answerOptions.map((answerOption) => (
                <ul><button
                  value={answerOption.answerText}
                  className="choices"
                  onClick={() => isOptionCorrect(answerOption.isCorrect)}>
                    {answerOption.answerText}</button> </ul>
              ))}


                  {/*This is what happens if the user wins and based on the type of media changes the function to accomodate for different types of media*/}
              {score == 1 && <>
              <h4 style={{color : 'limegreen'}}> You Got It! Here is {props.title}! </h4>
              <img src={props.media} width='500'/>
                             </>}

                  {/*This is what happens if the user wins and based on the type of media changes the function to accomodate for different types of media*/}
              {score == 2 && <>
              <h4 style={{color : 'limegreen'}}> You Got It! Here is {props.title}! </h4>
              <ReactPlayer url={props.media} controls/>
                            </> }
                 {/*situation in which the user loses, then they get a red message which indicates a wrong answer*/}
             {score == -1 && <h4 style={{color : 'red'}}> Uh oh! Try Again </h4>}

          </div>



        )
      }

      export default Question
