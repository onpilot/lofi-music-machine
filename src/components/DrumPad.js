import './drum-pad.css';
import audioDictionary from './sounds.js';

const Audio = (props) => {
  const { id } = props;
  // const audioSrc = audioList[0][id];
  // const audioSrc = audioDictionary[id]['src'];
  const { src, name } = audioDictionary[id];
  return (
    <audio id={id} className="clip" src={src}>
      {name}
    </audio>
  );
};

const DrumPad = (props) => {
  const { id, onClick } = props;
  return (
    <button
      id={`pad-${id}`}
      className="drum-pad pad-letter"
      type="button"
      onClick={onClick}
    >
      {id}
      <Audio id={id}></Audio>
    </button>
  );
};

export default DrumPad;
