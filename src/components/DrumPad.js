import './drum-pad.css';
import audioDictionary from '../sounds/audioDictionary.json';

const Audio = (props) => {
  const audioSrc = audioDictionary[0][props.id];
  // console.log(audioSrc);
  return <audio id={props.id} className="clip" src={audioSrc}></audio>;
};

const DrumPad = (props) => {
  const id = props.id;
  return (
    <button
      id={`pad-${id}`}
      className="drum-pad pad-letter"
      type="button"
      onClick={props.onClick}
    >
      {id}
      <Audio id={id}></Audio>
    </button>
  );
};

export default DrumPad;
