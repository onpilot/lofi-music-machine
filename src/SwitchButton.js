import './switch-button.css';

const SwitchButton = () => {
  return (
    // <label className="switch-wrapper">
    //   <input type="checkbox" />
    //   <span className="switch-btn"></span>
    // </label>
    <div class="toggle-button-cover">
      <div class="button" id="my-button">
        <input type="checkbox" class="checkbox" />
        <div class="knobs"></div>
        <div class="layer"></div>
      </div>
    </div>
  );
};

export default SwitchButton;
