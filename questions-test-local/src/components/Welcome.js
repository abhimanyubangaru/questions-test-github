import React from 'react';
import ReactPlayer from 'react-player';
import stressedVideo_final from "./video/stressedVideo_final.mp4"
const Welcome = () => {
  const vidSource = "https://www.w3schools.com/tags/movie.mp4"
  return (
    <div className = "Welcome-wrapper">

      {/* https://medium.com/@infinitysanctum8/how-to-add-a-video-background-in-react-js-8c31e0bc4f42*/}
      {/* The link above is one of the tutorials I followed to get this background video to work, but it won't for some reason. */}


      <video
        autoPlay
        loop
        muted
        id="video"
        >
        <source src={vidSource} type= 'video/mp4'/>
      </video>


      <div className="WelcomeBox">
      <body>
        <h1>
          Welcome to the Cate Trivia Website!
        </h1>

      In this website, you will be able to answer different questions about the different dorms. <br/>

      The navigation bar will remain at the top of the screen at all times. Once inside the game section, please click on
      the different buttons(each has a distinct dorm name) to be taken to different question sets. <br/>

    <strong> When you are on the last question, the next button will disappear. </strong><br/>

      Don't worry, just click on one of the other sets.

        <br/>

      Have fun!
      </body>
      </div>
    </div>
  )
}


export default Welcome
