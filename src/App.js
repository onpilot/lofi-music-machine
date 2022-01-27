import { useState, useEffect } from 'react';
import './App.css';
import DrumPad from './DrumPad';

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
      <div>Header</div>
      <div className="wrapper">
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
      <div id="display">{display}</div>
      <div>
        <div className="power">p</div>
        <div className="bank">b</div>
      </div>
    </div>
  );
}

export default App;
