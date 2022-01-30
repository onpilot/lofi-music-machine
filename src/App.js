import { useState, useEffect } from 'react';
import './App.css';
import DrumPad from './components/DrumPad';
import SwitchButton from './components/SwitchButton';
import Footer from './Footer';

function App() {
  const [power, setPower] = useState(true);
  const [loop, setLoop] = useState(false);
  const [isPlaying, setIsPlaying] = useState('');
  const [display, setDisplay] = useState('Zzz...');

  const switchPower = () => {
    setPower(!power);
  };
  const switchLoop = () => {
    setLoop(!loop);
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

  useEffect(() => {
    if (!loop && isPlaying !== '') {
      let playedAudio = document.getElementById(isPlaying);
      try {
        playedAudio.loop = false;
      } catch (e) {
        console.log(e.message);
      }
    }
  });

  const playSound = (code) => {
    if (power === true) {
      let audio = document.getElementById(code);
      let audioText = document.getElementById(code).innerText;

      if (loop === true) {
        audio.loop = true;
      }

      if (isPlaying !== '') {
        let playedAudio = document.getElementById(isPlaying);
        try {
          playedAudio.pause();
        } catch (e) {
          console.log(e.message);
        }
      }

      try {
        if (audio.paused) {
          audio.currentTime = 0;
        }
        audio.play();
      } catch (e) {
        console.log(e.message);
      } finally {
        setIsPlaying(code);
        setDisplay(audioText);
      }
    }
  };

  return (
    <div id="drum-machine">
      <div className="header">
        <h1>🎶 Lofi Music Machine</h1>
        <p>Playing lofi beats to your ears.</p>
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
