import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // const [isPlaying, setIsPlaying] = useState(false);
  const [display, setDisplay] = useState('');
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
      <div className="wrapper">
        <div id="pad-1" className="drum-pad">
          <button
            type="button"
            className="drum-pad-btn"
            onClick={() => playSound('Q')}
          >
            Q
          </button>
          <audio
            id="Q"
            className="clip"
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
          ></audio>
        </div>
        <div id="pad-2" className="drum-pad">
          <button
            type="button"
            className="drum-pad-btn"
            onClick={() => playSound('W')}
          >
            W
          </button>
          <audio
            id="W"
            className="clip"
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
          ></audio>
        </div>
        <div id="pad-3" className="drum-pad">
          <button
            type="button"
            className="drum-pad-btn"
            onClick={() => playSound('E')}
          >
            E
          </button>
          <audio
            id="E"
            className="clip"
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
          ></audio>
        </div>
        <div id="pad-4" className="drum-pad">
          <button
            type="button"
            className="drum-pad-btn"
            onClick={() => playSound('A')}
          >
            A
          </button>
          <audio
            id="A"
            className="clip"
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
          ></audio>
        </div>
        <div id="pad-5" className="drum-pad">
          <button
            type="button"
            className="drum-pad-btn"
            onClick={() => playSound('S')}
          >
            S
          </button>
          <audio
            id="S"
            className="clip"
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
          ></audio>
        </div>
        <div id="pad-6" className="drum-pad">
          <button
            type="button"
            className="drum-pad-btn"
            onClick={() => playSound('D')}
          >
            D
          </button>
          <audio
            id="D"
            className="clip"
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
          ></audio>
        </div>
        <div id="pad-7" className="drum-pad">
          <button
            type="button"
            className="drum-pad-btn"
            onClick={() => playSound('Z')}
          >
            Z
          </button>
          <audio
            id="Z"
            className="clip"
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
          ></audio>
        </div>
        <div id="pad-8" className="drum-pad">
          <button
            type="button"
            className="drum-pad-btn"
            onClick={() => playSound('X')}
          >
            X
          </button>
          <audio
            id="X"
            className="clip"
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
          ></audio>
        </div>
        <div id="pad-9" className="drum-pad">
          <button
            type="button"
            className="drum-pad-btn"
            onClick={() => playSound('C')}
          >
            C
          </button>
          <audio
            id="C"
            className="clip"
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
          ></audio>
        </div>
      </div>
      <div id="display">{display}</div>
      <div>
        <div className="power">p</div>
        <div className="bank">b</div>
      </div>
    </div>
  );
}

export default App;
