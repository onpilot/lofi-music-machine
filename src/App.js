import { useState, useEffect } from 'react';
import './App.css';
import DrumPad from './components/DrumPad';
import SwitchButton from './components/SwitchButton';

function App() {
  // const [isPlaying, setIsPlaying] = useState(false);
  const [display, setDisplay] = useState('Zzz...');
  // const [display, setDisplay] = useState('Hello, there!');
  const playSound = (pad) => {
    const audio = document.getElementById(pad);
    try {
      audio.play();
      // console.log(audio);
      setDisplay(audio.id);
    } catch (error) {
      console.log('No Id found');
    }
  };

  const handleKeyDown = (event) => {
    if (
      (event.code === 'KeyQ') |
      (event.code === 'KeyW') |
      (event.code === 'KeyE') |
      (event.code === 'KeyA') |
      (event.code === 'KeyS') |
      (event.code === 'KeyD') |
      (event.code === 'KeyZ') |
      (event.code === 'KeyX') |
      (event.code === 'KeyC')
    ) {
      const keypress = event.key.toUpperCase();
      playSound(keypress);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div id="drum-machine">
      <div className="header">
        <h1>🎶 Lofi Music Machine</h1>
        <p>Arrange your own lofi beats.</p>
      </div>
      <div id="display">
        <p>{display}</p>
      </div>
      <div className="main-pad-wrapper">
        <DrumPad id="Q" onClick={() => playSound('Q')}></DrumPad>
        <DrumPad id="W" onClick={() => playSound('W')}></DrumPad>
        <DrumPad id="E" onClick={() => playSound('E')}></DrumPad>
        <DrumPad id="A" onClick={() => playSound('A')}></DrumPad>
        <DrumPad id="S" onClick={() => playSound('S')}></DrumPad>
        <DrumPad id="D" onClick={() => playSound('D')}></DrumPad>
        <DrumPad id="Z" onClick={() => playSound('Z')}></DrumPad>
        <DrumPad id="X" onClick={() => playSound('X')}></DrumPad>
        <DrumPad id="C" onClick={() => playSound('C')}></DrumPad>
      </div>
      <div className="config-pad-wrapper">
        <div className="option-button">
          <SwitchButton checked={true}>power</SwitchButton>
        </div>
        <div className="option-button">
          <SwitchButton>bank</SwitchButton>
        </div>
      </div>

      {/* <a
        className="twitter"
        href="https://twitter.com/onpilot_"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>
        </svg>
      </a> */}
    </div>
  );
}

export default App;
