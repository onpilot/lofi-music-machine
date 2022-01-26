import { useState } from 'react';
import './App.css';

function App() {
  // const [value, setValue] = useState(false);
  const playSound = (padLetter) => {
    const audio = document.getElementById(padLetter);
    try {
      audio.play();
    } catch (error) {
      console.log('No Id found');
    }
  };
  return (
    <div id="drum-machine">
      <div id="pads" className="wrapper">
        <div className="drum-pad">
          <input
            type="button"
            className="drum-pad-letter"
            value="q"
            onClick={() => playSound('q')}
          />
          <audio
            id="q"
            className="clip"
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
          ></audio>
        </div>
        <div className="drum-pad"></div>
        <div className="drum-pad"></div>
        <div className="drum-pad"></div>
        <div className="drum-pad"></div>
        <div className="drum-pad"></div>
        <div className="drum-pad"></div>
        <div className="drum-pad"></div>
        <div className="drum-pad"></div>
      </div>
      <div id="display">
        <div className="power">p</div>
        <div className="bank">b</div>
      </div>
    </div>
  );
}

export default App;
