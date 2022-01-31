import './drum-pad.css';
import audioDictionary from './sounds.js';

const Audio = (props) => {
  const { id } = props;
  const { src, name } = audioDictionary[id];
  return (
    <audio id={id} className="clip" src={src}>
      {name}
    </audio>
  );
};

const DrumPad = (props) => {
  const { id, onClick, onEnded, animated } = props;
  if (animated === props.id) {
    return (
      <button
        id={`pad-${id}`}
        className="drum-pad pad-letter drum-pad-animated"
        type="button"
        onClick={onClick}
        onEnded={onEnded}
      >
        {id}
        <Audio id={id}></Audio>
      </button>
    );
  }
  return (
    <button
      id={`pad-${id}`}
      className="drum-pad pad-letter"
      type="button"
      onClick={onClick}
      onEnded={onEnded}
    >
      {id}
      <Audio id={id}></Audio>
    </button>
  );
};

export default DrumPad;
