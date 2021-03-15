import React from 'react';
import ReactPlayer from 'react-player';

const Welcome = () => {
  // <video
  //   autoPlay
  //   loop
  //   muted
  //   id="video"
  //   >
  //   <source src={vidSource} type= 'video/mp4'/>
  // </video>
  // /        <ReactPlayer url="https://vimeo.com/258158638"/>  <iframe src="https://player.vimeo.com/video/258158638" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
// <p><a href="https://vimeo.com/258158638">Welcome to Cate!</a> from <a href="https://vimeo.com/cateschool">Cate School</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
  const vidSource = "https://www.w3schools.com/tags/movie.mp4"
  return (
    <div className="welcome">

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

      <div className = "Welcome-wrapper"
            style={{
              
              paddingBottom: "56.25%" /* 16:9 */,
              paddingTop: 25,
              height: 0
            }}>

        {/* https://medium.com/@infinitysanctum8/how-to-add-a-video-background-in-react-js-8c31e0bc4f42*/}
        {/* The link above is one of the tutorials I followed to get this background video to work, but it won't for some reason. */}




        <iframe src="https://player.vimeo.com/video/208208929?autoplay=1&loop=1&autopause=0&controls=0&muted=1" id="video"  allow="autoplay"  allowfullscreen></iframe>




        </div>

    </div>
  )
}


export default Welcome
