import React from 'react';
import logo from './logo.svg';
import './App.css';
import imageInSrc from “./img/imageInSrc.png"


function App() {
  return (
    const mystyle = {
      border: solid 1px black,
      max-width: 100vw
     
    };
    <div className="App">
            <div style={mystyle}>  
 
              <h1 className=”title red”>Your name here</h1>  

              <br>  

                     

                    <img src={imageInSrc} /> <br></br>
                    <img src=”/imageInPublic.jpg” /></br>



            </div>  

            <video width="320" height="240" controls>  

                <source src="myVideo.mp4" type="video/mp4"> 

            </video> 
    </div>
  );
}

export default App;
