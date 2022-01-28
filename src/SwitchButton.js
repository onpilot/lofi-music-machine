import './switch-button.css';

const SwitchButton = () => {
  return (
    <div className="button">
      <input type="checkbox" className="checkbox" />
      <div className="switch"></div>
    </div>
  );
};

export default SwitchButton;
