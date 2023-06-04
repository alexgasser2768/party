import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import ReactPlayer from 'react-player'

// Render a YouTube video player
function App() {
  const [participants, setParticipants] = useState(50)
  const [visible, setVisible] = useState(true)
  
  const clicked = () => {
    setParticipants(participants+1) 
    setVisible(false)
  }

  return (
    <div className="App">
      <div className='banner'>
      <div class="container">
  <div class="row first">
    <div class="col">
    <div className='count'>
          <h1 className='text'>Participants : {participants}</h1>
        </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
    <div className='text'>
              <h2 className='title'>San Juan Party</h2>
              <h3 className='subtitle'>7 of june 23H</h3>
              <h5 className='legend'>By le 7 de base</h5>
              <button disabled={!visible} onClick={()=> {
                clicked()
              }} className='btn'>I'll be there</button>
            </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
    <div className='seeMore'>
          <a href='#see'>
          <button className='btn'>
                    Last Year's Party
            </button>
          </a>
        </div>
    </div>
  </div>
</div>


      </div>
      <div className='video-banner'>
        <ReactPlayer id="see" className="player" url='https://www.youtube.com/watch?v=jrjS-WgHmEQ' />      </div>
    </div>
  );
}

export default App;
