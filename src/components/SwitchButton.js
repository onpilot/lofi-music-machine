import './switch-button.css';

const SwitchButton = (props) => {
  if (props.checked) {
    return (
      <label className="switch">
        <input type="checkbox" onClick={props.onClick} defaultChecked />
        <span className="slider slider-text">{props.children}</span>
      </label>
    );
  }
  if (!props.checked) {
    return (
      <label className="switch">
        <input type="checkbox" onClick={props.onClick} />
        <span className="slider slider-text">{props.children}</span>
      </label>
    );
  }
};

export default SwitchButton;
