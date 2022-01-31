import { useState, useEffect } from 'react';
import './App.css';
import Display from './components/Display';
import DrumPad from './components/DrumPad';
import SwitchButton from './components/SwitchButton';
import Footer from './Footer';

const acceptedEventCode = [
  'KeyQ',
  'KeyW',
  'KeyE',
  'KeyA',
  'KeyS',
  'KeyD',
  'KeyZ',
  'KeyX',
  'KeyC',
];

function App() {
  const [power, setPower] = useState(true);
  const [loop, setLoop] = useState(false);
  const [isPlaying, setIsPlaying] = useState(null);
  const initialDisplay = 'Zzz...';
  const [display, setDisplay] = useState(initialDisplay);

  const switchPower = () => {
    setPower(!power);
  };
  const switchLoop = () => {
    setLoop(!loop);
  };

  const handleKeyDown = (event) => {
    acceptedEventCode.forEach((i) => {
      if (event.code === i) {
        const keypress = event.key.toUpperCase();
        playSound(keypress);
      }
    });
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  const playedAudio = document.getElementById(isPlaying);
  useEffect(() => {
    if (!power && playedAudio) {
      playedAudio.pause();
      setIsPlaying(null);
      setDisplay(initialDisplay);
    }
  }, [power, playedAudio]);

  useEffect(() => {
    if (!loop && isPlaying !== null) {
      playedAudio.loop = false;
    }
    if (loop && isPlaying !== null) {
      playedAudio.loop = true;
    }
  });

  const playSound = (code) => {
    if (power) {
      let audio = document.getElementById(code);
      let audioText = document.getElementById(code).innerText;

      if (isPlaying !== null) {
        playedAudio.pause();
      }

      if (audio.paused) {
        audio.currentTime = 0;
      }

      audio.play();
      setIsPlaying(code);
      setDisplay(audioText);
    }
  };

  const resetState = () => {
    setIsPlaying(null);
    setDisplay(initialDisplay);
  };

  return (
    <div id="drum-machine">
      <div className="header">
        <h1>🎶 Lofi Music Machine</h1>
        <p>Playing lofi beats to your ears.</p>
      </div>
      <Display id="display" display={display} power={power}></Display>
      <div className="main-pad-wrapper">
        <DrumPad
          id="Q"
          onClick={() => playSound('Q')}
          onEnded={() => resetState()}
          animated={isPlaying}
        ></DrumPad>
        <DrumPad
          id="W"
          onClick={() => playSound('W')}
          onEnded={() => resetState()}
          animated={isPlaying}
        ></DrumPad>
        <DrumPad
          id="E"
          onClick={() => playSound('E')}
          onEnded={() => resetState()}
          animated={isPlaying}
        ></DrumPad>
        <DrumPad
          id="A"
          onClick={() => playSound('A')}
          onEnded={() => resetState()}
          animated={isPlaying}
        ></DrumPad>
        <DrumPad
          id="S"
          onClick={() => playSound('S')}
          onEnded={() => resetState()}
          animated={isPlaying}
        ></DrumPad>
        <DrumPad
          id="D"
          onClick={() => playSound('D')}
          onEnded={() => resetState()}
          animated={isPlaying}
        ></DrumPad>
        <DrumPad
          id="Z"
          onClick={() => playSound('Z')}
          onEnded={() => resetState()}
          animated={isPlaying}
        ></DrumPad>
        <DrumPad
          id="X"
          onClick={() => playSound('X')}
          onEnded={() => resetState()}
          animated={isPlaying}
        ></DrumPad>
        <DrumPad
          id="C"
          onClick={() => playSound('C')}
          onEnded={() => resetState()}
          animated={isPlaying}
        ></DrumPad>
      </div>
      <div className="config-pad-wrapper">
        <div className="option-button">
          <SwitchButton checked onClick={() => switchPower()}>
            power
          </SwitchButton>
        </div>
        <div className="option-button">
          <SwitchButton onClick={() => switchLoop()}>loop</SwitchButton>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
