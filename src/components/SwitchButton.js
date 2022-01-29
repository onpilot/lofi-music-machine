import './switch-button.css';

const SwitchButton = (props) => {
  if (props.checked === true) {
    return (
      <label className="switch">
        <input type="checkbox" defaultChecked />
        <span className="slider slider-text">{props.children}</span>
      </label>
    );
  } else {
    return (
      <label className="switch">
        <input type="checkbox" />
        <span className="slider slider-text">{props.children}</span>
      </label>
    );
  }
};

export default SwitchButton;
